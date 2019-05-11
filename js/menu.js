function activeMenu() {
    // 1 si la clase no esta activa
    // 2 si es que la clase esta activa.
    var isActiveMenu = document.querySelector('.menu').classList.length

    if(isActiveMenu == 1) {
        document.querySelector('.menu').classList.add('menu--active');
    } else {
        document.querySelector('.menu').classList.remove('menu--active');
    }
}