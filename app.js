let navMenu = document.getElementById('mobile-menu')
let menuLinks = document.querySelector('.nav-menu')

navMenu.addEventListener('click', () => {
    console.log('menu')
    navMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})