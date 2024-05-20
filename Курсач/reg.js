function validateForm() {
    var name = document.getElementById('Name').value.trim();
    var second = document.getElementById('secondName').value.trim();
    var email = document.getElementById('Email').value.trim();
    var password = document.getElementById('Password').value.trim();

    if (name === '' || second === '' || email === '' || password === '') {
        alert('Пожалуйста, заполните все поля формы.');
        return false;
    }
    saveUserData();
    return true;
}

function saveUserData() {
    var name = document.querySelector('.nameInput').value;

    var greetingMessageH = `Приветствуем, ${name}!`;
    localStorage.setItem('greetingMessageH', greetingMessageH);

    window.location.href = 'reged.html';
}