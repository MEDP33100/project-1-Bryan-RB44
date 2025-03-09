//Page Button SFX
const pageButton = document.querySelector(".nextPage");
const soundFX = document.querySelector(".soundPage")

pageButton.addEventListener("mouseover", () => {
    sound.currentTime = 0;
    soundFX.play();
});