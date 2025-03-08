//Start Page Functions

document.addEventListener("DOMContentLoaded", (event) => {
    //Function for Pluto Moving using GSAP
    gsap.fromTo(".startPluto", 
        { x: -150 },
        { x: "100vw", duration: 60, repeat: -1, ease: "linear" }
    );

    //Function for Title Text
    gsap.to("#titleStart", {
        duration: 5,
        repeat: -1,
        yoyo: true,
        scale: 1.1,
        ease: "linear"
    });
});

//Function for Audio on Start Page

//Function for Start Button
