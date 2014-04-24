require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-1.11.0.min'
    }
});

require(['jquery'], function( $ ) {
    console.log( $ ) // OK
	$.get( "message.html", function( data ) {
	  $( "#banner" ).html( data );
	  console.log( "Load was performed." );
	});
});