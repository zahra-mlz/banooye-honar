//==========================
// منوی همبرگری
//==========================

let menuToggle = document.getElementById("menuToggle");

let navMenu = document.getElementById("navMenu");

if(menuToggle){

    menuToggle.addEventListener("click",function(){

        navMenu.classList.toggle("active");

    });

}