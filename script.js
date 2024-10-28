const products = [
    {
        name: "coconut passion",
        price: 15.990,
        description: "Es una fragancia seductora con una combinación dulce y exótica de coco y vainilla.",
        image: "https://cdnx.jumpseller.com/staroutlet-cl/image/40574024/resize/540/540?1696638954"
    },
    {
        name: "love spell",
        price: 15.990,
        description: "Las Notas de Salida son durazno (melocotón), flor del cerezo y manzana roja; las Notas de Corazón son jazmín, lirio de los valles (muguete) y lila; las Notas de Fondo son almizcle, tamarindo y maderas blancas.",
        image: "https://cdnx.jumpseller.com/that-glow-cl/image/44941443/resize/1200/1200?1706321243"
    },
    {
        name: "pure seduction",
        price: 15.990,
        description: "Es una fragancia corporal florar, con ciruela roja y freesia dulce y su fórmula cuenta con una infusión de camomila y aloe vera.",
        image: "https://jpt.cl/wp-content/uploads/2022/01/01VSMISTPURESEDUN250.jpg"
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text text-danger">$${product.price.toFixed(2)}</p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

displayProducts();
