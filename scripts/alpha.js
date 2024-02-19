// function play(){
//  homeSection = document.getElementById('home-screen');
//  homeSection.classList.add('hidden')
// //  console.log(homeSection.classList)  
// const playgroundSection = document.getElementById('play-ground'); 
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList)
// }

function continueGame(){
    // step - 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random Alphabet ' + alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}