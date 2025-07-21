//next/back button//
  function goBack() {
    
      window.location.href = "Best Seller.html";
  }

  function goNext() {
 window.location.href = "Track Your Order.html";
  }

  
  function startCountdown(duration) {
    const countdownEl = {
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds')
    };

    let time = duration;

    const updateTimer = () => {
      const hrs = Math.floor(time / 3600);
      const mins = Math.floor((time % 3600) / 60);
      const secs = time % 60;

      countdownEl.hours.textContent = hrs.toString().padStart(2, '0');
      countdownEl.minutes.textContent = mins.toString().padStart(2, '0');
      countdownEl.seconds.textContent = secs.toString().padStart(2, '0');

      if (time > 0) time--;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // Start countdown from 13 hours, 11 mins, 10 seconds (in seconds)
  const totalSeconds = (13 * 3600) + (11 * 60) + 10;
  startCountdown(totalSeconds);

// cart count
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
