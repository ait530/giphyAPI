// The ready event occurs when the DOM (document object model) has been loaded.

$( document ).ready(function(){


// =========================
// SETUP VARIABLES
// =========================


// Array of animals
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


  // Depends on how the function is called
  $(this).attr("data-topic");


  // API request to giphy API
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=dc6zaTOxFJmzC&limit=10&rating";

  // Tells AJAX to collect info from giphy URL. .done() runs after the request has been made.
  $.ajax({url:queryURL,
      method: "GET"
    }).done(function(response){
      console.log(response);
    });

});






 // Function for dumping the JSON content for each button into the div
  // function displayTopicInfo() {

  // var topic = $(this).attr("data-topic");
  // var queryURL;

    // ajax sends a call to the URL, get information from it. .done runs after the request has been made. Once the data is collected back from the server, it's going to run this. 
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).done(function(response) 

    // {
    //   $("#topics-view").html(JSON.stringify(response));
    //   renderButtons();
    
    // });
  




    // Function for displaying movie data
    // function renderButtons() {

      // Deleting the movie buttons prior to adding new movie buttons
      // (this is necessary otherwise we will have repeat buttons)
      // $("#topics-view").empty();

      // Looping through the array of movies
      // for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        // var a = $("<button>");
        // Adding a class
        // a.addClass("topic");
        // Adding a data-attribute with a value of the topic at index i
        // a.attr("data-topic", topics[i]);
        // Providing the button's text with a value of the movie at index i
        // a.text(topics[i]);
        // Adding the button to the HTML
    //     $("#topics-view").append(a);
    //   }
    // }

    // This function handles events where one button is clicked
    // $("#add-topic").on("click", function(event) {
      // event.preventDefault() prevents the form from trying to submit itself.
      // We're using a form so that the user can hit enter instead of clicking the button if they want
      // event.preventDefault();

      // This line will grab the text from the input box
      // var topic = $("#topic-input").val().trim();
      // The movie from the textbox is then added to our array
      // topics.push(topic);

      // calling renderButtons which handles the processing of our movie array
    //   renderButtons();
    // });

    
    // Function for displaying the topic info

    // Using $(document).on instead of $(".topic").on to add event listenersto dynamically generated elements
    // $(document).on("click", ".topic", displayTopicInfo);


    // Calling the renderButtons function at least once to display the initial list of movies
    // renderButtons();




    // $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    // var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
  //     if (state === "still") {
  //       $(this).attr("src", $(this).attr("data-animate"));
  //       $(this).attr("data-state", "animate");
  //     } else {
  //       $(this).attr("src", $(this).attr("data-still"));
  //       $(this).attr("data-state", "still");



  



