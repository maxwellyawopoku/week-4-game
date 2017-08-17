
$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var counter = 0;


  var targetNumber = (Math.floor(Math.random() * 100));
    // We begin by expanding our array to include four options.
  var crys1 =0
  var crys2 = 0;
  var crys3 = 0;
  var crys4 = 0;

   $("#number-to-guess").text(targetNumber);

  startGame()

  var images = ['assets/images/crystal1.jpg', 'assets/images/crystal2.jpg', 'assets/images/crystal3.jpg', 'assets/images/crystal4.jpg'];

  function startGame(){
  counter = 0;

  targetNumber = (Math.floor(Math.random() * 100));
    // We begin by expanding our array to include four options.
  crys1 = (Math.floor(Math.random() * 10) +1);
  crys2 = (Math.floor(Math.random() * 10) +1);
  crys3 = (Math.floor(Math.random() * 10) +1);
  crys4 = (Math.floor(Math.random() * 10) +1);

   $("#count").html(counter);

   $("#number-to-guess").text(targetNumber);

  }

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  



  var numberOptions = [crys1, crys2, crys3, crys4];


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", images[i]);


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#count").html(counter);


    
    if (counter === targetNumber) {

      wins++;
     $("#wins").html(wins);
     console.log(wins);
     startGame();
    }

    else if (counter >= targetNumber) {
       losses++;
     $("#losses").html(losses);
     console.log(losses);
     startGame();

    }

  });


});

