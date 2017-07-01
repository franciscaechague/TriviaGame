

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


      options = $("<button class='questionOps btn btn-default btn-lg btn-block' id=" + i + "> " + questions[questionNum].options[optionNum] + "</button>");

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

  $("#options").html("INCORRECT!");

  $("#loseGif").show();

  var $loseGif = $('#loseGif');

  grow = function (size) {
      if (size < 30) {
          console.log(size);
          $loseGif.css('width', size + '%');
          $loseGif.css('height', size + '%');
          $loseGif.css("top", "60px");
          size++;
          setTimeout(grow, 10, size);
      }
  }

  grow(0);

  nextQuestion();
}

// function answerTimer () {
//
//   answerCountdown = setInterval(fiveSeconds,1000);
//
//   function fiveSeconds() {
//
//     if (answerCounter === 0) {
//
//       clearInterval(answerCountdown);
//
//     }
//     else {
//
//       answerCounter --;
//
//       $("#timer2").html("Time Left 00:" + answerCounter);
//     }
//
//   }



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


//start the game by clicking the start button

// $(document).ready(function() {
//         var obj = document.createElement("audio");
//         obj.src="assets/images/friendSong.mp3";
//         obj.volume=0.10;
//         obj.autoPlay=false;
//         obj.preLoad=true;
//
//         });

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

    $("#options").html("CORRECT!");

    $("#winGif").show();

    var $winGif = $('#winGif');

		grow = function (size) {
		    if (size < 30) {
		        console.log(size);
		        $winGif.css('width', size + '%');
		        $winGif.css('height', size + '%');
            $winGif.css("top", "60px");
		        size++;
		        setTimeout(grow, 10, size);
		    }
		}

		grow(0);

    nextQuestion();


  }else {

    incorrect ++;

    $("#options").html("INCORRECT!");

    $("#loseGif").show();

    var $loseGif = $('#loseGif');

		grow = function (size) {
		    if (size < 30) {
		        console.log(size);
		        $loseGif.css('width', size + '%');
		        $loseGif.css('height', size + '%');
            $loseGif.css("top", "60px");
		        size++;
		        setTimeout(grow, 10, size);
		    }
		}

		grow(0);

      nextQuestion();

  }



});





















  // $("#question").html(questions[0].question);

  // var arrayOptions = questions[0].options;
  //
  // for (var i = 0; i < arrayOptions; i++) {
  //
  //   options = $("<div class= 'questionOps' id=" + indexOf.questions[i].options[i] + "> " + "")
  // }
  //
  // function questionLoop() {
  //
  //   for(var i = 0; i < questions[i].options[i] ; i++){
  //
  //     options = $("<div class='questionOps' id=" + i + "> " + questions[questionNum].options[i] + "</div>");
  //
  //     $("#options").append(options);
  //
  //   } //closes options loop
  //
  // } //closes questionLoop
  //
  //
  //
  //
  //
  //
  // function gameLoop() {
  //
  //   for(var i = 0; i < questions.length; i++){
  //
  //     var questionGenerator = setInterval(questionLoop, 10000);
  //
  //   } //closes game loop
  //
  // } //closes gameLoop
  //
  //
  //
  //
  // function stopNext() {
  //
  //   clearInterval(questionGenerator);
  //
  // } //closes stopNext
  //
