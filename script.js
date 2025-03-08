//Start Page Functions

document.addEventListener("DOMContentLoaded", (event) => {
    //Function for Pluto Moving using GSAP
    gsap.fromTo(".startPluto", 
        { x: -150 },
        { x: "100vw", duration: 60, repeat: -1, ease: "linear" }
    );

    //Function for Title Text
    gsap.to("#titleStart", {
        duration: 4,
        repeat: -1,
        yoyo: true,
        scale: 1.1,
        ease: "linear"
    });
});

//Function for Audio on Start Page

//Start Button
//(Again using GSAP)
document.addEventListener("DOMContentLoaded", () => {
    const beginButton = document.querySelector(".startStory");
    const startScreen = document.querySelector("header");
    const sections = document.querySelectorAll("section");

    beginButton.addEventListener("click", (e) => {
        //Animate the header fading out and disappearing.
        gsap.to(startScreen, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                startScreen.style.display = "none";
            }
        });

        //Animation the story sections fading in.
        sections.forEach(section => {
            section.style.display = "block";
            //Adding delay to start after the header fades out.
            gsap.fromTo(section, 
                { opacity: 0 }, 
                { opacity: 1, duration: 1, delay: 1 }
            );
        });
    });
});