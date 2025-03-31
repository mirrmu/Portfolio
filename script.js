document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const titles = ["Software Developer","Web Developer", "Tech Enthusiast", "Creator"];
    let index = 0;
    let charIndex = 0;
    const typewriterElement = document.querySelector(".typewriter");

    function typeText() {
        if (charIndex < titles[index].length) {
            typewriterElement.textContent += titles[index][charIndex];
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1500);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typewriterElement.textContent = titles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            index = (index + 1) % titles.length;
            setTimeout(typeText, 500);
        }
    }

    typeText();
});
document.addEventListener("DOMContentLoaded", function () {
    // Kun linkkiä klikataan, lisätään fade-out-efekti
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.href.includes(window.location.origin)) { // Varmistaa, että linkki on sivuston sisäinen
                e.preventDefault();
                let targetUrl = this.href;
                document.body.classList.add("fade-out");
                setTimeout(() => { window.location.href = targetUrl; }, 400); // Viive ennen siirtymistä
            }
        });
    });
});