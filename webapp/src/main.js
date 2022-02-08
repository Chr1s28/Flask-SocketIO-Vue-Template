import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import socket from './socket'
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css"

require('bootstrap/dist/css/bootstrap.css');

socket.on('connect', function() {
    console.log("connected "+socket.id)
    //document.getElementById("ConnectStatus").innerHTML = "Connection Status: Connected"
});

socket.on('disconnect', (reason) => {
    if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually
        socket.connect()
    }
    console.log("disconnected");
    //document.getElementById("ConnectStatus").innerHTML = "Connection Status: Disconnected<br>Reason: "+reason
});

createApp(App).use(router).mount('#app')
