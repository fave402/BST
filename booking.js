s// Handle dropdown toggles
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let id = btn.getAttribute("data-dropdown");
    document.getElementById(id).style.display = "block";
  });
});

// Close dropdown
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

// Handle option selection
document.querySelectorAll(".dropdown-menu div, .dropdown-menu li").forEach(option => {
  option.addEventListener("click", () => {
    let parent = option.closest(".dropdown-menu");
    let id = parent.id;
    let sourceBtn = document.querySelector(`[data-dropdown='${id}']`);

    if (option.dataset.value) {
      if (option.dataset.value.includes("|")) {
        let [code, city] = option.dataset.value.split("|");
        sourceBtn.innerHTML = `${code}<br><span>${city}</span> ▼`;
      } else {
        sourceBtn.innerText = option.dataset.value + " ▼";
      }
    }

    parent.style.display = "none";
  });
});

// Tabs (One Way / Round Trip / Multi-City)
document.querySelectorAll(".tab-btn").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    // For now, no layout change – but can be extended
  });
});