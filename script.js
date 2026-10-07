const intro = document.getElementById("intro");
const hero = document.getElementById("hero");

hero.style.display = "none";

setTimeout(() => {
    intro.style.display = "none";
    hero.style.display = "flex";
}, 5000);

document.getElementById("exploreBtn").addEventListener("click", () => {

    document.getElementById("journey").scrollIntoView({

        behavior: "smooth"

    });

});

// =========================
// SURPRISE POPUP
// =========================

const openBtn = document.getElementById("openMessage");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click", () => {

    popup.style.display = "flex";
    launchConfetti();

    const bgMusic =
    document.getElementById("bgMusic");

    bgMusic.play();

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});

// =========================
// TYPEWRITER EFFECT
// =========================

const message = `Happy Birthday Adi Bhai! ❤️

No matter where life takes us...

You'll always be my greatest brother.

Thank you for always being there.

I'm really lucky to have a brother like you.

May your life always be filled with happiness,
success, good health and endless smiles.

Happy Birthday once again! ❤️

— Your Brother,
Kanha`;

const typingBox = document.getElementById("typingMessage");

openBtn.addEventListener("click", () => {

    typingBox.innerHTML = "";

    let i = 0;

    function type(){

        if(i < message.length){

            if(message.charAt(i) === "\n"){

                typingBox.innerHTML += "<br>";

            }else{

                typingBox.innerHTML += message.charAt(i);

            }

            i++;

            setTimeout(type,35);

        }

    }

    type();

});

// =========================
// BIRTHDAY CONFETTI
// =========================

function launchConfetti(){

    const colors = ["#FFD700", "#D4AF37", "#FFFFFF", "#F5D76E"];

    for(let i = 0; i < 120; i++){

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "14px";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.zIndex = "1000000";
        confetti.style.pointerEvents = "none";

        confetti.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        document.body.appendChild(confetti);

        const fall = confetti.animate(
            [
                {
                    transform:
                    "translateY(0) rotate(0deg)"
                },
                {
                    transform:
                    "translateY(110vh) rotate(720deg)"
                }
            ],
            {
                duration: 2500 + Math.random() * 2000,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        fall.onfinish = () => {
            confetti.remove();
        };
    }
}