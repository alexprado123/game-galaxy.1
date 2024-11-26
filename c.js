// Evento para enviar mensaje presionando Enter o el botón
document.getElementById("user-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Función principal para enviar el mensaje
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    displayMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";

    // Simular respuesta del bot con un retraso
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot-message");
    }, 500);
}

// Función para mostrar mensajes en el chat
function displayMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplaza el chat hacia abajo automáticamente
}

// Función para procesar la respuesta del bot
function getBotResponse(userInput) {
    // Divide la entrada en palabras para buscar coincidencias exactas
    const words = userInput.toLowerCase().split(/\s+/);

    if (words.includes("1") || words.includes("soporte")) {
        return "Lamentamos que hayas tenido una mala experiencia. ¿En qué puedo ayudarte? \n5.- Problema\n6.- Recomendación\n7.- Error";
    } else if (words.includes("5") || words.includes("problema")) {
        return "Lamentamos el inconveniente. ¿Podrías indicarnos el problema?\n8.- Compra\n9.- Sistema\n10.- Error";
    } else if (words.includes("6") || words.includes("recomendación")) {
        return "Recomendamos usar navegadores como Google Chrome u Oracle para una mejor experiencia.";
    } else if (words.includes("7") || words.includes("información")) {
        return "Somos Game-Galaxy. Si necesitas ayuda más detallada, visita nuestra página o llama al 5500550055.";
    } else if (words.includes("8") || words.includes("compra")) {
        return "¿Podrías proporcionarnos la fecha de tu compra?";
    } else if (words.includes("9") || words.includes("sistema")) {
        return "Estamos realizando mantenimiento en horario nocturno (12:00am - 5:00am). Espera o refresca la página.";
    } else if (words.includes("10") || words.includes("error")) {
        return "¿Podrías proporcionarme el número del error que aparece?";
    } else if (words.includes("404")) {
        return "Error en el método de pago. Verifica los fondos disponibles.";
    } else if (words.includes("401")) {
        return "Estamos en mantenimiento. Intenta más tarde.";
    } else if (words.includes("403")) {
        return "Verifica la fecha y hora de tu dispositivo.";
    } else if (words.includes("9:00am-27/08/2002")) {
        return "Hemos detectado problemas relacionados con tu compra. Posibles causas:\n1.- Fondos insuficientes en tu método de pago\n2.- Bloqueo por tu banco\nSi persiste, llama al 5500550055.";
    } else {
        return "No estoy seguro de cómo ayudarte con eso. Por favor, verifica tu pregunta.";
    }
}
