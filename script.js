document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Check for saved mode preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            toggleButton.classList.remove('dark-mode');
            toggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            toggleButton.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});

window.onload = function() {
    const elementBody = document.querySelector('body');
    const elementBtnIncreaseFont = document.getElementById('increase-font');
    const elementBtnDecreaseFont = document.getElementById('decrease-font');

    let fontSize = 100; // Default size (100%)
    const increaseDecrease = 10; // Font size change (10%)

    elementBtnIncreaseFont.addEventListener('click', () => {
        fontSize = Math.min(fontSize + increaseDecrease, 200); // Limit max size to 200%
        elementBody.style.fontSize = fontSize + '%';
    });

    elementBtnDecreaseFont.addEventListener('click', () => {
        fontSize = Math.max(fontSize - increaseDecrease, 60); // Limit min size to 60%
        elementBody.style.fontSize = fontSize + '%';
    });
};
