var mover = document.getElementById('seccion_scroleable');//Esta es la sección que contiene las tarjetas
var anchoTarjeta = document.getElementById('main_tarjeta').clientWidth; //Obtengo el ancho de la tarjeta principal que en realidad es el mismo para las tres
var buttonLeft = document.getElementById('bLess');//traigo los botones al script
var buttonRight = document.getElementById('bMore');


mover.scroll(anchoTarjeta, 0); /*haciendo un scroll a la tarjeta de en medio que sería la principal o la "recomendada"*/

function scrollRightNx() {

    mover.scroll(mover.scrollLeft + anchoTarjeta, 0);/*Obtiene la posicion del scroll de la seccion y le suma el ancho de la tarjeta para ir a la siguiente*/
}

function scrollLeftNx() {
    mover.scroll(mover.scrollLeft - anchoTarjeta, 0);
}

//////////////////////////////////////////////////////

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("green", window.scrollY > 0);
})
