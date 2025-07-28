// Wait for DOM to fully load

  
  const plants = [
   { price: 149, size: "small", sunlight: "low", waterlevel: "spray" },
  { price: 349, size: "medium", sunlight: "medium", waterlevel: "often" },
  { price: 849, size: "large", sunlight: "full", waterlevel: "daily" }
  ];

  function searchPlants() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (input.trim() === '') {
      resultsContainer.style.display = 'none';
      return;
    }

    const filtered = plants.filter(p => p.name.toLowerCase().includes(input));
    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<p>No plants found.</p>';
    } else {
      filtered.forEach(plant => {
        const p = document.createElement('p');
        p.textContent = plant.name;
        p.onclick = () => showPlantDetails(plant);
        resultsContainer.appendChild(p);
      });
    }

    resultsContainer.style.display = 'block';
  }

  function checkEnter(event) {
    if (event.key === 'Enter') {
      const input = document.querySelector('.search-input').value.toLowerCase();
      const match = plants.find(p => p.name.toLowerCase().includes(input));
      if (match) {
        showPlantDetails(match);
        document.getElementById('search-results').style.display = 'none';
      }
    }
  }

  function showPlantDetails(plant) {
    document.getElementById('plant-name').textContent = plant.name;
    document.getElementById('plant-description').textContent = plant.description;
    document.getElementById('plant-details-popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('plant-details-popup').style.display = 'none';
  }




// 2.hero section//

  const toggleBtn = document.getElementById('navbarToggle');
  const heroDetails = document.getElementById('heroDetails');

  toggleBtn.addEventListener('click', () => {
    // Optional: show Bootstrap's collapsible navbar
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');

    // Toggle custom Hero details
    if (heroDetails.style.display === 'none' || heroDetails.style.display === '') {
      heroDetails.style.display = 'block';
    } else {
      heroDetails.style.display = 'none';
    }
  });

//3.offerBanner//

document.addEventListener("DOMContentLoaded", function () {
    const offerBanner = document.querySelector('.offer-bannertop');
    const closeBtn = document.querySelector('.close-offer-btn');
    const localStorageKey = 'hideOfferBanner';
    // Close button functionality
    if (closeBtn && offerBanner) {
        closeBtn.addEventListener('click', () => {
            offerBanner.classList.add('offer-hidden');
            localStorage.setItem(localStorageKey, 'true');
        });
    }
localStorage.removeItem('hideOfferBanner');
   
});


//4.fillter //

document.addEventListener("DOMContentLoaded", () => {
  const priceFilter = document.getElementById("priceFilter");
  const sizeFilter = document.getElementById("sizeFilter");
  const sunlightFilter = document.getElementById("sunlightFilter");
  const waterFilter = document.getElementById("waterFilter");
  const cards = document.querySelectorAll(".product-card");
  const noResults = document.getElementById("noResults");

  function applyFilters() {
    const priceValue = parseInt(priceFilter.value) || Infinity;
    const sizeValue = sizeFilter.value;
    const sunlightValue = sunlightFilter.value;
    const waterValue = waterFilter.value;

    let anyVisible = false;

    cards.forEach(card => {
      const cardPrice = parseInt(card.dataset.price);
      const cardSize = card.dataset.size;
      const cardSunlight = card.dataset.sunlight;
      const cardWater = card.dataset.water;

      let visible = true;

      if (priceFilter.value && cardPrice >= priceValue) visible = false;
      if (sizeValue && cardSize !== sizeValue) visible = false;
      if (sunlightValue && cardSunlight !== sunlightValue) visible = false;
      if (waterValue && cardWater !== waterValue) visible = false;

      card.style.display = visible ? "block" : "none";

      if (visible) anyVisible = true;
    });

    noResults.style.display = anyVisible ? "none" : "block";
  }

  // Attach change event
  [priceFilter, sizeFilter, sunlightFilter, waterFilter].forEach(filter => {
    filter.addEventListener("change", applyFilters);
  });

  applyFilters(); // initial run
});




    // Show toast function
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

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
let cartCount = 0;
    let total = 0;
    const unitPrice = 280;
    

    function addToCart() {
      cartCount++;
      total += unitPrice;
      document.getElementById('cart-count').innerText = cartCount;
      document.getElementById('total').innerText = total;

      const item = document.createElement('div');
      item.className = 'cart-item';
      item.innerHTML = `
        <img src="${imageUrl}">
        <div class="item-details">
          <div class="item-title">Lucky Bamboo Plant</div>
          <div class="quantity">
            <button onclick="changeQty(this,-1)">-</button>
            <span>1</span>
            <button onclick="changeQty(this,1)">+</button>
            <button onclick="removeItem(this)">🗑️</button>
          </div>
        </div>
        <div class="item-price">Rs.<span>${unitPrice}</span></div>
      `;
      document.getElementById('cart-items').appendChild(item);
      document.getElementById('savings').style.display = 'block';
    }

    function changeQty(btn, delta) {
      const span = btn.closest('.quantity').querySelector('span');
      let qty = parseInt(span.textContent) + delta;
      if(qty < 1) return;
      span.textContent = qty;
      const priceEl = btn.closest('.cart-item').querySelector('.item-price span');
      priceEl.textContent = unitPrice * qty;
      updateTotal();
    }

    function removeItem(btn) {
      const itemDiv = btn.closest('.cart-item');
      itemDiv.remove();
      cartCount--;
      document.getElementById('cart-count').innerText = cartCount;
      if(cartCount === 0) document.getElementById('savings').style.display = 'none';
      updateTotal();
    }

    function updateTotal() {
      let sum = 0;
      document.querySelectorAll('.item-price span').forEach(el => sum += parseInt(el.textContent));
      document.getElementById('total').innerText = sum;
    }

    function clearCart() {
      document.getElementById('cart-items').innerHTML = '';
      cartCount = 0; total = 0;
      document.getElementById('cart-count').innerText = 0;
      document.getElementById('total').innerText = 0;
      document.getElementById('savings').style.display = 'none';
    }

    function openModal() {
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }









//next/back button//
  function goBack() {
    
      window.location.href = "login/login.html";
  }

  function goNext() {
 window.location.href = "Best Seller.html";
  }
//review//
document.querySelector('.close-btn').addEventListener('click', function () {
  alert("Close button clicked. You can link it to a real close function.");
});
//pagination//
document.addEventListener('DOMContentLoaded', () => {
    const pageButtons = document.querySelectorAll('.page-btn');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentPage = 1;
    const totalPages = pageButtons.length;

    function updateActivePage(page) {
        currentPage = page;

        pageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.textContent) === page) {
                btn.classList.add('active');
            }
        });
    }

    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedPage = parseInt(button.textContent);
            updateActivePage(selectedPage);
        });
    });

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            updateActivePage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            updateActivePage(currentPage + 1);
        }
    });
});



  

  