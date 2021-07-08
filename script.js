var question = document.querySelector(".question");
var choices = document.querySelector(".choices");
var begin = document.querySelector("#start");
var button = document.querySelectorAll(".button");
var quiz = document.querySelector(".quiz-container");
var score = document.querySelector(".score");
var counter = document.querySelector("#counter");
var answerCorrect = document.querySelectorAll(".correct");
var ansIncorrect = document.querySelectorAll(".incorrect");
var endGame = document.querySelector("#end");
var restart = document.querySelector("#playAgain");
var results = document.querySelector("#results");
var choiceButtons = [answerCorrect, ansIncorrect];

var score = [];

var count = localStorage.getItem("score");
score.textContent = score;

// Displays Countdown timer
var timerEl = document.querySelector('.timer');


function hideTimer() {
  if (!endGame) return;
  if (endGame.style.display === "block") {
    timerEl.style.display = "none";
  }
};

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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  if (n > slides.length) {
    n = slideIndex = slides.length;
  }
  hideTimer();
}

// Clicking on buttons goes to next slide
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    plusSlides(1);
  })
};

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
    } else if (timeLeft < 1) {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      // Hides quiz slides when time runs out
      var allSlides = document.querySelectorAll(".slides");
      for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
      };
      // Shows previous score page
      endGame.style.display = "block";
      hideTimer();
    }
  }, 1000);

  // Subtracts time whenever a question is answered incorrectly
  for (var i = 0; i < ansIncorrect.length; i++) {
    ansIncorrect[i].addEventListener("click", function () {
      timeLeft = timeLeft - 5;
      timerEl.textContent = 'Time remaining ' + timeLeft + ' seconds';
    })
  };

  // Adds score every time a question is answered correctly
  for (var i = 0; i < answerCorrect.length; i++) {
    answerCorrect[i].addEventListener("click", function () {
      score = Number(score) + 10;
      counter.textContent = score;
      localStorage.setItem("score", score);
    }
    )
  };

});

// Save Score
var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#score");
var submit = document.querySelector("#submit");
var messageDiv = document.querySelector("#message");
var userinitialsSpan = document.querySelector("#user-initials");
var userscoreSpan = document.querySelector("#user-score");

// renderLastRegistered();

function displayMessage(type, message) {
  messageDiv.textContent = message;
  messageDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  var score = localStorage.getItem("score");
  if (!initials || !score) {
    return;
  }
}

var highScores = JSON.parse(localStorage.getItem("highScores"));
if (highScores === null) {
  var highScores = [];
}

submit.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;
  // prevents empty submittion
  if (initials === "") {
    displayMessage("error", "initials cannot be blank");
  } else {
    displayMessage("success", "Congratulations");
  }


  const newScore = { initials, score };

  highScores.push(newScore);
})


// Showing high scores
function printRecords() {
  for (var i = 0; i < highScores.length; i++) {
    var records = document.createElement("li");
    records.textContent = JSON.stringify(highScores[i]).replace("{", "").replace("}", "").replace(/"([^"]+)":/g, '$1:');
    results.append(records);
    console.log(highScores)
  }
}

printRecords();

// Try Again Button to reload page
restart.addEventListener("click", function () {
  location.reload();
});