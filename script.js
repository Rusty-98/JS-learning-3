function game() {
    const random = parseInt(Math.random() * 100 + 1)

    const sub = document.getElementById('btn')
    const input = document.getElementById('num')
    const arr = document.getElementById('arr')
    const msg = document.getElementById('msg')
    const remaining = document.getElementById('chances')

    let prevG = []
    let numG = 10

    sub.addEventListener("click", function (e) {
        e.preventDefault();
        if (numG >= 1) {
            const guess = parseInt(input.value);
            validateGuess(guess);
        }
        else {
            remaining.innerHTML = 0
            msg.innerHTML = "Game over!"
            msg.style.color = 'red';
            sub.value = "Play Again!"
            sub.removeEventListener("click", arguments.callee);
            sub.addEventListener("click", game);
        }
    });



    function validateGuess(guess) {
        if (isNaN(guess) || guess < 0 || guess > 100) {
            msg.innerHTML = "Enter a valid number";
            msg.style.color = "red";
            numG -= 1;
            remaining.innerHTML = numG
        } else {

            numG -= 1;
            remaining.innerHTML = numG

            checkGuess(guess);
            updateGuesses(guess);
        }
    }

    checkGuess = function (guess) {
        if (guess == random) {
            msg.innerHTML = "You Got it!";
            msg.style.color = "green";
        } else if (guess < random) {
            msg.innerHTML = "Guess a higher Number"
            msg.style.color = "white";
        } else {
            msg.innerHTML = "Guess a lower Number"
            msg.style.color = "white";
        }
    }

    function updateGuesses(guess) {
        prevG.push(` ${guess}`)
        arr.innerHTML = `[ ${prevG} ]`
    }
}

game()