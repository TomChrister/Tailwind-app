document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const isValid = true;

    if (!isValid) {
        window.location.href = 'feed.html'
    }
});