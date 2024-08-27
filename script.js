document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const header = document.querySelector('header');
    
    // Check for saved mode preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            toggleButton.classList.remove('dark-mode');
            toggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            toggleButton.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});
