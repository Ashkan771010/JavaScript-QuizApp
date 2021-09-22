var question = document.querySelector('.ques');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector(".btn2");
var btn = document.querySelector('.btn');
var nextP = document.querySelector(".goNext");
var score = document.querySelector('.score');

var finalScore = -1;
var finalNum;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function load() {
  document.body.style.backgroundColor = "rgb(2, 150, 2)";
  var num1 = randomNumber(1, 300);
  var num2 = randomNumber(1, 300);

  finalNum = num1 + num2;
  console.log(`Correct Answer : ${finalNum}`);

  var fullQues = `What Is ${num1} + ${num2} ?`;
  question.innerHTML = fullQues;

var myArray = [
  finalNum - 10,
  finalNum + 10,
  finalNum - 5,
  finalNum + 5,
  finalNum - 15,
  finalNum + 15,
  finalNum - 20,
  finalNum + 20,
  finalNum + 1,
  finalNum - 1,
  finalNum + 2,
  finalNum - 2,
  finalNum + 3,
  finalNum - 3,
  finalNum + 4,
  finalNum - 4,
  finalNum + 6,
  finalNum - 6,
  finalNum + 7,
  finalNum - 7,
  finalNum + 8,
  finalNum - 8,
  finalNum + 9,
  finalNum - 9,
  finalNum + 11,
  finalNum - 11,
  finalNum + 12,
  finalNum - 12,
  finalNum + 13,
  finalNum - 13,
  finalNum + 14,
  finalNum - 14,
];

var item = myArray[Math.floor(Math.random() * myArray.length)];
console.log(`Wrong Answer : ${item}`);

var randomArray = [item, finalNum];
var setRandom = randomArray[Math.floor(Math.random() * randomArray.length)];
var setRandom2 = randomArray[Math.floor(Math.random() * randomArray.length)];

if(setRandom == randomArray[0]) {
  setRandom2 = randomArray[1]
}else {
  setRandom2 = randomArray[0]
}

btn1.innerHTML = setRandom;
btn2.innerHTML = setRandom2;
btn1.dataset.value = setRandom;
btn2.dataset.value = setRandom2;

nextP.innerHTML = "";
finalScore++;
score.innerHTML = `Score : ${finalScore}`;
}

function checkerBtn1() {
  var numValue1 = btn1.dataset.value;
  console.log(numValue1);
  if (numValue1 == finalNum) {
    // document.body.style.backgroundColor = "yellow";
    // nextP.innerHTML = "YOU WINNNNNN :)  PLZ Click Next";
    load();
  } else {
    document.body.style.backgroundColor = "red";
    nextP.innerHTML = "YOU LOOSE :(" + " " + "PLZ Click Next";
    finalScore = 0;
    score.innerHTML = `Score : ${finalScore}`;
  }
}

function checkerBtn2() {
  var numValue2 = btn2.dataset.value;
  console.log(numValue2);
  if (numValue2 == finalNum) {
    // document.body.style.backgroundColor = "yellow";
    // nextP.innerHTML = "YOU WINNNNNN :)  PLZ Click Next";
    load();
  } else {
    document.body.style.backgroundColor = "red";
    nextP.innerHTML = "YOU LOOSE :(" + " " + "PLZ Click Next";
    finalScore = 0;
    score.innerHTML = `Score : ${finalScore}`;
  }
}
