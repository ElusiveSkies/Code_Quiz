var question = document.querySelector(".question");
var choices = document.querySelector(".choices");
var begin = document.querySelector("#start");
var button = document.querySelectorAll(".button");
var quiz = document.querySelector(".quiz-container");
var score = document.querySelector(".score");
var counter = document.querySelector("#counter");
var answerCorrect = document.querySelectorAll(".correct");
var ansIncorrect = document.querySelectorAll(".incorrect");
var choiceButtons = [answerCorrect, ansIncorrect];
var score = [];

score = 0;

var count = localStorage.getItem("score");
score.textContent = score;


// var question = ['What is your favorite fruit?'];
// var answers = ['Pineapple', 'Banana', 'Apple', 'Peach'];

// function myQuestions() {
//   question.innerHTML = question;
// };

// function printAnswers() {
//   for (var i = 0; i < answers.length; i++) {
//     var button = document.createElement("button");
//     var ans = document.createTextNode(answers[i]);
//     button.appendChild(ans);
//     choices.appendChild(button);
//   }
// };


// begin.addEventListener("click", function(event) {
//     myQuestions();
//     printAnswers();
//     // var element = event.target;
//     begin.parentNode.removeChild(begin);
  
//   }); 




  

  // In class 3-21, using 0,1,2,3 for
  // question, a, b, c, d
// In class API 4 - 18 & 26



  
 

// Will work, but requires too much on html page


// Rename variables, etc

// Displays or hides slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
  if(n > slides.length){
    n= slideIndex =slides.length;
 }
}


// Clicking on buttons goes to next slide
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
  plusSlides(1);
})};



// Displays Countdown timer
var timerEl = document.querySelector('.timer');

// Timer that counts down from 30 seconds
begin.addEventListener("click", function countdown() {
  var timeLeft = 30;


  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = 'Time remaining ' + timeLeft + ' seconds';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = 'Time remaining ' + timeLeft + ' seconds';
      timeLeft--;
    } else if (timeLeft === 0) {
      showSlides(4);
      timerEl.textContent = 'Time is up!';
      clearInterval(timeInterval);
    }
  }, 1000);

for (var i = 0; i < ansIncorrect.length; i++) {
  ansIncorrect[i].addEventListener("click", function() {
  timeLeft = timeLeft - 5;
  timerEl.textContent = 'Time remaining ' + timeLeft + ' seconds';
})};

for (var i = 0; i < answerCorrect.length; i++) {
    answerCorrect[i].addEventListener("click", function() {
    score = Number(score) + 10;
    counter.textContent = score;
    localStorage.setItem("score", score);
  }
)};

});









// Highscores
var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#score");
var signUpButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userinitialsSpan = document.querySelector("#user-initials");
var userscoreSpan = document.querySelector("#user-score");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var score = localStorage.getItem("score");

  if (!initials || !score) {
    return;
  }

  userinitialsSpan.textContent = initials;
  userscoreSpan.textContent = " - " + score;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;

  if (initials === "") {
    displayMessage("error", "initials cannot be blank");
  } else {
    displayMessage("success", "Congratulations");

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
    renderLastRegistered();
  }
});
