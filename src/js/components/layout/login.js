import Ractive from 'ractive';
import Moment from 'moment';
import locale_es from "moment/locale/es";

import template from '../../../templates/layout/login.html';

import ActionClass from '../../actions/Action';

let Login = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    data: () => ({
    	current: null,
        lista: null,
        Logueando: null,
        merror: '',
        Usuario: {
            Id: null,
            Contra: null
        }

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

        this.on(
        {
            changeRoute: ( e ) =>
            {             
                this.set( 'data.web.route', e.node.id );
            },
            doLogin: ( e ) =>
            {
                this.set('Logueando', 1);
                this.verificaUsuario();
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
    verificaUsuario()
    {

        this.set('Usuario.Rpe', this.get('rpe'));
        this.set('Usuario.Contra', this.get('passwd'));

        let Action = new ActionClass();

        Action.ApiRequest( 'post', `/Rc/Login`, this.get('Usuario') )
            .then( ( r ) => this.setResultUser( r ) )
            .catch( ( r ) => this.errorLogin( r ) ); 
    },
    setResultUser( result )
    {
        if( result.total == 1 )
        {
            this.set('data.usuarioLog', result.rows[0]);
            this.set('merror', '');
            this.set('Logueando', 0);
            this.set('data.web.islogin', true);
            this.set( 'data.web.route', 'Inicio' );

            console.log(this.get('data.usuarioLog'));
            return true;

           

        }
        else
        {
            this.set('merror', result.msj);
            this.set('data.web.islogin', false);
            this.set('Logueando', 0);
            return false;
        }
    },
    errorLogin( result )
    {
        if( result )
        {
            this.set('merror', result.msj);
            this.set('data.web.islogin', false);
            this.set('Logueando', 0);
        }
    },
}); 

export default Login;