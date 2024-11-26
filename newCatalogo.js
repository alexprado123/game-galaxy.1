 // Datos de los productos, incluyendo URL de imagen
const products = [
    {
        id: 1,
        name: "Red Dead Redeption",
        price: 1000,
        description: "Juego de acción y aventura en mundo abierto, ambientado en el Lejano Oeste. Juegas como John Marston, un exforajido que busca capturar a sus antiguos compañeros para salvar a su familia.",
        specifications: "PS3, Xbox 360, PS4, Xbox One, PC",
        image: "./Productos/XG01.jpg",
        comments: ["La jugabilidad cooperativa es una de las mejores que he probado. Trabajar en equipo realmente cambia la forma en que enfrentas los desafíos del juego.", "Me agradan los juegos de mundo abierto como este"]
    },
    {
        id: 2,
        name: "Halo Infinite",
        price: 2100,
        description: "Un shooter en primera persona de ciencia ficción. Continuación de la saga Halo, sigues a Master Chief luchando contra fuerzas alienígenas en una guerra épica para salvar a la humanidad.",
        specifications: "Xbox Series X|S, Xbox One, PC",
        image: "./Productos/XG07.jpg",
        comments: ["Excelente calidad!", "Aunque los gráficos no son los más realistas, la dirección artística de este juego le da un toque único que lo hace sobresalir"]
    },
    {
        id: 3,
        name: "Metal Gear Soild",
        price: 700,
        description: "Juego de acción sigilosa donde tomas el rol de Solid Snake, un soldado especializado en infiltración. La saga se centra en temas de política, tecnología y ética en la guerra.",
        specifications: "PS3, PS4, Xbox One y PC",
        image: "./Productos/PG02.jpg",
        comments: ["La historia es bastante buena, pero algunas secciones del juego se sienten un poco lentas. Afortunadamente, las mecánicas de combate son lo suficientemente entretenidas para mantenerme involucrado", "Muy útil."]
    },
    {
        id: 4,
        name: "XBOX 1",
        price: 2000,
        description: "Simulador de carreras de la famosa competición de F1. Incluye pilotos, coches y circuitos oficiales, con un enfoque en la simulación realista de las carreras.",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S, PC",
        image: "./Productos/PG03.jpg",
        comments: ["Excelente calidad!", "La jugabilidad de este título es muy fluida, pero a veces siento que los enemigos se vuelven un poco repetitivos. Aún así, la experiencia es muy divertida."]
    },
    {
        id: 5,
        name: "XBOX 1",
        price: 350,
        description: "Parte de la popular franquicia de fútbol, que ofrece una experiencia de simulación futbolística realista con equipos, jugadores y modos de juego oficiales.",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch, PC",
        image: "./Productos/PG04.jpg",
        comments: ["Me encanta la variedad de armas y habilidades que puedes desbloquear. Cada partida se siente fresca porque siempre puedes probar nuevas combinaciones."]
    },
    {
        id: 6,
        name: "XBOX 1",
        price: 500,
        description: "Juego de construcción de niveles donde los jugadores pueden crear y compartir sus propios niveles de Mario. Ofrece una gran variedad de herramientas para diseñar plataformas y desafíos.",
        specifications: "Nintendo Switch.",
        image: "./Productos/SG03.jpg",
        comments: ["El modo multijugador es una locura. Las partidas competitivas son intensas y muy bien equilibradas, aunque las microtransacciones están un poco presentes"]
    },
    {
        id: 7,
        name: "XBOX 1",
        price: 900,
        description: "RPG de acción que combina personajes de Disney con los de Final Fantasy. Sigues a Sora, un joven que viaja por diferentes mundos Disney para derrotar a las fuerzas oscuras.",
        specifications: "PS3, PS4, Xbox One, Nintendo Switch",
        image: "./Productos/XG06.jpg",
        comments: ["¡Este juego me ha sorprendido! No esperaba que fuera tan profundo en términos de mecánicas y lore. Definitivamente un título que vale la pena jugar"]
    },
    {
        id: 8,
        name: "XBOX 1",
        price: 999,
        description: "Frontiers of Pandora: Basado en la película Avatar, es un juego de acción y aventura en mundo abierto, donde exploras el planeta Pandora y vives en la piel de un Na'",
        specifications: "PS5, Xbox Series X|S, PC",
        image: "./Productos/XG21.jpg",
        comments: ["La jugabilidad cooperativa es una de las mejores que he probado. Trabajar en equipo realmente cambia la forma en que enfrentas los desafíos del juego."]
    },
    {
        id: 9,
        name: "XBOX 1",
        price: 1098,
        description: "Un juego de lucha basado en el popular anime Dragon Ball Z. Los jugadores controlan personajes de la serie y participan en combates épicos",
        specifications: "PS5, Xbox Series X|S, PC",
        image: "./Productos/PG12.jpg",
        comments: ["La narrativa de este juego es una obra maestra. Cada decisión realmente impacta en el curso de la historia, y las consecuencias se sienten pesadas."]
    },
    {
        id: 10,
        name: "XBOX 1",
        price: 650,
        description: "Serie de aventuras y acción en la que controlas a Link, un héroe que debe salvar al reino de Hyrule enfrentándose a villanos como Ganon, resolviendo acertijos y explorando mazmorras.",
        specifications: "Nintendo Switch.",
        image: "./Productos/SG22.jpg",
        comments: ["La jugabilidad cooperativa es una de las mejores que he probado. Trabajar en equipo realmente cambia la forma en que enfrentas los desafíos del juego."]
    },
    {
        id: 11,
        name: "XBOX 1",
        price: 400,
        description: "Un RPG de acción en mundo abierto, donde juegas como Geralt de Rivia, un cazador de monstruos, en una narrativa rica y profunda de fantasía medieval.",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch, PC",
        image: "./Productos/XG25.jpg",
        comments: ["La narrativa de este juego es una obra maestra. Cada decisión realmente impacta en el curso de la historia, y las consecuencias se sienten pesadas."]
    },
    {
        id: 12,
        name: "XBOX 1",
        price: 1100,
        description: "RPG de acción de mundo abierto, desarrollado por FromSoftware. Ambientado en el mundo de The Lands Between, el juego presenta un sistema desafiante de combate y exploración con una historia escrita por George R.R. Martin.",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S, PC",
        image: "./Productos/PG31.jpg",
        comments: ["¡Este juego me ha sorprendido! No esperaba que fuera tan profundo en términos de mecánicas y lore. Definitivamente un título que vale la pena jugar"]
    },
    {
        id: 13,
        name: "XBOX 1",
        price: 2100,
        description: "Serie de aventuras y acción en la que controlas a Link, un héroe que debe salvar al reino de Hyrule enfrentándose a villanos como Ganon, resolviendo acertijos y explorando mazmorras.",
        specifications: "Nintendo Switch.",
        image: "./Productos/SG30.jpg",
        comments: ["El modo multijugador es una locura. Las partidas competitivas son intensas y muy bien equilibradas, aunque las microtransacciones están un poco presentes"]
    },
    {
        id: 14,
        name: "XBOX 1",
        price: 2100,
        description: "Un juego de lucha basado en el popular anime Dragon Ball Z. Los jugadores controlan personajes de la serie y participan en combates épicos",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S",
        image: "./Productos/XG31.jpg",
        comments: ["La historia es bastante buena, pero algunas secciones del juego se sienten un poco lentas. Afortunadamente, las mecánicas de combate son lo suficientemente entretenidas para mantenerme involucrado", "Muy útil."]
    },
    {
        id: 15,
        name: "XBOX 1",
        price: 990,
        description: "Juego de acción en mundo abierto donde controlas a tres personajes diferentes mientras realizas misiones y actividades en la ciudad ficticia de Los Santos, inspirada en Los Ángeles.",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S",
        image: "./Productos/XG33.jpg",
        comments: ["La jugabilidad cooperativa es una de las mejores que he probado. Trabajar en equipo realmente cambia la forma en que enfrentas los desafíos del juego.", "Me agradan los juegos de mundo abierto como este"]
    },
    {
        id: 16,
        name: "XBOX 1",
        price: 1000,
        description: "RPG de acción en un mundo post-apocalíptico dominado por máquinas robóticas. Juegas como Aloy, una joven cazadora que busca descubrir los secretos del pasado.",
        specifications: "PS4, PS5, PC",
        image: "./Productos/PG27.jpg",
        comments: ["El modo multijugador es una locura. Las partidas competitivas son intensas y muy bien equilibradas, aunque las microtransacciones están un poco presentes"]
    },
    {
        id: 17,
        name: "XBOX 1",
        price: 1150,
        description: "RPG de acción que combina personajes de Disney con los de Final Fantasy. Sigues a Sora, un joven que viaja por diferentes mundos Disney para derrotar a las fuerzas oscuras.",
        specifications: "PS3, PS4, PS5, Xbox 360, Xbox One, Xbox Series X|S, PC",
        image: "./Productos/XG06.jpg",
        comments: ["La jugabilidad cooperativa es una de las mejores que he probado. Trabajar en equipo realmente cambia la forma en que enfrentas los desafíos del juego.", "Me agradan los juegos de mundo abierto como este"]
    },
    {
        id: 18,
        name: "XBOX 1",
        price: 2200,
        description: "Juego de acción y aventura en un mundo post-apocalíptico, donde Joel y Ellie luchan por sobrevivir en un entorno devastado por una pandemia. Es conocido por su profunda narrativa emocional.",
        specifications: "Especificaciones del producto 1",
        image: "./Productos/PG08.jpg",
        comments: ["La jugabilidad cooperativa es una de las mejores que he probado. Trabajar en equipo realmente cambia la forma en que enfrentas los desafíos del juego.", "Me agradan los juegos de mundo abierto como este"]
    },
    {
        id: 19,
        name: "XBOX 1",
        price: 650,
        description: "Serie de juegos de acción y aventura protagonizada por Samus Aran, una cazarrecompensas en el espacio. Combina exploración, combate y resolución de acertijos en planetas alienígenas.",
        specifications: "Nintendo Switch.",
        image: "./Productos/SG08.jpg",
        comments: ["Excelente calidad!", "Muy útil."]
    },
    {
        id: 20,
        name: "XBOX 1",
        price: 360,
        description: "Un conjunto de tres juegos clásicos de Grand Theft Auto remasterizados: GTA III, GTA: Vice City y GTA: San Andreas. Son juegos de acción en mundo abierto con enfoque en el crimen y la vida urbana.",
        specifications: "PS4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch, PC",
        image: "./Productos/XG09.jpg",
        comments: ["Excelente calidad!", "La jugabilidad de este título es muy fluida, pero a veces siento que los enemigos se vuelven un poco repetitivos. Aún así, la experiencia es muy divertida."]
    }
    // Puedes agregar más productos aquí
];

let cart = [];

// Función para generar el catálogo de productos
function generateProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Precio: $${product.price}</p>
            <p><strong>Descripción:</strong> ${product.description}</p>
            <p><strong>Especificaciones:</strong> ${product.specifications}</p>
            <p><strong>Comentarios:</strong></p>
            <ul>${product.comments.map(comment => `<li>${comment}</li>`).join('')}</ul>
            <label>Cantidad: <input type="number" min="1" value="1" id="quantity${product.id}"></label>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;

        productList.appendChild(productCard);
    });
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantityInput = document.getElementById(`quantity${productId}`);
    const quantity = parseInt(quantityInput.value) || 1;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCart();
}

// Función para actualizar el carrito de compras
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <p> <img class="ima-carrito" src="${item.image}"> <br> ${item.name} <br> - Cantidad: ${item.quantity} - $${itemTotal}</p>
            <button class="remove-button" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
    cartTotal.textContent = total.toFixed(2);
}

// Función para completar la compra
function completePurchase() {
    if (cart.length > 0) {
        alert('¡Compra exitosa!');
        cart = [];
        updateCart();
    } else {
        alert('El carrito está vacío.');
    }
}


// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}


// Inicializa el catálogo de productos y oculta el carrito por defecto
generateProductList();
toggleCart();
