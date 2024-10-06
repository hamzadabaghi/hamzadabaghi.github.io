// -------------- Products ----------------

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
        
    ];
}

function populateCardTemplate(product, index) {
    var template = document.getElementById("card-template");
    var card = template.content.cloneNode(true);

    card.querySelector(".card__image img").src = product.image;
    card.querySelector(".card__product-name").textContent = product.name;
    card.querySelector(".card__price").textContent = product.price;

    const starCount = Math.floor(product.rating);
    const stars = card.querySelectorAll(`i`);
    stars.forEach((star, i) => {
        if (i <= starCount - 1) {
            star.style.color = "yellow";
        }
    });

    // Add product index as data attribute to "Add to Cart" button
    card.querySelector(".card__add").setAttribute('data-index', index);

    return card;
}

function displayProducts() {
    var container = document.getElementById("product-container");
    var products = productsData();
    products.forEach(function (product, index) {
        var card = populateCardTemplate(product, index);
        container.appendChild(card);
    });
}

displayProducts();

// -------------- Cart ----------------

const cartOffcanvas = document.getElementById('cart');
const closeCart = document.getElementById('closeCart');

// Close cart when close button is clicked
closeCart.addEventListener('click', function() {
    cartOffcanvas.classList.remove('active');
});

let cart = [];

function addToCart(product) {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    // Check if cart is empty and remove the "Your cart is empty" message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
    }

    // Check if product is already in cart
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        // Increase quantity if already in cart
        existingProduct.quantity++;

        // Update the quantity displayed in the cart
        const cartItemElement = document.getElementById(`cart-item-${existingProduct.name}`);
        cartItemElement.querySelector('.item-quantity').textContent = `Qty: ${existingProduct.quantity}`;

        // Update the individual item's total price in the cart
        const updatedPrice = (existingProduct.quantity * parseFloat(existingProduct.price.replace('$', ''))).toFixed(2);
        cartItemElement.querySelector('.cart-item__price').textContent = `$${updatedPrice}`;

    } else {
        // Add new product to cart
        product.quantity = 1;
        cart.push(product);

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.setAttribute("id", `cart-item-${product.name}`);
        cartItem.innerHTML = `
            <div class="cart-item__info">
                <img src="${product.image}" alt="${product.name}" class="cart-item__image">
                <div>
                    <p class="cart-item__name">${product.name}</p>
                    <p class="cart-item__price">${product.price}</p>
                    <p class="item-quantity">Qty: ${product.quantity}</p>
                </div>
            </div>
            <button class="remove-item">
                <img src="/projects/coca-cola/img/close.png" alt=""/>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Attach remove button functionality
        cartItem.querySelector(".remove-item").addEventListener("click", () => removeFromCart(product.name));
    }

    updateCartTotal(); // Recalculate the total price of all products in the cart
}


function removeFromCart(productName) {
    const cartItemsContainer = document.getElementById("cartItems");

    // Find the product in the cart and remove it
    cart = cart.filter(item => item.name !== productName);

    // Remove the corresponding cart item element
    const cartItemElement = document.getElementById(`cart-item-${productName}`);
    cartItemElement.remove();

    // If the cart is empty, display the "Your cart is empty" message with the class .cart-empty-txt
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty-txt">Your cart is empty</p>';
    }

    updateCartTotal();
}

function updateCartTotal() {
    const cartTotal = document.getElementById("cartTotal");
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

function handleAddToCartButtons() {
    document.querySelectorAll('.card__add').forEach(button => {
        button.addEventListener('click', function () {
            const productIndex = button.getAttribute('data-index');
            const product = productsData()[productIndex];
            addToCart(product);
            // Open the cart after adding the product
            cartOffcanvas.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    handleAddToCartButtons(); // Attach click listeners to "Add to Cart" buttons after products are displayed
});

