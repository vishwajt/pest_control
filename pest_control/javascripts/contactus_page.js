function validateForm() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    return true;
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
