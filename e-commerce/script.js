
const products = [
    { id: 1, name: "Product 1", price: 20, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 30, image: "product2.jpg" },
    
];


function displayProducts() {
    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = ""; 

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    
    console.log(`Product ${productId} added to cart`);
}


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = parseInt(event.target.dataset.id);
        addToCart(productId);
    }
});

displayProducts();

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "pass") {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
    } else {
        alert("Invalid credentials");
    }
});