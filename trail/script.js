// Wait for DOM to fully load
document.querySelector('.search-icon').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value;
    alert('You searched for: ' + query); // Replace with real logic
});
// 2.hero section//
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // Toggle navbar on mobile
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Optional: close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
        });
    });
});
// JS to add active selection effect and simulate filtering
const plantCategories = document.querySelectorAll('.col-auto');

plantCategories.forEach(category => {
    category.addEventListener('click', function () {
        // Remove previous active class
        plantCategories.forEach(cat => cat.classList.remove('active-category'));

        // Add to clicked category
        this.classList.add('active-category');

        // Get label for potential logic
        const selectedLabel = this.querySelector('.image-label').innerText.trim();
        console.log(`Selected: ${selectedLabel}`);

        // Optional: simulate filter function or trigger UI update
        // filterProductsByCategory(selectedLabel);
    });
});
// Close button functionality

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

//filter//
document.addEventListener('DOMContentLoaded', () => {
    const filters = {
        price: document.getElementById('filter-price'),
        size: document.getElementById('filter-size'),
        sunlight: document.getElementById('filter-sunlight'),
        water: document.getElementById('filter-water')
    };

    // Listen for changes on all filters
    Object.values(filters).forEach(selectElement => {
        selectElement.addEventListener('change', () => {
            const selectedFilters = {
                price: filters.price.value,
                size: filters.size.value,
                sunlight: filters.sunlight.value,
                water: filters.water.value
            };

            console.log('Selected filters:', selectedFilters);

            // Optional: Call a product filtering function
            // filterProducts(selectedFilters);
        });
    });

    // Example function placeholder
    function filterProducts(filters) {
        // Logic to show/hide product cards based on filters
        console.log('Filtering products based on:', filters);
    }
});
//4.fillter //
document.addEventListener('DOMContentLoaded', () => {
    const filters = {
        price: document.getElementById('filter-price'),
        size: document.getElementById('filter-size'),
        sunlight: document.getElementById('filter-sunlight'),
        water: document.getElementById('filter-water')
    };

    const resetBtn = document.getElementById('resetFilters');

    Object.values(filters).forEach(select => {
        select.addEventListener('change', () => {
            const selected = {
                price: filters.price.value,
                size: filters.size.value,
                sunlight: filters.sunlight.value,
                water: filters.water.value
            };
            console.log('Selected Filters:', selected);
            // filterProducts(selected); // ← Optional
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const filters = {
        price: document.getElementById('filter-price'),
        size: document.getElementById('filter-size'),
        sunlight: document.getElementById('filter-sunlight'),
        water: document.getElementById('filter-water')
    };

    const resetBtn = document.getElementById('resetFilters');
    const productCards = document.querySelectorAll('.product-card');
    const cartCount = document.getElementById('cart-count');
    const toast = document.getElementById('toast');
    let cartItems = 0;

    // FILTER LOGIC
    function applyFilters() {
        const selected = {
            price: filters.price.value,
            size: filters.size.value,
            sunlight: filters.sunlight.value,
            water: filters.water.value
        };

        productCards.forEach(card => {
            const p = parseInt(card.dataset.price);
            const matchPrice = (selected.price === "below-150" && p < 150) ||
                               (selected.price === "below-350" && p < 350) ||
                               (selected.price === "below-850" && p < 850) ||
                               !selected.price;

            const matchSize = !selected.size || card.dataset.size === selected.size;
            const matchSun = !selected.sunlight || card.dataset.sunlight === selected.sunlight;
            const matchWater = !selected.water || card.dataset.water === selected.water;

            if (matchPrice && matchSize && matchSun && matchWater) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Filter change listeners
    Object.values(filters).forEach(select => {
        select.addEventListener('change', applyFilters);
    });

    // Reset filters
    resetBtn.addEventListener('click', () => {
        Object.values(filters).forEach(select => select.selectedIndex = 0);
        applyFilters();
    });

    // ADD TO CART logic
    document.querySelectorAll('.product-card button').forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            cartCount.textContent = cartItems;
            showToast("Item added to basket");
        });
    });

    // Show toast function
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
});




  