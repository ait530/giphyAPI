// SETUP VARIABLES
// ===================================

// Authentication Key:(public beta key)
var authKey = "dc6zaTOxFJmzC";



// Result variables
var topics = ["dog",
              "cat",
              "rabbit",
              "hamster",
              "skunk",
              "goldfish",
              "bird",
              "ferret",
              "turtle",
              "hedgehog"
              "gerbil"
              ];





// queryURLBase
var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC" + authKey + "&q="; 

var articleCounter = 0;


// =======================================
// Functions
// 

  // AJAX Function
$.ajax({
  url: queryURL,
  method: 'GET'
}).done(function(response) {
  console.log(response);
});

// Function for displaying movie data
function renderButtons() {

// Deleting the buttons prior to adding new movies
// (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();

  // Looping through the array of movies
for (var i = 0; i < movies.length; i++) {

// Then dynamicaly generating buttons for each movie in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
var a = $("<button>");
// Adding a class of movie to our button
a.addClass("movie");
// Adding a data-attribute
a.attr("data-name", movies[i]);
// Providing the initial button text
a.text(movies[i]);
// Adding the button to the buttons-view div
$("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

    // Adding the movie from the textbox to our array
    movies.push(movie);
    console.log(movies)

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Function for displaying the movie info
  // Using $(document).on instead of $(".movie").on to add event listenersto dynamically generated elements
  $(document).on("click", ".movie", displayMovieInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();


  $(".group-of-buttons").on("click", "button", function(){

      

})

