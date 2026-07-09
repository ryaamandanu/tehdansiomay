const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        hamburger.innerHTML = "✕";
    }else{
        hamburger.innerHTML = "☰";
    }

});