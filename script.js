//  Selects carousel element
var question = document.querySelector(".question");
var choices = document.querySelector(".choices");
var begin = document.querySelector("#start");
score = [];

var question1 = ['What is your favorite fruit?'];
var answers1 = ['Pineapple', 'Banana', 'Apple', 'Peach'];

function myQuestions() {
  question.innerHTML = question1;
};

function printAnswers() {
    for (var i = 0; i < answers.length; i++) {
      var button = document.createElement("button");
      var ans = document.createTextNode(answers[i]);
      button.appendChild(ans);
      choices.appendChild(button);
    }
};


begin.addEventListener("click", function(event) {
    myQuestions();
    printAnswers();
    // var element = event.target;
    begin.parentNode.removeChild(begin);
  
  });



  // In class 3-21, using 0,1,2,3 for
  // question, a, b, c, d
// In class API 4 - 18 & 26



  // What are we doing here?
  // str = str.replace(.question, questions);

  // const myQuestions = [
  //   {
  //     question: "Who invented JavaScript?",
  //     answers: {
  //       a: "Douglas Crockford",
  //       b: "Sheryl Sandberg",
  //       c: "Brendan Eich"
  //     },
  //     correctAnswer: "c"
  //   },
  //   {
  //     question: "Which one of these is a JavaScript package manager?",
  //     answers: {
  //       a: "Node.js",
  //       b: "TypeScript",
  //       c: "npm"
  //     },
  //     correctAnswer: "c"
  //   },
  //   {
  //     question: "Which tool can you use to ensure code quality?",
  //     answers: {
  //       a: "Angular",
  //       b: "jQuery",
  //       c: "RequireJS",
  //       d: "ESLint"
  //     },
  //     correctAnswer: "d"
  //   }
  // ];

 





// begin.addEventListener("click", function() {
//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";
//     choices.appendChild(button);
//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";
//     choices.appendChild(button);
//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";
//     choices.appendChild(button);
//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";
//     choices.appendChild(button); 
    
    // choices.push(
    // `<button id="btnA" class="button">Choice A</button>
    // <button id="btnB" class="button">Choice B</button>
    // <button id="btnC" class="button">Choice C</button>
    // <button id="btnD" class="button">Choice D</button>`
    

    // )
// });







// Selects buttons using their parent carousel element
// var next = carousel.querySelector(".next");
// var prev = carousel.querySelector(".prev");
// let index = 0;
// let currentImage;

// let questOne = "How much wood could a woodchuck chuck?"

// // let answersOne = 

// let images = [
//   "https://picsum.photos/300/200",
//   "https://picsum.photos/300/201",
//   "https://picsum.photos/300/202",
//   "https://picsum.photos/300/203"
// ];

// choices.addEventListener('click', addButtons);



// // carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";document.getElementById("theDiv").textContent = 'This is dynamically added text';

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = images.length - 1; 
//   } else if (index > images.length - 1) { 
//     index = 0;
//   }
//   currentImage = images[index];
//   carousel.style.backgroundImage = "url('" + currentImage + "')";
// }

// // Clicking on image opens a new window containing the image
// carousel.addEventListener("click", function() {
//   window.location.href = images[index];
// });

// // Clicking on next button displays next image in carousel
// next.addEventListener("click", function(event) {
//   // Stops event from bubbling up and new window opening
//   event.stopPropagation();

//   navigate(1);
// });

// // Clicking previous displays previous image in carousel
// prev.addEventListener("click", function(event) {
//   // Event bubbling would occur and a new window would open if we did not include the following line of code.
//   event.stopPropagation();

//   navigate(-1);
// });

// navigate(0);