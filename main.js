const burgerMenu = document.querySelector('#burger-menu')
const navItems = document.querySelector('#nav-items')

function toggleClassItem(item, itemClass) {
    itemClass.forEach((element) => item.classList.toggle(element))
}

burgerMenu.addEventListener('click', () => {
    toggleClassItem(navItems, ['hidden', 'flex'])
})

document.addEventListener('click', (e) => {
    // Si el menú está visible y el clic NO fue dentro de navItems ni en burgerMenu
    if (!navItems.classList.contains('hidden') &&
        !navItems.contains(e.target) &&
        !burgerMenu.contains(e.target)) {
        toggleClassItem(navItems, ['hidden', 'flex'])
    }
})

navItems.addEventListener('click', (e) => {
    if (navItems.contains(e.target)) {
        toggleClassItem(navItems, ['hidden', 'flex'])
    }
})