document.addEventListener("DOMContentLoaded", function() {
    let wordLimit;
    const windowWidth = window.innerWidth;
    if(windowWidth > 768) {
        wordLimit = 23;
    } else if(windowWidth <= 768 & windowWidth >= 590) {
        wordLimit = 18;
    } else {
        wordLimit = 10;
    }
    const serviceCards = document.querySelectorAll(".card");

    serviceCards.forEach(card => {
        const p = card.querySelector("p");
        const words = p.innerHTML.split(" ");
        
        if (words.length > wordLimit) {
            const visibleText = words.slice(0, wordLimit).join(" ");
            const hiddenText = words.slice(wordLimit).join(" ");
            
            p.innerHTML = `${visibleText}<span class="dots">...</span><span class="more" style="display:none;"> ${hiddenText}</span>`;
            
            const readMoreLink = document.createElement("a");
            readMoreLink.href = "#";
            readMoreLink.className = "read-more";
            readMoreLink.innerText = "Read More";
            p.appendChild(readMoreLink);

            readMoreLink.addEventListener("click", function(event) {
                event.preventDefault();
                const moreText = p.querySelector(".more");
                const dots = p.querySelector(".dots");

                const cardClone = card.cloneNode(true);
                cardClone.querySelector(".more").style.display = "inline";
                cardClone.querySelector(".dots").style.display = "none";
                cardClone.querySelector(".read-more").style.display = "none";
                document.getElementById("popup-card").innerHTML = "";
                document.getElementById("popup-card").appendChild(cardClone);
                document.getElementById("popup").style.display = "flex";
            });
        }
    });

    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");

    popupClose.addEventListener("click", function() {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    popup.addEventListener("click", function() {
        resetCardTexts();
    });

    popupClose.addEventListener("click", function() {
        resetCardTexts();
    });

    function resetCardTexts() {
        serviceCards.forEach(card => {
            const p = card.querySelector("p");
            const readMoreLink = p.querySelector(".read-more");
            const moreText = p.querySelector(".more");
            const dots = p.querySelector(".dots");

            if (moreText) {
                moreText.style.display = "none";
                dots.style.display = "inline";
                readMoreLink.innerText = "Read More";
            }
        });
    }
});

function toggleMenu() {
    const menu = document.querySelector(".menu ul");
    menu.classList.toggle('active');
}
