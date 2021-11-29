//mobile menu

const menu = document.querySelector(".hamburger");
const navigation = document.querySelectorAll(".bar");
const menuFilter = document.querySelector(".menu__filter");
const pizzaMenu = document.querySelector(".menu__container");

menu.addEventListener("click" , () => {
    for(var i = 0; i < navigation.length; i++){
        navigation[i].classList.toggle("is-active");
    }

    menuFilter.classList.toggle("active");
    
});


//make header sticky 
const fixMenu = () => {
    if(window.scrollY > 155) {
        menuFilter.classList.add("fixed");
    } else {
        menuFilter.classList.remove("fixed");
    }
}

//make pizza menu sticky

const fixPizzaMenu = () => {
    if(window.scrollY > 460) {
        pizzaMenu.classList.add("fixed");
    } else {
        pizzaMenu.classList.remove("fixed");
    }
}

window.addEventListener("scroll", fixMenu);
window.addEventListener("scroll", fixPizzaMenu);

//menu filter 
let pizzaFilter = document.querySelector(".menu__container").children;
let main = document.querySelector(".pizza__wrapper").children;

for(let i = 0; i < pizzaFilter.length; i++){
    pizzaFilter[i].onclick = function() {
        for(let t = 0; t < pizzaFilter.length; t++){
            pizzaFilter[t].classList.remove("show");
        }
        this.classList.add("show");
        const displayItems = this.getAttribute("data-filter");
        for(let z = 0; z < main.length; z++) {            
                main[z].style.display = "none";
            
            if((main[z].getAttribute("data-category") == displayItems) || displayItems == "all") {                
                    main[z].style.display = "flex";
                } 
            }
        }
}
