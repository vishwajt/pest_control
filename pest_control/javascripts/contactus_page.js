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
    var menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
}

