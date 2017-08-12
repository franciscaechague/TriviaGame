

var questions = [
  {
  question: "How many babies did Phoebe carry for her brother?",
  options: ["3", "2", "Babies?", "None"],
  answer: 0
},{
  question: "What was the name of Ross' monkey?",
  options: ["Marcelo", "Marce", "Marcelle", "Mars"],
  answer: 2
},{
  question: "What is Chandler's mother's job?",
  options: ["Actress", "Reporter", "Did she work?", "Writer"],
  answer: 3
},{
  question: "Whose catchphrase is 'Oh My God!'??",
  options: ["Rachel", "Janice", "Monica", "Chandler"],
  answer: 1
},{
  question: "What does Joey wear to Monica and Chandler's wedding?",
  options: ["A tennis outfit", "A soldier costume", "A rabbi's robe", "A 007 tux"],
  answer: 1
},{
  question: "What was Tag's job? (Rachel's boyfirend)",
  options: ["Secretary", "Fashion Advisor", "Assistant", "Male Model"],
  answer: 0
},{
  question: "What type of animal is 'Hugsy'?",
  options: ["Bear", "Elephant", "Penguin", "Rabbit"],
  answer: 2
},{
  question: "How many Friends have worked in the coffee shop?",
  options: ["0", "3", "1", "2"],
  answer: 3
},{
  question: "Who is the youngest Friend?",
  options: ["Monica", "Rachel", "Joey", "Phoebe"],
  answer: 1
},{
  question: "The 'Geller Cup' is a prize in which sport?",
  options: ["Basquet", "Football", "Volley", "Soccer"],
  answer: 1
}];


var questionNum = 0;

var countdown;

var optionNum = 0;

var options;

var correct = 0;

var incorrect = 0;

var timmer;

var results;

var counter = 10;

var answerCountdown;

var answerCounter = 3;


//-----======================================================    FUNCTIONS    ===================================================//


//how to create the questions

function fullGame() {

  if (questionNum < 10) {

    questionTimer();

    $("#options").empty();

    $("#question").html(questions[questionNum].question);

    for(var i = 0; i < questions[questionNum].options.length ; i++){


      options = $("<button class='questionOps btn btn-block' id=" + i + "> " + questions[questionNum].options[optionNum] + "</button>");

      optionNum ++;

      $("#options").append(options);

    } //close option generator

    optionNum = 0;

  } //close IF

  else {

    $("#question").hide();

    $("#options").hide();

    results = $("<div> Correct Answers: " + correct + "</div> <br> <div> Incorrect Answers: " + incorrect + "</div>");

    $("#results").append(results);

    $("#startBtn").show();


  } //close ELSE

} //close fullGame

function questionTimer () {

  countdown = setInterval(thirtySeconds,1000);

  function thirtySeconds() {

    if (counter === 0) {

      setTimeout(function() {

          timeOutLoss();

          nextQuestion();
      });
    }
    else {

      counter --;

      $("#timer").html("00:0" + counter);
    }

  }
}



function timeOutLoss() {

  incorrect ++;

  questionNum ++;

  $("#options").empty();

  $("#loseGif").show();

  var $loseGif = $('#loseGif');

  grow = function (size) {
      if (size < 30) {
          console.log(size);
          $loseGif.css('width', size + '%');
          $loseGif.css('height', size + '%');
          $loseGif.css("top", "100px");
          size++;
          setTimeout(grow, 10, size);
      }
  }

  grow(0);

  nextQuestion();
}





function nextQuestion() {

    $("#question").empty();

    questionNum ++;

    clearInterval(countdown);

    counter = 10;

    $('#timer').html("");

    setTimeout(function() {

        $("#winGif").hide();

        $("#loseGif").hide();

        fullGame();

    }, 3000)
}

// cleanUp = function() {
//
//   $("#question").empty();
//
//
// };



//-----======================================================    GAME LOGIC   ===================================================//


$("#startBtn").click(function(){

  var obj = document.createElement("audio");

  obj.src = "themeSong.wav";

  obj.play();

  $(this).hide();

  var correct = 0;

  var incorrect = 0;

  questionNum = 0;

  $("#results").empty();

  $("#question").show();

  $("#options").show();

  fullGame();

});


//what happenes when the user clicks an option

$(document).on("click", ".questionOps", function(){

  clearInterval(countdown);

  var userChoice = $(this).attr("id"); // can i do $(this.id)??

  if (userChoice == questions[questionNum].answer) {

    correct ++;

    $("#question").html("CORRECT!");

    $("#options").empty();

    $("#winGif").show();

    var $winGif = $('#winGif');

		grow = function (size) {
		    if (size < 30) {
		        console.log(size);
		        $winGif.css('width', size + '%');
		        $winGif.css('height', size + '%');
            $winGif.css("top", "100px");
		        size++;
		        setTimeout(grow, 10, size);
		    }
		}

		grow(0);

    nextQuestion();


  }else {

    incorrect ++;

    $("#question").html("INCORRECT!");

    $("#options").empty();

    $("#loseGif").show();

    var $loseGif = $('#loseGif');

		grow = function (size) {
		    if (size < 30) {
		        console.log(size);
		        $loseGif.css('width', size + '%');
		        $loseGif.css('height', size + '%');
            $loseGif.css("top", "100px");
		        size++;
		        setTimeout(grow, 10, size);
		    }
		}

		grow(0);

      nextQuestion();

  }



});
