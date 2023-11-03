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
        modiUsuario: null,

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
                
                this.set('modiUsuario', this.encontrarUsuarioPorClave(id));

            },
            modUsuario: (e) => {
                let usuario = this.get('modiUsuario');

                let indice = this.encontrarIndicePorClave(usuario.clave);

                this.set(`data.usuarios[${indice}].Nombre`, usuario.Nombre);
                this.set(`data.usuarios[${indice}].status`, usuario.status);
                this.set(`data.usuarios[${indice}].Area`, usuario.Area);
                this.set(`data.usuarios[${indice}].Rol`, usuario.Rol);

                $('#modalDetalles').modal('hide');

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
    encontrarUsuarioPorClave(clave) {

        let usuarios = this.get('data.usuarios');
    
        const usuarioEncontrado = usuarios.find(usuario => usuario.clave === clave);
    
        return usuarioEncontrado || null;
    },
    encontrarIndicePorClave(clave) {
        const usuarios = this.get('data.usuarios');

        const indice = usuarios.findIndex(usuario => usuario.clave === clave);
    
        return indice;
    }
}
)

export default Roles;