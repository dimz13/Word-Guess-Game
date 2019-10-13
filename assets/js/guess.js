function guess() {
    $(document).ready(function () {
        var userGuess;
        var winDom = document.getElementById("wins");
        var remainDom = document.getElementById("remain");
        var guessChoicesDom = document.getElementById("guessed");
        var correctGuessDom = document.getElementById("underscores");
        var wins = 0;
        var remain = 15;
        var guessChoices = [];
        var answerArray = [];
        /**Array of Random words **/
        var wordList = ["OUTLANDER", "EMMA", "IT", "BEWOULF", "CHOCOLAT", "DIVERGENT", "ECLIPSE", "JAWS", "LOLITA", "BAMBI", "DRACULA", "REVIVAL", "BLINK", "CORALINE"];
        var selWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(selWord);

        remainDom.textContent = "GUESSES REMAINING: " + remain;
        winDom.textContent = "WINS: " + wins;
        var remainingLetter = selWord.length;

        function checkGame(userGuess) {
            remain--;
            remainDom.textContent = "GUESSES REMAINING: " + remain;
            for (var j = 0; j < selWord.length; j++) {
                if (selWord[j] === userGuess && guessChoices.indexOf(userGuess) === -1) {
                    remainingLetter--;
                    console.log(remainingLetter);
                    answerArray[j] = userGuess;
                    correctGuessDom.textContent = answerArray.join(" ");
                    // guessChoicesDom.textContent = " Letters guessed so far: " + guessChoices.join(", ") + "";
                    if (remainingLetter === 0) {
                        wins++;
                        winDom.textContent = "WINS: " + wins;
                        alert("You guessed correctly");
                        playAgain();
                    }
                }
            }
            guessChoices[guessChoices.length] = userGuess;
            guessChoicesDom.textContent = " LETTERS GUESSED: " + guessChoices.join(", ") + "";
        }
        function playAgain() {
            remain = 15;
            guessChoices = [];
            guessChoicesDom.textContent = " LETTERS GUESSED: " + guessChoices.join(", ") + "";
            answerArray = [];
            selWord = wordList[Math.floor(Math.random() * wordList.length)];
            console.log(selWord);
            remainingLetter = selWord.length;
            updateStats();
        }

        function updateStats() {
            start();
            remainDom.textContent = "GUESSES REMAINING: " + remain;
            correctGuessDom.textContent = answerArray.join(" ");
            guessChoicesDom.textContent = " LETTERS GUESSED: " + guessChoices.join(", ") + "";
        }

        function start() {
            for (var i = 0; i < selWord.length; i++) {
                answerArray[i] = " _ ";
                correctGuessDom.textContent = answerArray.join(" ");
            }
        }
        $("#start").click(function () {
            start();
        });

        document.onkeyup = function (event) {
            userGuess = event.key.toUpperCase();
            console.log(userGuess);
            if (remain > 0 && remainingLetter > 0) {
                checkGame(userGuess);

            } else if (remain === 0) {
                playAgain();
            }

        }
    });
}