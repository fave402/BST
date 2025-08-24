const rates = {
    USD: 21408,          // Base value in USD
    EUR: 21408 * 0.92,   // Example rate
    GBP: 21408 * 0.78,   // Example rate
    NGN: 21408 * 1600    // Example rate
  };

  const currencySelect = document.getElementById('currencySelect');
  const totalAmount = document.getElementById('totalAmount');

  currencySelect.addEventListener('change', function () {
    const currency = this.value;
    const value = rates[currency];

    totalAmount.textContent = `${currency} ${value.toLocaleString()}`;
  });

 // Open popup when "View details" link is clicked
document.querySelector(".payment-item .payment-links a").addEventListener("click", function(e) {
  e.preventDefault(); // prevent page jump
  document.getElementById("bankPopup").style.display = "flex";
});

// Close popup
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("bankPopup").style.display = "none";
});

// Close popup when clicking outside the box
window.addEventListener("click", function(e) {
  let popup = document.getElementById("bankPopup");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Copy function
function copyText(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}

// --- Currency Conversion ---
const exchangeRates = {
  USD: 1,       // Base
  EUR: 0.92,
  GBP: 0.79,
  NGN: 1600     // Example, adjust as needed
};

const baseAmount = 21408; // Your original total in USD
const basePopupAmount = 1220.88; // The popup amount in USD

const currencySelect1 = document.getElementById("currencySelect");
const totalAmountEl = document.getElementById("totalAmount");
const popupAmountEl = document.getElementById("amountVal");
const popupPayEl = document.getElementById("popupPay");

currencySelect.addEventListener("change", function () {
  const selected = this.value;
  const rate = exchangeRates[selected];

  // Main total
  const convertedTotal = (baseAmount * rate).toLocaleString();
  totalAmountEl.textContent = `${selected} ${convertedTotal}`;

  // Popup amount
  const convertedPopup = (basePopupAmount * rate).toLocaleString();
  popupAmountEl.textContent = `${selected} ${convertedPopup}`;
  popupPayEl.textContent = `${selected} ${convertedPopup}`;
});

// --- Popup Functionality ---
document.querySelector(".payment-item .payment-links a").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("bankPopup").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("bankPopup").style.display = "none";
});

window.addEventListener("click", function(e) {
  let popup = document.getElementById("bankPopup");
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Copy function
function copyText(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}
