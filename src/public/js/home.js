const socket = io();

socket.on("products", (data) => {
    renderProductos(data);
});

const renderProductos = (products) => {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";

    products.forEach(item => {
        const card = document.createElement("div");
        card.classList = "card";
        card.style = "width: 18rem";
        card.innerHTML = `  <div class="card-body">
                                <p class="card-title"> ID: ${item._id}</p>
                                <h2 class="card-title"> Titulo: ${item.title}</h2>
                                <p class="card-text"> Precio: ${item.price} </p>
                                <button class="btn btn-primary">Comprar</button>
                            </div>
                        `
        productsContainer.appendChild(card);
    });
};