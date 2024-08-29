document.addEventListener("DOMContentLoaded", function() {
    const wordLimit = 20; // Limit after which "Read More" should appear
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        const p = card.querySelector("p");
        const words = p.innerHTML.split(" ");
        if (words.length > wordLimit) {
            const visibleText = words.slice(0, wordLimit).join(" ");
            const hiddenText = words.slice(wordLimit).join(" ");
            p.innerHTML = `${visibleText}<span class="dots">...</span><span class="more">${hiddenText}</span>`;
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.className = "read-more";
            readMoreLink.innerText = "Read More";
            p.appendChild(readMoreLink);
        }
    });

    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");

    document.querySelectorAll(".read-more").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const card = this.closest(".service-card");
            const clone = card.cloneNode(true);
            clone.querySelector(".more").style.display = "inline";
            clone.querySelector(".read-more").style.display = "none";
            document.getElementById("popup-card").innerHTML = "";
            document.getElementById("popup-card").appendChild(clone);
            popup.style.display = "flex";
        });
    });

    popupClose.addEventListener("click", function() {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu ul");
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuToggle.style.display = "block";
        closeMenu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menuToggle.style.display = "none";
        closeMenu.style.display = "block";
    }
}


function toggleMenu() {
    var menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
}

