window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("green", window.scrollY > 0);
})
