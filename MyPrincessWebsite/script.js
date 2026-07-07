// =========================
// Floating Hearts
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = "none";
    heart.style.animation = "rise 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 700);


// =========================
// Doodle Click
// =========================

const doodle = document.querySelector(".doodle");

if (doodle) {

    doodle.addEventListener("click", () => {

        alert("Hehe ❤️\nYou clicked the doodle!");

    });

}


// =========================
// Heart Cursor
// =========================

document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = "16px";
    heart.style.transition = "1s";
    heart.style.opacity = "1";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-30px)";
        heart.style.opacity = "0";

    }, 10);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});


// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================
// Rise Animation
// =========================

const style = document.createElement("style");

style.innerHTML = `
@keyframes rise {

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}

}
`;

document.head.appendChild(style);

// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }

});

// =========================
// Falling Sakura Petals
// =========================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";

    petal.style.fontSize = (18 + Math.random() * 12) + "px";

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "0";

    petal.style.opacity = Math.random() * 0.6 + 0.4;

    petal.style.animation = "fallPetal linear";

    petal.style.animationDuration = (8 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },13000);

}

setInterval(createPetal,700);

// =========================
// LOVE LETTERS
// =========================

const letters = document.querySelectorAll(".letter-card");

letters.forEach(card => {

    card.addEventListener("click", () => {

        letters.forEach(c => {

            if(c !== card){

                c.classList.remove("open");

            }

        });

        card.classList.toggle("open");

    });

});


// =========================
// FINAL QUESTION
// =========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");

if (yesBtn && noBtn && finalMessage) {

    // YES button
    yesBtn.addEventListener("click", () => {

        finalMessage.style.display = "block";

        yesBtn.style.display = "none";
        noBtn.style.display = "none";

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    });

    // NO button (Desktop)
    noBtn.addEventListener("mouseenter", () => {

        const parent = noBtn.parentElement;

        const maxX = parent.clientWidth - noBtn.offsetWidth;
        const maxY = parent.clientHeight - noBtn.offsetHeight;

        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

    });

    // NO button (Mobile)
    noBtn.addEventListener("touchstart", (e) => {

        e.preventDefault();

        const parent = noBtn.parentElement;

        const maxX = parent.clientWidth - noBtn.offsetWidth;
        const maxY = parent.clientHeight - noBtn.offsetHeight;

        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

    });

}