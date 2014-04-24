require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-1.11.0.min',
		message : 'message'
    }
});

require(['message'], function(message) {
  
	message.start();
});