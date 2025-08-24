
// ...For close button to work...
document.querySelector('.close-btn').addEventListener('click', function() {
  document.body.remove();
});

let timeLeft = 15 * 60; // 15 minutes in seconds
const expirySpan = document.querySelector('.expiry-time');

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  expirySpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  } else {
    expirySpan.textContent = "00:00 - EXPIRED";
    expirySpan.style.color = "red"; // Change color to red on expiration
  }
}

updateTimer();

// Prevent non-numeric input for ACCOUNT NUMBER field
const acctInput = document.querySelector('input[type="number"]');
acctInput.addEventListener('keydown', function(e) {
  // Block 'e', 'E', '+', and '-' keys
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault();
  }
});

// Prevent non-alphabetic input for BANK NAME field
const bankNameInput = document.querySelector('input[type="text"]');
bankNameInput.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^A-Za-z\s]/g, '');
});