
function closePopup() {
      document.getElementById("popup").style.display = "none";
    }const emailInput = document.getElementById("emailInput");
//email login//
  emailInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      const email = emailInput.value.trim();

      if (email !== "") {
       
        window.location.href = "index.html"; // redirect to home page
      }
    }
  });
  function openPopup() {
  document.getElementById('popupOverlay').style.display = 'flex';
  document.body.classList.add('popup-open');
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
  document.body.classList.remove('popup-open');
}
