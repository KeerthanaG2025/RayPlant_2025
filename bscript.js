//next/back button//
  function goBack() {
    
      window.location.href = "index.html";
  }

  function goNext() {
 window.location.href = "Deal of the Day.html";
  }
  //cart count//

// cart.js

document.addEventListener("DOMContentLoaded", () => {
  const cartCountEl = document.getElementById("cart-count");

  // Load or initialize cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || {
    count: 0,
    items: [],
  };

  updateCartDisplay();

  

  
  // Toast notification
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  }
});
//cart count//
document.addEventListener("DOMContentLoaded", () => {
  const cartCountElement = document.getElementById("cart-count"); // Ensure this exists
  let cartCount = 0;

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartCountElement.textContent = cartCount;

      // Optional: Add animation
      cartCountElement.classList.add("bump");
      setTimeout(() => cartCountElement.classList.remove("bump"), 300);
    });
  });
});





