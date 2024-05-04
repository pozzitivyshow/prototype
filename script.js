let navElement = document.querySelectorAll("nav ul li");
let boxButton = document.querySelector("#box-icon");
let boxDropdown = document.querySelector(".box-dropdown-part");
let dropdown = document.querySelectorAll(".dropdown-part");
let body = document.querySelector("body");

function showDropdown(event) {
    hideDropdown();
    let nav = event.currentTarget;
    let navID = nav.getAttribute("id");
    console.log(navID);
    switch (navID) {
        case "phone":
            document.querySelector("#phone-dropdown").style.display = "flex";
            body.classList.add("disable-scroll");
            break;
        case "hands":
            document.querySelector("#hands-dropdown").style.display = "flex";
            body.classList.add("disable-scroll");
            break;
        case "sound":
            document.querySelector("#sound-dropdown").style.display = "flex";
            body.classList.add("disable-scroll");
            break;
        case "accessories":
            document.querySelector("#accessories-dropdown").style.display = "flex";
            body.classList.add("disable-scroll");
            break;
    
    }

}

function boxDisplay(){
    if (boxDropdown.style.display == "flex"){
        boxDropdown.style.display = "none";
    }
    else{
        boxDropdown.style.display = "flex";
    }
    body.classList.toggle("disable-scroll");
}

boxButton.addEventListener("click",boxDisplay)

for (let x = 0; x < dropdown.length; x++) {
    dropdown[x].addEventListener("mouseleave", hideDropdown);
    
}

function hideDropdown() {
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].style.display = "none";
        body.classList.remove("disable-scroll");
      }
}

for (let i = 0; i < navElement.length; i++) {
    navElement[i].addEventListener("mouseenter", showDropdown);
}