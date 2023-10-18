import Axios from 'axios';




class Action {

	constructor() {
		this.instance = Axios.create({
        baseURL: '',
      	timeout: 50000,
      	headers: { 'Content-Type': 'application/json' }
    	});
	}

  response ( response ) 
  {
    if( response.status === 200 ) 
    {
      return response.data;
    }
    else 
    {
      return false;
    }
  }

  error ( e )
  {
    console.log( e );
  }

  ApiRequest ( method, url, data, formFile = null )
  {
    data = data || {};

    let params = null;

    if( formFile )
    {
      for(let i in data)
      {
        formFile.append ( i, data[i] );
      }
      formFile.append( 'key', localStorage.session );
    }
    else
    {
      params = data;
      params.key = localStorage.session;
    }

    switch ( method )
    {
      case 'delete':
      {
        return this.instance.delete( url, params )
            .then( this.response );
      }
      break;
      case 'get':
      {
        return this.instance.get( url )
            .then( this.response );
      }
      break;
      case 'post':
      {
        return this.instance.post( url, params || formFile  )
            .then( this.response );
      }
      break;
      case 'put':
      {
        return this.instance.put( url, params )
            .then( this.response );
      }
      break;

      default: break;
    }
  }

  ApiUpload ( method, url, data )
  {
    switch ( method )
    {
      case 'put':
      {
        return this.instance.post( url, data )
               .then( this.response );
      }
      break;
      default: break;
    }
  }
}

export default Action;