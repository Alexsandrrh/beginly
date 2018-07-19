// Odjects
var id = getUrlVars()['id'],
	value = getUrlVars()['value'];


// searching value ID
function getUrlVars(){
	var vars = {},
		parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
			vars[key] = value;
		});
		return vars;
}

console.log(id);