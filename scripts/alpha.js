// function play(){
//  homeSection = document.getElementById('home-screen');
//  homeSection.classList.add('hidden')
// //  console.log(homeSection.classList)
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList)
// }

const audio = new Audio();

let isGamePlayOn = false;

const artBoard = document.getElementById("art-board");
const modalBox = document.getElementById("modal-box");

function handleKeyboardPress(event) {
  if (isGamePlayOn === false) return;
  const playerPressed = event.key;
  // console.log("Player Pressed",playerPressed);

  //stop the game if pressed 'esc'

  if (playerPressed === "Escape") {
    gameover();
  }



  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet)

  //check match or not
  if (playerPressed == expectedAlphabet) {
    console.log("you get a point");

    audio.src = "../audio/success.mp3";
    audio.play();

    //using function
    const currentScore = getTextElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);

    //---------------------------------
    //update score
    // 1.get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // console.log(currentScoreText);
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // // 2.increase score by 1
    // const newScore = currentScore + 1;

    // // 3.show the update score
    // currentScoreElement.innerText = newScore;

    //start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed, you lost a life");

    audio.src = "../audio/wrong.mp3";
    audio.play();

    //using function
    const currentLife = getTextElementValueById("current-life");

    const updateLife = currentLife - 1;

    const updatedLifePercentage = (updateLife / 5) * 100;
    // console.log(updatedLifePercentage);

    artBoard.style.background = `linear-gradient(#FFFFFFB2 ${updatedLifePercentage}%, red)`;

    setTextElementValueById("current-life", updateLife);
    if (updateLife === 0) {
      gameover();
    }

    //---------------------------------------
    // get the current number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // reduce the life count
    // const newLife = currentLife - 1;
    // // display the updated life count
    // currentLifeElement.innerText = newLife;
  }
}

//capture keyboard key press
document.addEventListener("keyup", handleKeyboardPress);

function continueGame() {
  // step - 1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log('Your random Alphabet ', alphabet);

  //set randomly generated alphabet to the screen (show)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set bg color
  setBackgroundColorById(alphabet);
}

function play() {
  //hide everything show only playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  isGamePlayOn = true;
  artBoard.style.background = "linear-gradient(#FFFFFFB2 100% ,red)";
  continueGame();
}

function gameover() {
  hideElementById("play-ground");
  showElementById("final-score");

  // update final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("game-score", lastScore);

  //clear the last selected alphabet
  const currentAlphabet = getElementTextbyId("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
  isGamePlayOn = false;

  artBoard.style.background = "linear-gradient(#FFFFFFB2 100% ,red)";
  audio.src = "../audio/gameover.mp3";
  audio.play();
}
function modalOpen(event) {
    if(event.clientY < 20){
        modalBox.style.display="flex";
    }
}
function closeModal(){
    modalBox.style.display = "none";
}
document.body.onmousemove = modalOpen;
