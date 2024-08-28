const current_form = document.getElementById('form-toggle');

const users = [
    {
        id: 1,
        username: "edbert",
        password: "1234",
    },
    {
        id: 2,
        username: "stanly",
        password: "sw123",
    },
    {
        id: 3,
        username: "andre",
        password: "slime13",
    },
];

function login(name, pass) {
    const user = users.find(user => user.username === name && user.password === pass);

    if(user) {
        alert(`Welcome back ${user.username}!`);
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function register(name, password, con_password) {
    if(password !== con_password) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    users.push({
        id: users.length + 1, 
        username: name, 
        pass: password
    });

    console.log(users);
    moveToLogin();
    alert(`Registration successful! Welcome, ${name}!`);
}

function authenticate() {
    const name = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const con_pass = document.getElementById('confirm_password').value;

    if(current_form.innerHTML === 'Login') {
        login(name, pass);
    } else {
        register(name, pass, con_pass);
    }
}

function moveToRegister() {
    const register = document.getElementsByClassName('register');
    const login = document.getElementsByClassName('login');

    for(const elem of register) {
        elem.style.display = 'block';
    }

    login[0].style.display = 'none';
    current_form.innerHTML = 'Register';
}

function moveToLogin() {
    const register = document.getElementsByClassName('register');
    const login = document.getElementsByClassName('login');

    login[0].style.display = 'block';
    for(const elem of register) {
        elem.style.display = 'none';
    }

    current_form.innerHTML = 'Login';
}