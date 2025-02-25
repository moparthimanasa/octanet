
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const exploreButton = document.getElementById("exploreBtn");
exploreButton.addEventListener("click", () => {
    alert("🌱 Discover Sustainable Living!");
});


const productButtons = document.querySelectorAll(".product-btn");
productButtons.forEach((button, index) => {
    const productNames = ["Solar Panels", "Smart Lighting", "Smart Thermostat", "Energy-Efficient Appliances"];
    button.addEventListener("click", () => {
        alert(`🌿 Learn more about ${productNames[index]}!`);
    });
});
