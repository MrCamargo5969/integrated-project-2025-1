const socket = new WebSocket("ws://192.168.20.201:8080");

socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log('Temperatura recebida:', data.temperatura);
    document.getElementById("temperatura").textContent = data.temperatura;
};

socket.onerror = function (error) {
    console.error("Erro na conexão WebSocket:", error);
};