var socket = io("ws://192.168.10.52:3000");
var local = new local(socket);
var remote = new Remote(socket);

socket.on("waiting", function(str) {
  document.getElementById("waiting").innerHTML = str;
});
