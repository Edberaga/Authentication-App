function authenticate() {
    const name = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    console.log(`name: ${name}, pass: ${pass}`);

    if(name === "edbert" && pass === "1234") {
        alert("Welcome back Edbert!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

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