import Ractive from 'ractive';

import template from '../../../templates/layout/body.html';

import Inicio from '../modulos/inicio';

import Anomalias from '../modulos/anomalias';
import KaviRepo from '../modulos/kavirepo';
import AdminUsuarios from '../modulos/adminUsuarios';

let Body = Ractive.extend (
{ 
    isolated: false, 
    template: template,
    components:
    {
        Inicio, Anomalias, KaviRepo, AdminUsuarios
    }
}); 

export default Body;