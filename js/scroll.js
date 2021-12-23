const barra = document.querySelector('.contenedor__barra')

window.addEventListener('scroll' ,()=>{
    barra.classList.toggle('barra2' ,window.scrollY > 1030)
})