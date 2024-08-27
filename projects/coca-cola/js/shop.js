function productsData() {
    return [
        { image: "../img/1.png", name: "teddy", price: "20$", rating: 4.5 },
        { image: "../img/2.png", name: "candle decoration", price: "25$", rating: 3.8 },
        { image: "../img/3.png", name: "light cap", price: "10$", rating: 4.2 },
        { image: "../img/4.png", name: "Coffee machine", price: "30$", rating: 4.7 },
        { image: "../img/5.png", name: "sharpener", price: "13$", rating: 4.0 },
        { image: "../img/6.png", name: "Piano cabinet", price: "65$", rating: 4.9 },
        { image: "../img/7.png", name: "key ring", price: "7$", rating: 3.5 },
        { image: "../img/8.png", name: "sunglasses", price: "17$", rating: 4.3 },
        { image: "../img/9.png", name: "coke sweater", price: "30$", rating: 4.6 },
        { image: "../img/10.png", name: "red bracelet", price: "20$", rating: 4.1 },
        { image: "../img/11.png", name: "lighter", price: "25$", rating: 3.7 },
        { image: "../img/12.png", name: "pouf", price: "30$", rating: 4.4 },
        { image: "../img/13.png", name: "feather pen", price: "10$", rating: 4.2 },
        { image: "../img/14.png", name: "phone shell", price: "25$", rating: 3.9 },
        { image: "../img/15.png", name: "smelling candle", price: "10$", rating: 4.0 },
        { image: "../img/16.png", name: "mask decoration", price: "35$", rating: 4.8 },
        { image: "../img/17.png", name: "coke sweater", price: "35$", rating: 5 },
        { image: "../img/18.png", name: "bracelet", price: "15$", rating: 4.8 },
    ];
}

function populateCardTemplate(product) {
    var template = document.getElementById("card-template");
    var card = template.content.cloneNode(true);

    card.querySelector(".card__image img").src = product.image;
    card.querySelector(".card__product-name").textContent = product.name;
    card.querySelector(".card__price").textContent = product.price;
    const starCount = Math.floor(product.rating)
    const stars = card.querySelectorAll(`i`)
    stars.forEach((star, i) => {
        if (i <= starCount - 1) {
            star.style.color = "yellow"
        }
    })

    return card;
}

function displayProducts() {
    var container = document.getElementById("product-container");
    var products = productsData();
    products.forEach(function (product) {
        var card = populateCardTemplate(product);
        container.appendChild(card);
    });
}

displayProducts();
