// ****** Business logic ******

/* The following function returns a track suggestion string
based on answers from a form
*/
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
    return "no suggestion"
  }

};


/* The following function returns a link string
based on the suggestion returned from whichTrack()
*/
var whichLink = function(track) {
  if (track === "CSS and Design") {
    return "http://www.epicodus.com/design"
  } else if (track === "C# and .Net") {
    return "http://www.epicodus.com/c-sharp"
  } else if (track === "Java and Android") {
    return "http://www.epicodus.com/java"
  } else if (track === "Ruby and Rails") {
    return "http://www.epicodus.com/ruby"
  } else if (track === "PHP and Drupal") {
    return "http://www.epicodus.com/php"
  }
}




// ***** User interface logic *****

$(document).ready(function() {
  $("form#track-qestions").submit(function() {
    event.preventDefault();

    //get the answers from the radio buttons on form
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();
    var answer6 = $("input:radio[name=question6]:checked").val();

    //call function to get track suggestion and store in result
    var result = whichTrack(answer1, answer2, answer3, answer4, answer5, answer6);

    //get link to display to user
    var link = whichLink(result);

    //hide questions
    $(".question-form").toggle();
    $("#nav-q").removeClass("active");
    $("#nav-track").addClass("active");

    //display results based on suggestion
    if (result === "no suggestion") {
      $(".no-track").fadeToggle();   //show info if no suggestion returned
    } else {

      $("#answer").text(result);  //insert track suggestion into span element #answer
      $("#learn-more").attr("href", link)
      $(".track-suggestion").fadeToggle(); //show suggestion div

    }

  });
});
