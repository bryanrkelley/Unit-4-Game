/*JavaScript*/
(function () {
    var counter,
        targetNumber,
        $winner = $("#winner"),
        $loser = $("#loser"),
        wins = 0,
        losses = 0,
        isRoundDone = false;

    // create variables globally towards our application
    var targetNumber = "";

    var $reset = $("#reset")



    function startGame() {

        counter = 0;
        $("#counter").html(counter);

        //Reset the round
        isRoundDone = false;

        // // Hide 'play again' button.
        // $reset.addClass("hide");

        //Hide Winner Statement
        $winner.hide();

        //Hide Loser Statement
        $loser.hide();

        // generate random target number
        targetNumber = Math.floor((Math.random() * 101) + 19);

        //display the value to users
        $("#number-to-guess").html(targetNumber);

        //Generate random gem values
        $("#Garnet").val(Math.floor((Math.random() * 12) + 1));
        console.log("Garnet is: " + $("#Garnet").val());
        $("#Amethyst").val(Math.floor((Math.random() * 12) + 1));
        console.log("Amethyst is: " + $("#Amethyst").val());
        $("#Pearl").val(Math.floor((Math.random() * 12) + 1));
        console.log("Pearl is: " + $("#Pearl").val());
        $("#Steven").val(Math.floor((Math.random() * 12) + 1));
        console.log("Steven is: " + $("#Steven").val());
    }


    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".gem").on("click", function () {
        if (isRoundDone) {
            true;
            return;
        }

        var crystalValue = ($(this).val());
        crystalValue = parseInt(crystalValue);

        // // We then add the crystalValue to the user's "counter" which is a global variable.
        // // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        $("#counter").html(counter);

        // Lose Logic
        if (counter > targetNumber) {
            //Congratulate player on trying their best
            $loser.show();
            losses++; // increments the losses variable by 1 e.g. losses = losses + 1
            document.querySelector("#losses").innerHTML = losses;
            isRoundDone = true;
        }

        // Win Logic
        if (counter === targetNumber) {
            //Congratulate player on guessing correctly
            $winner.show();
            wins++; // increments the wins variable by 1 e.g. wins = wins + 1
            document.querySelector("#wins").innerHTML = wins;
            isRoundDone = true;
        }

        $reset.removeClass("hide");

    });

    // attach handler to the keydown event of the "return" document
    document.addEventListener('keydown', function handler(e) {
        if (event.keyCode === 13) {
            startGame();
        }
    });


    // Initial start of game
    startGame();


    $reset.on('click', function (e) {
        // Replay game
        startGame();
    });
})();