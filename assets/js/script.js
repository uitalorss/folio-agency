let btnMenu = document.querySelector('.nav-mobile__botao');
let btnSideMenu = document.querySelector('.side-menu__botao');
let sideMenu = document.querySelector('.side-menu');

btnMenu.addEventListener("click", () => {
  sideMenu.classList.toggle('side-menu-ativo')
})

btnSideMenu.addEventListener("click", () => {
  sideMenu.classList.toggle('side-menu-ativo')
})