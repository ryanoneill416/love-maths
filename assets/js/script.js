// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submmit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {

}

function displaySubtractQuesstion() {
    
}

function displayMultiplyQuestion() {
    
}