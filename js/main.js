// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll  = function () {

    if (document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled"); 
    }
}
let navbar = document.querySelectorAll(".navbar");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})

// nav hide