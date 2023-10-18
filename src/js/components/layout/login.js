import Ractive from 'ractive';
import Moment from 'moment';
import locale_es from "moment/locale/es";

import template from '../../../templates/layout/login.html';

//import ActionClass from '../../actions/Action';

let Login = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    data: () => ({
    	current: null,
        lista: null,
        Logueando: null,
        merror: '',

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

        let clave = this.get('clave');
        let pass = this.get('passwd');

        let correcto = this.verificarCredenciales(clave, pass);

        if (correcto == true){

            this.set('Logueando', 0);
            this.set('data.web.islogin', true);
            this.set('data.web.route', 'Inicio' );

        }else{
            this.set('merror', 'Usuario incorrecto');
            this.set('data.web.islogin', false);
            this.set('Logueando', 0);
            return false;
        }
    },
    verificarCredenciales(usuario, contraseña) {
        let usuarios = this.get('data.usuarios');

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].clave === usuario.toUpperCase() && usuarios[i].Pass === contraseña.toUpperCase()) {
                this.set('data.usuarioLog', usuarios[i]); 
                return true;
            }
        }
        return false;
    }


}); 

export default Login;