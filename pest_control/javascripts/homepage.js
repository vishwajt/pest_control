function toggleMenu() {
    var menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
}

function updateRibbonLink() {
    const ribbonLink = document.getElementById('ribbonLink');
    
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 480 || screenWidth > 480 && screenWidth <= 768) {
        ribbonLink.href = 'tel:+919836383631';      // Considering this number as primary contact number
    } else {
        ribbonLink.href = '#';
    }
}

window.onload = updateRibbonLink;
window.onresize = updateRibbonLink;
