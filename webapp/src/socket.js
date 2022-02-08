const { io } = require("socket.io-client");

var socket = io("localhost:5000");
//var socket = io();

export default socket