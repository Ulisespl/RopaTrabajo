import Ractive from 'ractive';
import Moment from 'moment';
import locale_es from "moment/locale/es";

import template from '../../../templates/modulos/inicio.html';

import ActionClass from '../../actions/Action';

let Inicio = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    data: () => ({
        current: null,
        lista: null

    }),
    unixtToDate(timestamp) {

        return Moment.unix(timestamp).format("DD-MM-YYYY HH:mm");
    },
    tiempoEnPiso(timestamp, timestamp2) {

        return Moment.unix(timestamp).locale('es').from(Moment.unix(timestamp2), true);
    },
    tiempoEnPiso2(timestamp) {

        return Moment.unix(timestamp).locale('es').fromNow();
    },
    tiempoFormato(datenow) {

        return datenow.format("DD-MM-YYYY");
    },
    oninit()
    {

        this.on(
        {
            changeRoute: ( e ) =>
            {
                             
                this.set( 'data.web.route', e.node.id );
            }

        });
    },
    error( result )
    {
        if( result.login )
        {
            window.location.reload();
        }
    },
    pruebaGet(url, tipo)
    {

        let Action = new ActionClass();

        Action.ApiRequest( 'get', url)
        .then( ( r ) => this.setResult( r, tipo ) )
        .catch( ( r ) => this.error( r ) ); 
    },
    setResult( result, tipo )
    {

        if( result )
        {

            if(tipo == 1){
                this.set('data.web.zonas', result.rows);
            } 
            
            return true;
        }
        else
        {
            return false;
        }
    },
    setResultCatalogo(result){

        if( result ){
            this.set( 'data.sys.cataAnomalias', result.rows );
            return true;
        }
        else{
            return false;
        }
    },
}); 

export default Inicio;