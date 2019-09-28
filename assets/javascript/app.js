var counter = 60;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var interval;

var question = quizQuestions[currentQuestion].question;
var choices = quizQuestions[currentQuestion].choices;

$( document ).ready(function() {

  $(document).on("click", ".choice", function() {
    var userAnswer = $(this).attr("data-answer");
    if (userAnswer === quizQuestions[currentQuestion].correctAnswer){
      score++;
      clearInterval(interval);
      
    }else {
      lost++;
      clearInterval(interval);
    }
    currentQuestion++;
    question = quizQuestions[currentQuestion].question;
    choices = quizQuestions[currentQuestion].choices;
    loadQuestion();
  })
loadQuestion();
});

function loadQuestion() {
  $("#game").empty();
  $("#options").empty();
  $("#timer").html("Time Remaining: " + counter);
  $("#game").html("<h4>" + question + "</h4>");

  for (var i = 0; i < choices.length; i++) {
    var btn = $("<button>")
    btn.addClass("choice")
    btn.attr("data-answer", choices[i])
    btn.text(choices[i])
    $("#options").append(btn);
    $("#options").append("<br><br>")
  }
  counter = 60;
  interval = setInterval(countdown, 1000)
  
  if (quizQuestions[counter]===quizQuestions.length ){
    displayResult();
  }
}






// timer function
function countdown() {
  counter--
  $("#timer").html("Time Remaining: " + counter);
  if (counter === 0) {
    lost++;
    currentQuestion++;
    question = quizQuestions[currentQuestion].question;
    choices = quizQuestions[currentQuestion].choices;
    clearInterval(interval);
    loadQuestion();
  }
}

function displayResult(){
  $("#options").text("You got " + score + " correct");
}

