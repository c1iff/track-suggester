// Business logic:

var whichTrack = function(answer1, answer2, answer3, answer4, answer5, answer6) {
  if ((answer1 === "option1" && answer2 === "option1") || (answer1 === "option1" && answer2 === "option2") || (answer1 === "option3" && answer2 === "option1")) {
    return "CSS and Design";
  } else if ((answer1 === "option2" && answer2 === "option3" && answer3 === "option1") || (answer1 === "option2" && answer3 === "option1"))  {
    return "C# and .Net";
  } else if ((answer1 === "option2" && answer4 === "option1") || (answer4 === "option1")) {
    return "Java and Android";
  } else if ((answer1 === "option2" && answer3 === "option2" && answer5 === "option1")) {
    return "Ruby and Rails";
  } else if ((answer1 === "option2" && answer6 === "option1")) {
    return "PHP and Drupal"
  } else {
    return "no preference"
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
