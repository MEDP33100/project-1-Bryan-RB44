//Image SFX

document.addEventListener("DOMContentLoaded", () => {
    // Solar Disc
    const disc = document.querySelector("#disc");
    disc.addEventListener("click", () => {
        const discSound = new Audio('sounds/disc.mp3');
        discSound.play();
    });
});

//Pluto Crash
document.addEventListener("DOMContentLoaded", () => {
    const crash = document.querySelector("#crashPluto");

    crash.addEventListener("click", () => {
        const crashSound = new Audio('sounds/plutoCrash.mp3');
        crashSound.play();

        gsap.fromTo(crash, 
            { x: -10 }, 
            { x: 10, duration: 0.1, yoyo: true, repeat: 5 }
        );
    });
});

//Pluto Bounce
document.addEventListener("DOMContentLoaded", () => {
    const boing = document.querySelector("#boing");

    boing.addEventListener("click", () => {
        const boingSound = new Audio('sounds/pcBounce.mp3');
        boingSound.play();

        gsap.fromTo(boing, 
            { y: 0 }, 
            { y: 10, duration: 0.1, yoyo: true, repeat: 5 }
        );
    });
});

//Old Stars
document.addEventListener("DOMContentLoaded", () => {
    const star = document.querySelector("#star");

    star.addEventListener("click", () => {
        const starSound = new Audio('sounds/starfall.mp3');
        starSound.play();

        gsap.fromTo(star, 
            { x: 0 }, 
            { x: 20, duration: 0.5, yoyo: true, repeat: 1, ease: "power.inOut" }
        );
    });
});

//Pluto Found
document.addEventListener("DOMContentLoaded", () => {
    const found = document.querySelector("#found");

    found.addEventListener("click", () => {
        const foundSound = new Audio('sounds/found.mp3');
        foundSound.play();

        gsap.to(found, {
            rotation: 5,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
        });
    });
});

//Hurray Pluto!
document.addEventListener("DOMContentLoaded", () => {
    const happy = document.querySelector("#happy");

    happy.addEventListener("click", () => {
        const happySound = new Audio('sounds/clapping.mp3');
        happySound.play();

        gsap.fromTo(happy, 
            { y: 0 }, 
            { y: -20, duration: 1, yoyo: true, repeat: 1, ease: "bounce" }
        );
    });
});

//Uh oh
document.addEventListener("DOMContentLoaded", () => {
    const eris = document.querySelector("#eris");

    eris.addEventListener("click", () => {
        const erisSound = new Audio('sounds/eris.mp3');
        erisSound.play();

        gsap.to(eris, {
            scale: 1.5,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
        });
    });
});

//Pluto No!
document.addEventListener("DOMContentLoaded", () => {
    const sad = document.querySelector("#sad");

    sad.addEventListener("click", () => {
        const sadSound = new Audio('sounds/oneOf_thoseDays.mp3');
        sadSound.play();

        gsap.fromTo(sad, 
            { x: 0 }, 
            { x: -20, duration: 1, yoyo: true, repeat: 1, ease: "bounce" }
        );
    });
});

//Pluto Friends
document.addEventListener("DOMContentLoaded", () => {
    const friend = document.querySelector("#friends");

    friend.addEventListener("click", () => {
        const friendSound = new Audio('sounds/friends.mp3');
        friendSound.play();

        gsap.fromTo(friend, 
            { y: 0 }, 
            { y: 10, duration: 0.1, yoyo: true, repeat: 5 }
        );
    });
});

// CHANGE PAGES
//PAGE 9
document.addEventListener("DOMContentLoaded", () => {
    const lookDown = document.querySelector(".lookDown");
    const image = document.querySelector("#eventPluto");

    lookDown.addEventListener("click", (e) => {

        const stare = new Audio('sounds/lookDown.mp3');
        stare.play();

        //Animate the img fading out and disappearing.
        gsap.to(lookDown, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                lookDown.style.display = "none";
            }
        });

        //Making the next image appear
        //Adding delay to start after the img fades out.
        gsap.fromTo(image, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, onComplete: () => {
                image.style.display = "block";
            }}
        );
        
    });
});

//PAGE 9
document.addEventListener("DOMContentLoaded", () => {
    const visit = document.querySelector(".plutoVisit");
    const sleeber = document.querySelector(".plutoSleeb");

    visit.addEventListener("click", (e) => {

        const visiting = new Audio('sounds/nyoom.mp3');
        visiting.play();

        //Animate the img fading out and disappearing.
        gsap.to(visit, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                visit.style.display = "none";
            }
        });

        //Making the next image appear
        //Adding delay to start after the img fades out.
        gsap.fromTo(sleeber, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, onComplete: () => {
                sleeber.style.display = "block";
            }}
        );
        
    });
});