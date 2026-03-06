function toggleSection() {
    var section = document.getElementById("collection");
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        section.style.display = "none";
    }
}

function toggleSearch() {
    let input = document.getElementById("searchInput");
    input.style.display = input.style.display === "block" ? "none" : "block";
    input.focus();
}

function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let text = products[i].innerText.toLowerCase();
        products[i].style.display = text.includes(input) ? "block" : "none";
    }
}

function toggleHeart(icon) {
    if (icon.innerHTML === "🤍") {
        icon.innerHTML = "❤️";
    } else {
        icon.innerHTML = "🤍";
    }
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

updateCartCount();

function toggleUserMenu() {
    let menu = document.getElementById("userMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function toggleNotifications() {
    let menu = document.getElementById("notificationMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function clearNotifications() {
    document.getElementById("notificationMenu").innerHTML = "<p>No new notifications</p>";
    document.getElementById("notifyCount").style.display = "none";
}
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
    window.location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", storedUser.name);
        window.location.href = "myorders.html";
    } else {
        alert("Invalid Email or Password!");
    }
});

let user = localStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "login.html";
} else {
    document.getElementById("welcome").innerHTML = "Welcome, " + user;
}

// Example Orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {
    document.getElementById("orders").innerHTML = "<p>No orders yet.</p>";
} else {
    orders.forEach(order => {
        document.getElementById("orders").innerHTML +=
            "<p>" + order.name + " - ₹" + order.price + "</p>";
    });
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
window.onload = function () {
    const msg = document.getElementById("thankyou-message");

    setTimeout(() => {
        msg.style.display = "block";
    }, 2000);
};