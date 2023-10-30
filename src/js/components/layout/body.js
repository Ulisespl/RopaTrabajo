import Ractive from 'ractive';

import template from '../../../templates/layout/body.html';

import Inicio from '../modulos/inicio';

import Eleccion from '../modulos/eleccion';
import Historico from '../modulos/historico';
import Roles from '../modulos/roles';

let Body = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    components:
    {
        Inicio, Eleccion, Historico, Roles
    }
}); 

export default Body;