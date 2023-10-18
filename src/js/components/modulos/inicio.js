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
        //return Moment.unix(timestamp).locale('es').fromNow();
    },
    tiempoEnPiso2(timestamp) {

        return Moment.unix(timestamp).locale('es').fromNow();
    },
    tiempoFormato(datenow) {

        return datenow.format("DD-MM-YYYY");
    },
    oninit()
    {

        this.zonas();
        this.tipos();
        this.estatus();
        this.agencias();
        this.municipios();
        this.colonias();
        this.subestaciones();
        this.circuitos();

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
            if(tipo == 2){
                this.set('data.web.tipos', result.rows);
            }
            if(tipo == 3){
                this.set('data.web.estatus', result.rows);
            }
            if(tipo == 4){
                this.set('data.web.agencias', result.rows);
            }
            if(tipo == 5){
                this.set('data.web.municipios', result.rows);
            }
            if(tipo == 6){
                this.set('data.web.colonias', result.rows);
            }
            if(tipo == 7){
                this.set('data.web.subestaciones', result.rows);
            }
            if(tipo == 8){
                this.set('data.web.circuitos', result.rows);
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
    zonas(){
        this.set('data.web.zonas', '');
        let url = '/Rd/Zonas';

        this.pruebaGet( url, 1);
    },
    tipos(){
        this.set('data.web.tipos', '');
        let url = '/Rd/Tipos';

        this.pruebaGet(url, 2);
    },
    estatus(){
        this.set('data.web.estatus', '');
        let url = '/Rd/Estatus';

        this.pruebaGet(url, 3);
    },
    agencias(){
        this.set('data.web.agencias', '');
        let url = '/Rd/Agencias';

        this.pruebaGet(url, 4);
    },
    municipios(){
        this.set('data.web.municipios', '');
        let url = '/Rd/Municipios';

        this.pruebaGet(url, 5);
    },
    colonias(){
        this.set('data.web.colonias', '');
        let url = '/Rd/Colonias';

        this.pruebaGet(url, 6);
    },
    subestaciones(){
        this.set('data.web.subestaciones', '');
        let url = '/Rd/Subestaciones';

        this.pruebaGet(url, 7);
    },
    circuitos(){
        this.set('data.web.circuitos', '');
        let url = '/Rd/Circuitos';

        this.pruebaGet(url, 8);
    }
}); 

export default Inicio;