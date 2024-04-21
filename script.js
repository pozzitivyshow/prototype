let navElement = document.querySelectorAll("nav ul li a");
let dropdown = document.querySelector(".dropdown-part");

dropdown.addEventListener("mouseenter", showDropdown);
dropdown.addEventListener("mouseleave", hideDropdown);

function showDropdown() {
    dropdown.style.display = "flex";
    dropdown.style.justifyContent = "space-between";
}

function hideDropdown() {
    dropdown.style.display = "none";
}

for (let i = 0; i < navElement.length; i++) {
    navElement[i].addEventListener("mouseenter", showDropdown);
}