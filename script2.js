//Image SFX

document.addEventListener("DOMContentLoaded", () => {
    // Solar Disc
    const disc = document.querySelector("#disc");
    disc.addEventListener("click", () => {
        const discSound = new Audio('sounds/disc.mp3');
        discSound.play();
    });

    // Pluto Crash
    const crash = document.querySelector("#crashPluto");
    crash.addEventListener("click", () => {
        const crashSound = new Audio('sounds/plutoCrash.mp3');
        crashSound.play();
    });

    
});