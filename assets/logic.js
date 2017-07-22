// The ready event occurs when the DOM (document object model) has been loaded.
$(document).ready(function() {

  // =========================
  // SETUP VARIABLES
  // =========================
  // Topics variable array of animals to send to api
  var topics = [
    "dog",
    "cat",
    "rabbit",
    "hamster",
    "skunk",
    "goldfish",
    "bird",
    "ferret",
    "turtle",
    "hedgehog",
    "pig"
    ];


  // =========================
  // FUNCTIONS
  // =========================
  // Function for dumping JSON content for each button into the div and displaying gifs when clicked.
  function gifsClick() {

    // Setting attribute with name "data-name" to variable topics
    var topics = $(this).attr("data-name");

    // Giphy URL + string from array + the api key
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      topics + "&api_key=fd2fb59bff984e64bc8bc3fe62b0ca18&limit=10&rating";
   
    // Creating an AJAX (asynchronous HTTP request) calls the giphy API for the specific animal button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      // Server sends data back to browser, browser returns data using JavaScript.
      // For each index in topics array, set an animalDIV, p element, and a animal image div. For the animal image, set the src to the data response from the server for each animal and give the images a fixed height.
      //Append: Insert content, specified by the parameter, to the end of each element in the set of matched elements. In this case, append the p element and animalImage to the animalDiv. Then, insert this content to the desired HTML div for the gifs to appear, thus #gifs-appear-here. 
      for (var i = 0; i < response.data.length; i++) {
        var animalDiv = $('<div>');
        var p = $('<p>').text("Rating: "+response.data[i].rating);
        var animalImage = $('<img>');
        animalImage.attr('src',response.data[i].images.fixed_height_still.url);
        animalDiv.append(animalImage);
        animalDiv.append(p);
        $("#gifs-appear-here").prepend(animalDiv);
        // $("#gifs-appear-here").html(JSON.stringify(response.data));
        // renderButtons();
      }
    })
  // end of gifsClick function
  }
  // I would probably create a function called renderImages() and pass the ajax response to it for the work being done at lines 46-57

  
  // Gif image click function to switch between still and animate states.
  $("<img>").on("click", function(gifsClick) {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } 
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    })
  


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



  // Function for displaying new animal data
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

  
  // Function for displaying the topic info
  // Using $(document).on instead of $(".topic").on to add event listenersto dynamically generated elements
  $(document).on("click", ".topic", gifsClick);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();

});

// I would probably create a function called renderImages() and pass the ajax response to it for the work being done at lines 46-57