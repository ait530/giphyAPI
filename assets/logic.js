// The ready event occurs after the DOM (document object model) has been loaded.
$(document).ready(function() {
  // =========================
  // SETUP VARIABLES
  // =========================
  // Initial topics variable array of animals to send to api
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
  instructions();
  // =========================
  // FUNCTIONS
  // =========================
  // Outputs user instructions
  function instructions() {
    $("#instructions").append("<h2>Click an animal button.</h2>");
  } 
  // Hides instructions after a button is clicked. 
  function hideInstructions() {
    $("#instructions").hide("<h2>Click a button.</h2>");
  }

  // shows clickGifsPrompt
  function clickGifsPrompt() {
    $("#topics-view").append("<h2>Click an animal gif to alter its state!</h2>");
  }
 
  // Function for dumping JSON content for each button into the div and displaying gifs when clicked.
  function gifsClick() {
    hideInstructions();
    clickGifsPrompt;
   
    
    // Setting attribute with name "data-name" to variable topics
    var topics = $(this).attr("data-name");
    // Giphy URL + string from array + the api key
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      topics + "&api_key=fd2fb59bff984e64bc8bc3fe62b0ca18&limit=10&rating";

    // Creating an AJAX (asynchronous HTTP request) calls the giphy API for the specific animal topic button being clicked
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
        
        animalImage.attr('src',response.data[i].images.fixed_height.url);
        animalDiv.append(animalImage);
        animalDiv.append(p);
        $("#gifs-appear-here").prepend(animalDiv);

      }

      

      // Changes animate active state to static
      $(animalImage).on("click", function(gifsClick) {
        console.log('You clicked me!');
        for (var i = 0; i < response.data.length; i++) {
            var animalDiv = $('<div>');
            var p = $('<p>').text("Rating: "+response.data[i].rating);
            var animalImage = $('<img>');
            animalImage.attr('src',response.data[i].images.fixed_height_still.url);
            animalDiv.append(animalImage);
            animalDiv.append(p);
            $("#gifs-appear-here").prepend(animalDiv);
        }
        // $(this).attr("data", "fixed_height_still");
         
        // else {
        //   $(this).attr("src", $(this).attr("fixed_height_still.url"));
        //   $(this).attr("data", "fixed_height.url");
        // }
      })
    })
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


    if (topic.length !== 0 && topic.length !==1 && topic.length !==2) {
      // Adding the input from the textbox to our array
      topics.push(topic);
      // console.log(topics);
    } 
    else {
      console.log('error, no topic/string inputted');
    }
    
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

  function deleteGifs() {
    $("delete-topic").on("click", function(gifsClick) {
      $("#gifs-appear-here").empty();

    })
  }

  // Function for displaying the topic info
  // Using $(document).on instead of $(".topic").on to add event listenersto dynamically generated elements
  $(document).on("click", ".topic", gifsClick);
  // Calling the renderButtons function to display the intial buttons
  renderButtons();
});

