// The ready event occurs when the DOM (document object model) has been loaded.
$( document ).ready(function(){

// =========================
// SETUP VARIABLES
// =========================

// topics variable consisting of an array of strings that consists of animals
  var topics = ["dog",
    "cat",
    "rabbit",
    "hamster",
    "skunk",
    "goldfish",
    "bird",
    "ferret",
    "turtle",
    "hedgehog",
    "pig"];


  

  // Function for dumping JSON content for each button into the div and displaying it.
  function displayTopicInfo() {

    // Adding data attribute with name "data-name" to variable topic
    var topic = $(this).attr("data-name");

    // Giphy URL + string from array + the api key
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=dc6zaTOxFJmzC&limit=10&rating";
   
    // Creating an AJAX call for the specific animal button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      // 
      $("#gifs-appear-here").html(JSON.stringify(response.data));
        renderButtons();
      });
  // end of diplayTopicInfo function
  }



  
  // Function for displaying animal data
  function renderButtons() {

    // Deleting the buttons prior to adding new topics
    // (this is necessary otherwise you will have repeat buttons)
    $("#topics-view").empty();

    // Iterating through the entire length array of topics/animals
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each topic in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of topic to our button
      a.addClass("topic");
      // Adding a data-attribute
      a.attr("data-name", topics[i]);
      // Providing the initial button text
      a.text(topics[i]);
      // Adding the button to the topic-view div
      $("#topics-view").append(a);
    }
  }

  


  // This function handles events where one button is clicked
  $("#add-topic").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line grabs the input from the inputbox
    // $.val() Get the current value of the first element in the set of matched elements or set the value of every matched element.
    // $.trim() function removes all newlines, spaces (including non-breaking spaces), and tabs from the beginning and end of the supplied string. If these whitespace characters occur in the middle of the string, they are preserved.
    var topic = $("#topic-input").val().trim();

    // Adding the animal from the textbox to our array
    topics.push(topic);
    // console.log(topics);

    // Calling renderButtons which handles the processing of our topics array
    renderButtons();
  })



  // Function for displaying the topic info
  // Using $(document).on instead of $(".topic").on to add event listenersto dynamically generated elements
  $(document).on("click", ".topic", displayTopicInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();


  $("#gifs-appear-here").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
  
  })

});