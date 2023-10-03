import Ractive from 'ractive';
import Moment from 'moment';
import template from '../templates/app.html';
import Header from './components/layout/header';
import Body from './components/layout/body';
import Login from './components/layout/login';
import config from './config/config';
import DialogCargando from './components/layout/dlgcargando';

/*
 * Prototypes
 */

Ractive.prototype.formatMoneda = ( x ) => 
{
    if( isNaN( x ) )
        return '';

    let total = parseInt(x).toFixed(2);
    return ( total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
};

Ractive.prototype.formatFecha = ( fecha ) => 
{
    console.log( {fecha} );
    return Moment(fecha, 'YYYY-MM-DD').format('YYYY-MM-DD');
};

let App = new Ractive (
{
  el: '#app',
  template: template,
  components: {	Header, Body, DialogCargando, Login },
  data: () => (
  {
	data: config
  }),
});

export default App;