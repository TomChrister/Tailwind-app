document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const dot = toggle ? toggle.parentNode.querySelector('.dot') : null;

    console.log(toggle);
    console.log(dot);

    if (toggle && dot) {
        toggle.addEventListener('change', () => {
            dot.classList.toggle('translate-x-6');
        });
    } else {
        console.log('Elements not found');
    }
});

