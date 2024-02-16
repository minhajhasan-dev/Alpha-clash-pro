/* function play() {
  // step-1: hide the home screen. to hide the screen add the class hidden o the home section
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  //show the playground
  const playGroundSection = document.getElementById("play-ground");
  playGroundSection.classList.remove("hidden");
}
 */
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  // making alphabet to lower case
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  //check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("you got a point");
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // -----------------------------------------------
    // update score:
    /*     // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText); 
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    console.log(newScore);
    // 3. show the updated score
    currentScore.innerText = newScore;*/

    //set a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed! you lost a life");

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    //---------------------------------------------
    /*    // step-1: get the current life number
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    // step-2: reduce the life count
    const newLife = currentLife - 1;
    // step-3: display the updated life count
    currentLifeElement.innerText = newLife; */
  }
}
// callback function
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  //   console.log("your random alphabet", alphabet);

  // set random alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  // set background color or keys
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showEelementById("play-ground");
  continueGame();
}
