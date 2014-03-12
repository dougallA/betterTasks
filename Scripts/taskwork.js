var clientId = 'INSERT YOUR KEY HERE';
var scopes = "https://www.googleapis.com/auth/tasks";

function handleAuthResult(authResult){
	makeApiCall();
}

function handleAuthClick(event) {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
    return false;
 }

function makeApiCall(){
	var request = gapi.client.request({
		'path': '/tasks/v1/users/@me/lists',
	});
	request.execute(function(resp){
		console.log(resp);
	});
}

