let up = document.querySelector('.up');

up.addEventListener ('click', () => {
    scrollTo({
       top: 0,
        behavior: 'smooth'
    })
})

let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})
menu.addEventListener('click', () => {
    hamburger.classList.remove('active');
})
document.querySelectorAll('a').forEach(n => n.addEventListener ('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
}))

