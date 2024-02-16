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
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
// এই ফাংশনের কাজ হচ্ছে স্কোর বা লাইফ থেকে ইলিমেন্ট নিয়ে কাজ করা
// একই কাজ মেইন ফাংশনে ২ বার করা লাগছে, এই ফাংশনের কারণে ২ বার ফাংশন লেখার দরকার নেই, শুধু ওই ২ জায়গায় কল করে দিলেই খেল খতম
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
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
