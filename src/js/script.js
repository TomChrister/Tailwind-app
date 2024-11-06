document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length >= 3 && password.length >= 8) {
        window.location.href = 'feed.html';
    } else {
        alert('Username must be min 3 characters and password must be min 8 characters');
    }
});