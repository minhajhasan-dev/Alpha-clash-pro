function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showEelementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabets);
  //   get a random index between 0-25
  const randomIndex = Math.round(Math.random() * 25);
  //   console.log(randomIndex);
  const alphabet = alphabets[randomIndex];
  //   console.log(randomIndex, alphabet);
  return alphabet;
}
