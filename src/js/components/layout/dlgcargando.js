import Ractive from 'ractive';

import template from '../../../templates/layout/dlgcargando.html';

let DialogCargando = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    components: null
}); 

export default DialogCargando;