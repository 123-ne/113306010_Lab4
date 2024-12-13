const crash = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/crash.mp3');
const kickbass = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/kick-bass.mp3');
const snare = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/snare.mp3');
const tom1 = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/tom-1.mp3');
const tom2 = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/tom-2.mp3');
const tom3 = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/tom-3.mp3');
const tom4 = new Audio('https://github.com/123-ne/113306010_Lab4/blob/main/tom-4.mp3');

// Keyboard event listener
document.addEventListener("keypress", function (e) {
    const keyPressed = e.key.toLowerCase();
    playSound(keyPressed);
    addPressedEffect(keyPressed);
});

// Button click event listener
const buttons = document.querySelectorAll(".drum");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML.toLowerCase(); // Get the button's key
        playSound(buttonInnerHTML);
        addPressedEffect(buttonInnerHTML);
    });
});

// Play sound based on the key or button clicked
function playSound(clickSound) {
    switch (clickSound) {
        case "w":
            crash.play();
            break;
        case "a":
            kickbass.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "l":
            tom4.play();
            break;
        default:
            console.log("No sound for: " + clickSound);
    }
}

// Add and remove the "pressed" effect
function addPressedEffect(key) {
    const activeButton = document.querySelector(`.${key}`); // Select the button with the matching class
    if (activeButton) {
        activeButton.classList.add("pressed"); // Add the "pressed" class
        setTimeout(() => {
            activeButton.classList.remove("pressed"); // Remove the "pressed" class after 100ms
        }, 100);
    }
}
