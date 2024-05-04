let navElement = document.querySelectorAll("nav ul li");
let dropdown = document.querySelectorAll(".dropdown-part");

function showDropdown(event) {
    hideDropdown();
    let nav = event.currentTarget;
    let navID = nav.getAttribute("id");
    console.log(navID);
    switch (navID) {
        case "phone":
            document.querySelector("#phone-dropdown").style.display = "flex";
            break;
        case "hands":
            document.querySelector("#hands-dropdown").style.display = "flex";
            break;
        case "sound":
            document.querySelector("#sound-dropdown").style.display = "flex";
            break;
        case "accessories":
            document.querySelector("#accessories-dropdown").style.display = "flex";
            break;
    
    }
}

for (let x = 0; x < dropdown.length; x++) {
    dropdown[x].addEventListener("mouseleave", hideDropdown);
    
}

function hideDropdown() {
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].style.display = "none";
      }
}

for (let i = 0; i < navElement.length; i++) {
    navElement[i].addEventListener("mouseenter", showDropdown);
}