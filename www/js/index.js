$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {	
	 try {
        cordova.plugins.notification.local.schedule({
            text: "This is the text.",
            at: new Date(new Date().getTime() + 10000)
        });
    } catch (e) {
        alert("Fail " + e);
    }
}