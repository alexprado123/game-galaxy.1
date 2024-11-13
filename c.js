function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    displayMessage(userInput, "user-message");
    document.getElementById("user-input").value = "";

    // Simulate bot response after a delay
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        displayMessage(botResponse, "bot-message");
    }, 500);
}

function displayMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput.includes("soporte")) {
        return "Lamentamos que hayas tenido una mala experiencia en que puedo ayudarte: \n  1.-Problema  \n 2.-recomendacion \n 3.-Error";
    } else if (userInput.includes("problema")) {
        return "Lamentamos el inconveniente. ¿Podrías brindarnos sobre que consiste tu problema?: \n  1.-compra \n 2.-sistema \n 3.-Error" ;     

    }else if (userInput.includes("compra")){
        return "¿podrias proporcionarme el la fecha en la que hiciste la compra?"
    }else if (userInput.includes("27/08/2002")){
        return "Hemos encontrado una irregularidad en la compra, estos son los posibles problemas que puedes tener \n 1.-Fondos insuficientes en tu metodo de pago \n 2.-Bloqueo de compra por parte de tu banco \n de no ser ninguno de estos intenta realizar nuevamente tu compra, si el problema perciste comunicate al 5500550055"

    }else if (userInput.includes("sistema")){
        return "Actualmente realizamos problemas de mantenimiento por las noches si tu compra se realizo en un horario de 12:00am a 5:00am espera un poco para que proceda tu compra o refresca la pagina para solucionar el problema"

    }else if (userInput.includes("error")){
        return "¿podrias proporcionarme el numero de error que te aparece?"
    }else if (userInput.includes("404")){
        return "error en el metodo de pago, te recomendamos verificar que tengas los fondos suficientes para poder realizar la compra"
    }else if (userInput.includes("401")){
        return "Lamentamos el error pero parece que nos encontramos en mantenimiento y no podemos ayudarte para que realizes tu commpra :("
    }else if (userInput.includes("403")){
        return "Verifica la fecha de tu dispositivo ya que es posible que no sea la correcta y no permita la compra de tu producto"


    } else if (userInput.includes("recomendación")) {
        return "Actualmente nos encontramos en un soporte de host que es algo limitado te recomendamos que si presentas algun error al ejecutar esta pagina, intentes abrirla en buscadores como Google Chrome u Oracle";


    } else if (userInput.includes("informacion")) {
            return "Hola, nosotros somos Game-Galaxy esperamos que a lo largo de este viaje te la este pasando genial si necesitas alguna ayuda puedes visitar la pagina principal o preguntar si es que tienes un error si requieres una atencion mas detallada puedes  visitarnos o llamar al numero telefonico 5500550055";
    } else {
        return "No estoy seguro de cómo ayudarte con eso, verifica si esta formulada correctamente tu pregunta";
    }
}
