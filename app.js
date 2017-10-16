//Global Variables
//-----------------------------------------------
//Arrays and variables for holding variables
var wordOptions= ["san diego", "barcelona", "sydney", "chicago", "london"];
var selectedWord ="";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



//Functions
//-----------------------------------------------
function startGame(){
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    //Reset
    guessesLeft = 9;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with correct number of blanks
    for (var i = 0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    //Change html to reflect round conditions

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter){
    //check if the letter is anywhere in the word
    var letterInWord = false;
    for(var i = 0; i<numBlanks; i++){
        if (selectedWord[i] == letter) {
            letterInWord = true;
        }
    }

    //check where in the word the letter exists and then populate blanksAndSuccesses arrary.
        if(letterInWord) {    
        for(var i = 0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
                console.log(blanksAndSuccesses);
            }
        }
        
    }
            else {
        wrongGuesses.push(letter);
        numGuesses--;
        }
    }
//Main process
// ----------------------------------------------
//Initiates the game on pageload
startGame();

//Register key presses\
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    //Testing/Debugging
    console.log(letterGuessed);
}