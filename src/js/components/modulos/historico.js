import Ractive from 'ractive';
import Moment from 'moment';
import locale_es from "moment/locale/es";

import template from '../../../templates/modulos/historico.html';

import ActionClass from '../../actions/Action';

let Historico = Ractive.extend({
    isolated: false, 
    template: template,
    data: () => ({
        current: null,
        anioEle: null,
        ropa: null

    }),
    methods: {
        toggleHover: function(value) {
          this.set('isHovered', value);
        }
    },
    monedaFormato(cantidad) {

        let cant2 = 0;
        cant2 = (parseFloat(cantidad)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
        return cant2;

    },
    enteroFormato(cantidad){
        return cantidad.toLocaleString();
    },
    oninit()
    {
        
        this.on(
        {
            

            changeRoute: ( e ) =>
            {
                             
                this.set( 'data.web.route', e.node.id );
            },
            Consultar: (e) => {
                let anio = this.get('anioEle');

                let ropaHisto = this.obtenerInfoPorAño( this.get('data.prendasHistorico'), anio );

                this.set('ropa', ropaHisto);
            },
            Descargar: () => {
               
                let headers = this.get('data.exports.excelRopa.headers');
                let ropa = this.get('ropa');
    
                this.generaXlsx(headers , ropa);
                
            }
           
        });
    },
    pruebaGet(url, tipo)
    {
        $('#modalCargando').modal('show');

        let Action = new ActionClass();

        Action.ApiRequest( 'get', url)
            .then( ( r ) => this.setResult( r, tipo) )
            .catch( ( r ) => this.error( r , tipo) ); 
    },
    error( result )
    {
        console.log( `Error -> ${result}` );
        $('#modalCargando').modal('hide');
        if( result.login )
        {
            window.location.reload();
        }
    },
    setResult( result , tipo)
    {
        if( result )
        {

            if(tipo == 1){
                this.set( 'listaDanios', result.rows );
            }

            $('#modalCargando').modal('hide');
            return true;
        }
        else
        {
            $('#modalCargando').modal('hide');
            return false;
        }
    },
    obtenerInfoPorAño(arr, año) {

        console.log(arr, año);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Año == año) {
                return arr[i].Eleccion;
            }
        }
        return null; // Si no se encuentra el año, retorna null
    },
    generaXlsx( headers, ropa ){
        let csv = "";
        

        for(let i = 0; i < headers.length; i++)
        {
            csv += headers[i] + ",";
        }

        csv += '\n';

        let reporte = ropa;
        let csv_linea = "";
        csv += csv_linea;


        for(let i = 0; i < reporte.length; i++)
        {
            csv += csv_linea;
            csv += (i+1) + ",";
            csv += reporte[i].Cantidad + ",";
            csv += reporte[i].Articulo + ",";
            csv += reporte[i].Descripcion + ",";
            csv += reporte[i].Modelo + ",";
            csv += reporte[i].Talla + ",";
            
            csv += '\n';
        }




        let uri = "data:text/csv;charset=utf-8," + encodeURI(csv);
        let descargaCsv = document.createElement('a');
        descargaCsv.href = uri;
        descargaCsv.target = '_blank';
        descargaCsv.download = 'Reporte de Ropa' + '.csv';
        document.body.appendChild(descargaCsv);
        descargaCsv.click();
        document.body.removeChild(descargaCsv);
        
    },
        
}
)

export default Historico;