import Ractive from 'ractive';

import template from '../../../templates/layout/body.html';

import Inicio from '../modulos/inicio';

import Eleccion from '../modulos/eleccion';
import Historico from '../modulos/historico';
import AdminUsuarios from '../modulos/adminUsuarios';

let Body = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    components:
    {
        Inicio, Eleccion, AdminUsuarios, Historico
    }
}); 

export default Body;