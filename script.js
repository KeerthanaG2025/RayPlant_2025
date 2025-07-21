// Wait for DOM to fully load

  
  const plants = [
    { name: "Aloe Vera", description: "A succulent plant with medicinal properties." },
    { name: "Snake Plant", description: "Air-purifying plant with upright leaves." },
    { name: "Spider Plant", description: "Great indoor plant that produces 'spiderettes'." },
    { name: "Peace Lily", description: "Beautiful white flowers and great air cleaner." },
    { name: "Fern", description: "Lush green foliage, prefers humidity." },
    { name: "ZZ Plant", description: "Low-maintenance, hardy indoor plant." }
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
const filters = document.querySelectorAll('.filter-select');

    filters.forEach(select => {
        select.addEventListener('change', () => {
            const selectedFilters = {};

            filters.forEach(f => {
                const name = f.name;
                const value = f.value;
                if (value && !value.includes('Price') && !value.includes('Size') && !value.includes('Sun Light') && !value.includes('Water Level')) {
                    selectedFilters[name] = value;
                }
            });

            console.clear();
            console.log('Selected filters:', selectedFilters);

            // TODO: Apply filtering logic here
            // Example: filterItems(selectedFilters);
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



  

  