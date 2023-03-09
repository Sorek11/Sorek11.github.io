window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("green", window.scrollY > 0);
})


// GALERIA DE IMAGENES

const gallery = document.querySelector('.galeria');
const images = document.querySelectorAll('.galeria img');
const modal = document.querySelector('.modal');
const modalImg =document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
  
  images.forEach(img => {
    img.addEventListener('click', e => {
      modal.style.display = 'block';
      modalImg.src = e.target.src;
    });
  });
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
