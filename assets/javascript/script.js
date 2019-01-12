/*JavaScript*/
(function () {
    var targetNumbers = [
        "53",
        "14",
        "25",
        "76",
        "48",
        "33"
    ];

    var counter, targetNumber, wins, losses, crystalChoices;

    var $reset=$("#reset")


    function startGame() {

        //document.querySelector("#result").innerHTML = '';
        //document.querySelector("#guesses").innerHTML = '';
        //document.querySelector("#guessedLetters").innerHTML = '';
        //document.querySelector("#word").innerHTML = '';

        // Hide 'play again' button.
        $reset.addClass("hide")

        counter = 0;
        wins = 0;
        losses = 0;

        // Pick a random number from our array.
        targetNumber = targetNumbers[Math.floor(Math.random() * targetNumbers.length)];
        console.log(targetNumber);

        $("#number-to-guess").html(targetNumber);

        // document.querySelector("#word").innerHTML = "DIRECTIONS!";
        $("#word").html(targetNumber);


    }

    // We begin by expanding our array to include four options.
    var numberOptions = [10, 5, 3, 7];

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr(href="#");

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }

    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function (updateNumberOfGuesses) {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

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