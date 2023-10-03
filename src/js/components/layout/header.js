import Ractive from 'ractive';

import template from '../../../templates/layout/header.html';

import ActionClass from '../../actions/Action';

let Header = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    oninit()
    {

        this.on(
        {
            changeRoute: ( e ) =>
            {
                             
                this.set( 'data.web.route', e.node.id );
            },
            killSesion: ( e ) =>
            {
                this.set( 'data.web.route', e.node.id );
                this.set('data.web.islogin', false);
            },

        });
    },
}); 

export default Header;