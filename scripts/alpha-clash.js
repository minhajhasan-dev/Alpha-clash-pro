/* function play() {
  // step-1: hide the home screen. to hide the screen add the class hidden o the home section
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  //show the playground
  const playGroundSection = document.getElementById("play-ground");
  playGroundSection.classList.remove("hidden");
}
 */

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
