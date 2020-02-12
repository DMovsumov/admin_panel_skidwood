const menuBtn = document.getElementById('menu_btn')
const menu = document.querySelector('.header_menu')

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.add('menu_active')
    console.log(menu.classList)
})

