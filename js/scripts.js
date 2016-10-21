// Business logic:

var whichTrack = function(answer1, answer2, answer3, answer4, answer5, answer6) {
  if (answer1 === "option1") {
    return "CSS and Design"
  } else {
    return "Ruby"
  }
};



// User interface logic:

$(document).ready(function() {
  $("form#track-qestions").submit(function() {
    event.preventDefault();

    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();
    var answer6 = $("input:radio[name=question6]:checked").val();


    var result = whichTrack(answer1, answer2, answer3, answer4, answer5, answer6);

    $("#answer").text(result);
  });
});
