function moveToRegister() {
    const register = document.getElementsByClassName('register');
    const login = document.getElementsByClassName('login');

    for(const elem of register) {
        elem.style.display = 'block';
    }

    login[0].style.display = 'none';
}

function moveToLogin() {
    const register = document.getElementsByClassName('register');
    const login = document.getElementsByClassName('login');

    login[0].style.display = 'block';
    for(const elem of register) {
        elem.style.display = 'none';
    }
}