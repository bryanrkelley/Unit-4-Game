/*JavaScript*/
(function () {
    var counter, targetNumber, wins, losses, crystalChoices;

    // create variables globally towards our application
    var targetNumber = "";

    var $reset = $("#reset")


    function startGame() {

        // Hide 'play again' button.
        $reset.addClass("hide")

        counter = 0;
        wins = 0;
        losses = 0;

        // Pick a random number from our array.
        // generate random target number
        targetNumber = Math.floor((Math.random() * 120) + 19);
        console.log(targetNumber);

        $("#number-to-guess").html(targetNumber);

        // document.querySelector("#word").innerHTML = "DIRECTIONS!";
        $("#word").html(targetNumber);

        console.log("your score: " + counter)

        // generate random gem values
        $("#gem-one").val(Math.floor((Math.random() * 12) + 1));
        console.log("gem one value is: " + $("#Garnet").val());
        $("#gem-two").val(Math.floor((Math.random() * 12) + 1));
        console.log("gem two value is: " + $("#Amethyst").val());
        $("#gem-three").val(Math.floor((Math.random() * 12) + 1));
        console.log("gem three value is: " + $("#Pearl").val());
        $("#gem-four").val(Math.floor((Math.random() * 12) + 1));
        console.log("gem four value is: " + $("#Steven").val());
    }


    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function (updateNumberOfGuesses) {

        // var crystalValue = ($(this).attr("data-crystalvalue"));
        // crystalValue = parseInt(crystalValue);
        // // We then add the crystalValue to the user's "counter" which is a global variable.
        // // Every click, from every crystal adds to the global counter.
        // counter += crystalValue;

        // Lose Logic
        if (counter >= targetNumber) {
            document.querySelector("#guesses").innerHTML = "Game Over!";
            //Congratulate player on trying their best
            document.querySelector("#word").innerHTML = "The Crystal Gems lost!  Press 'Enter/Return' to play again!";
            losses++; // increments the losses variable by 1 e.g. losses = losses + 1
            document.querySelector("#losses").innerHTML = losses;
        }

        // Win Logic
        if (counter === targetNumber) {
            //Congratulate player on guessing correctly
            document.querySelector("#guesses").innerHTML = "Winner!";
            document.querySelector("#word").innerHTML = "Good Job!  You saved the day!  Press 'Enter/Return' to play again!";
            wins++; // increments the wins variable by 1 e.g. wins = wins + 1
            document.querySelector("#wins").innerHTML = wins;
        }

        $reset.classList.remove('hide');

    });

    // attach handler to the keydown event of the "return" document
    document.addEventListener('keydown', function handler(e) {
        if (isValidGuess(e.key)) {
            handleValidGuess(e);
        } else if (event.keyCode === 13) {
            startGame();
        }
    });


    // Initial start of game
    startGame();


    $reset.addEventListener('click', function handler(e) {
        // Replay game
        startGame();
    });
})();


// jQuery
//Not needed since Javascript is at the bottom of the page
// $(document).ready(function () {

// });










// function playGame() {

//     // add random gen values to your score
//     $(".gem").on("click", function () {

//         console.log(randomNumber);
//         gemValue = parseInt($(this).val());
//         yourScore = parseInt(yourScore + gemValue);
//         $("#your-score").text(yourScore);
//         console.log("your score in click: " + yourScore)

//         // if your score equals the random number, you win and the game resets
//         if (yourScore === randomNumber) {
//             alert("you win!");
//             yourWins++;
//             $("#your-wins").text(yourWins);
//             console.log("your wins: " + yourWins)
//             yourScore = 0;
//             // TODO: find a more efficient way of resetting the "yourScore." Why can't I get it to work in the gameSetup?
//             $("#your-score").text(yourScore);
//             initializeGame();
//             console.log("your wins after initialize: " + yourWins)
//         }

//         // if your score exceeds the random number, you lose and the game resets
//         if (yourScore > randomNumber) {
//             alert("you lost");
//             yourLosses++;
//             $("#your-losses").text(yourLosses);
//             console.log("your losses: " + yourLosses)
//             yourScore = 0;
//             $("#your-score").text(yourScore);
//             initializeGame();
//             console.log("your losses after intialize: " + yourLosses)

//         }
//     });

// }