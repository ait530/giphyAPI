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







  // // Adding click event listen listener to all buttons
  // $("topics-view").on("click", function() {
  //   // Grabbing and storing the data-animal property value from the button
  //   var topic = $(this).attr("data-name");

  //   // Constructing a queryURL using the animal name
  //   var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  //     topic + "&api_key=dc6zaTOxFJmzC&limit=10&rating";
    
    // // Performing an AJAX request with the queryURL
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //   // After data comes back from the request
    //   .done(function(response) {
    //     console.log(queryURL);

    //     console.log(response);
    //     // storing the data from the AJAX request in the results variable
    //     var topics = response.data;

    //     // Looping through each result item
    //     for (var i = 0; i < topics.length; i++) {

    //         // Creating and storing a div tag
    //         var topicDiv = $("<div>");

    //         // Creating a paragraph tag with the result item's rating
    //         var p = $("<p>").text("Rating: " + results[i].rating);

    //         // Creating and storing an image tag
    //         var animalImage = $("<img src='" + results[i].images.fixed_height.url + "'>");
    //         // Setting the src attribute of the image to a property pulled off the result item

    //         // Appending the paragraph and image tag to the animalDiv
    //         animalDiv.append(p);
    //         animalDiv.append(animalImage);

    //         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        
    //         $("#gifs-appear-here").prepend(animalDiv);
    //        }
      
    // });

        
     
  // end of doc ready function












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




    



  


























// MY OLD CODEEEEEEEE
  // // For each string animal in the topics array, starting from the beginning and repeating up to the ""th value of the array...
  // for(i=0;i <topics.length;i++)
  // {

  // // API request to the giphy API:
  // // Search for the string [i] name of array
  // // Use giphy beta key
  // // Limit up to 10 URLS
  // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  //   topics[i] + "&api_key=dc6zaTOxFJmzC&limit=10&rating";


  // // Tell AJAX to collect info from giphy URL, .done() runs after the request has been made.
  // $.ajax({url:queryURL,
  //     method: "GET"
  //   }).done(function(response){
      
  //     // Show each string object with their 10 respective URLs.
  //     console.log(response);
  //     $("#topics-view").html(JSON.stringify(response));
  //       renderButtons();
  //   });

  // };