// function play(){
//  homeSection = document.getElementById('home-screen');
//  homeSection.classList.add('hidden')
// //  console.log(homeSection.classList)  
// const playgroundSection = document.getElementById('play-ground'); 
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList)
// }

function handleKeyboardPress(event){
    const playerPressed = event.key;
    console.log("Player Pressed",playerPressed);
    
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)
    

    //check match or not 
    if (playerPressed == expectedAlphabet){
        console.log('you get a point');
        console.log('You have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed, you lost a life');
    }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardPress)


function continueGame(){
    // step - 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random Alphabet ', alphabet);

    //set randomly generated alphabet to the screen (show)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set bg color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}