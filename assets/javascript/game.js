function fullGame() {

  if (quesitons[questionNum]) {

    $("#question").html(questions[questionNum].question);

    for(var i = 0; i < questions[questionNum].options[questionNum] ; i++){

      options = $("<div class='questionOps' id=" + i + "> " + questions[questionNum].options[quesitonNum] + "</div>");

      $("#options").append(options);

    } //close option generator

  } //close IF

  else {

    $("#quesiton").hide();

    $("#options").hide();

    results = $("<div> Correct Answers: " + correct + "</div> <br> <div> Incorrect Answers: " + incorrect + "</div>");

    $("#results").append(results);

    $("#startBtn").show();

    
  } //close ELSE

} //close fullGame
