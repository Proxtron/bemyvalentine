const brainrotTransitionTime = ".5s";
const pageHeight = document.documentElement.scrollHeight;
const pageWidth = window.innerWidth;
const padding = 75;
const imageNames = [
    "img/sadbob.png",
    "img/susdog.gif",
]
let pressNoReminderGiven = false;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-no").addEventListener("click", handleNoClick);
    document.getElementById("btn-yes").addEventListener("click", handleYesClick);

    document.getElementById("jumping-no-btn").addEventListener("click", handleNoClick);
})

function handleYesClick() {
    if(pressNoReminderGiven) {
        document.getElementById("press-no-reminder-container").style.display = "none";
        document.getElementById("jumping-no-btn").style.display = "none";
        document.getElementById("menu").innerHTML = `
            <img src="img/giphy-preview.gif">
            <h1>Woooo!!!</h1>
        `;
    } else {
        document.getElementById("press-no-reminder-container").style.display = "block";
        pressNoReminderGiven = true;
    }
}

function handleNoClick() {
    document.getElementById("press-no-reminder-container").style.display = "none";
    document.getElementById("btn-no").style.display = "none";

    applyRandomPosition();
    let brainrotImg = document.createElement("img");
    brainrotImg.src = getRandomImg();
    brainrotImg.classList.add("popup-img");
    document.documentElement.append(brainrotImg);
    setTimeout(() => {
        brainrotImg.style.opacity = 0
        let audio = new Audio("img/vine-dramatic.mp3")
        audio.play();
    }, 100);
    setTimeout(() => {
        brainrotImg.remove();
    }, 2000);

    pressNoReminderGiven = true;
}

function applyRandomPosition() {
    let randomY = Math.round(Math.random() * (pageHeight - padding));
    let randomX = Math.round(Math.random() * (pageWidth - padding));
    const jumpingButton = document.getElementById("jumping-no-btn");
    jumpingButton.style.display = "block";
    jumpingButton.style.left = randomX + "px";
    jumpingButton.style.top = randomY + "px";
}

function getRandomImg() {
    let randomIndex = Math.floor(Math.random() * imageNames.length)
    return imageNames[randomIndex];
}