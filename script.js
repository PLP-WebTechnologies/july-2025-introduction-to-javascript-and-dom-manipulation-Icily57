// =======================
// Part 1: Basics
// =======================
let discount = 10; 
let userBudget = 50; 

if (userBudget > 100) {
  console.log("You qualify for a premium discount!");
} else {
  console.log("Standard shopping mode activated.");
}

// =======================
// Part 2: Functions
// =======================

// Function to calculate discounted price
function calculateDiscount(price) {
  return price - (price * discount / 100);
}

// Function to update cart total
function updateCartTotal() {
  let total = 0;
  cart.forEach(item => total += item.price);
  document.getElementById("cart-total").textContent = `Total: $${total}`;
}

// =======================
// Part 3: Loops
// =======================
let featuredProducts = ["T-shirt", "Sneakers", "Handbag", "Watch"];
for (let i = 0; i < featuredProducts.length; i++) {
  console.log("Featured: " + featuredProducts[i]);
}

let countdown = 5;
while (countdown > 0) {
  console.log("Limited offer ends in: " + countdown + " days");
  countdown--;
}

// =======================
// Part 4: DOM Interaction
// =======================
let cart = [];
const cartItems = document.getElementById("cart-items");
const buttons = document.querySelectorAll(".add-to-cart");

// =======================
// Cart Badge Setup
// =======================
const cartIcon = document.getElementById("cart-icon");
let cartCountBadge = document.createElement("span");
cartCountBadge.id = "cart-count";
cartIcon.appendChild(cartCountBadge);

function updateCartCount() {
  cartCountBadge.textContent = cart.length;
  cartCountBadge.style.display = cart.length > 0 ? "inline-block" : "none";
}

// =======================
// Add to Cart Buttons
// =======================
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let productName = e.target.previousElementSibling.previousElementSibling.textContent;
    let productPrice = parseInt(e.target.previousElementSibling.textContent.replace("$", ""));
    
    cart.push({ name: productName, price: productPrice });

    // Add item to DOM list
    let li = document.createElement("li");
    li.textContent = `${productName} - $${productPrice}`;
    cartItems.appendChild(li);

    // Update total & cart badge
    updateCartTotal();
    updateCartCount();
  });
});

// DOM manipulation: highlight header on hover
document.querySelector("header").addEventListener("mouseover", () => {
  document.querySelector("header").style.background = "#e65b50";
});

document.querySelector("header").addEventListener("mouseout", () => {
  document.querySelector("header").style.background = "#ff6f61";
});

// DOM manipulation: toggle footer message
document.querySelector("footer").addEventListener("click", () => {
  alert("Thanks for shopping at Cha-Ching Store!");
});

// Toggle Cart Visibility
const cartSection = document.getElementById("cart");

cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  // Show/Hide the cart section
  if (cartSection.style.display === "none") {
    cartSection.style.display = "block";
    cartSection.scrollIntoView({ behavior: "smooth" });
  } else {
    cartSection.style.display = "none";
  }
});
