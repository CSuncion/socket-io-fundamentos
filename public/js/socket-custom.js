var socket = io();
// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Emit = es para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cristhian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});