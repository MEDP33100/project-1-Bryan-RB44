//Page Button SFX
document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.querySelector(".nextPage");
    const pastButton = document.querySelector(".pastPage");

    nextButton.addEventListener("click", (e) => {
        const buttonSound = new Audio('sounds/pageButton.mp3');
        buttonSound.play();
    })
    pastButton.addEventListener("click", (e) => {
        const buttonSound = new Audio('sounds/pageButton.mp3');
        buttonSound.play();
    })
})

console.log("testing testing")