import Ractive from 'ractive';
import Moment from 'moment';
import locale_es from "moment/locale/es";

import template from '../../../templates/modulos/roles.html';

import ActionClass from '../../actions/Action';

let Roles = Ractive.extend({
    isolated: false, 
    template: template,
    data: () => ({
        current: null,
        fec_desde: null,
        fec_hasta: null,
        id_zona: null, 
        zonasPaso: null,
        listaDanios: null,
        danioPaso: null,

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

            getUsuario: ( e ) => {

                let id = e.node.id;
                console.log( id);
                
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
        
}
)

export default Roles;