function getData( url, callback ) {

  const promise = new Promise( ( resolve, reject ) => {
    let request = new XMLHttpRequest();

    class ErrorResponse extends Error {
      constructor( status, message ) {
        super( message );
        this.status = status;
      }
    }

    // console.log( request );

    request.onreadystatechange = function () {
      if ( request.readyState === 4 && request.status === 200 ) {
        let dataJson = request.response;
        data = JSON.parse( dataJson );
        resolve( data )
      } else if ( request.readyState === 4 ) {
        let err = new ErrorResponse( request.status, "Invalid response" );
        reject( request.statusText );
      }
    };

    request.timeout = 10000;

    request.open( "GET", url );

    request.send();
  } )

  return promise

}