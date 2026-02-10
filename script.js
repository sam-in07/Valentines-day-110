// script.js

// Function to handle button click events
function selectOption(option) {
  // Check which option was clicked
  if (option === "yes") {
    // Flash rainbow colors
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Hide the question
      displayCatHeart();
    });
  } 
  else if (option === "no") {
    
    document.getElementById("no-button").innerText = "You sure?";
    // Increase "Yes" button
    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
    yesButton.style.fontSize = newSize + "px";
  } 
  else {
    // an alert message
    alert("Invalid option!");
  }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
  var colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  var i = 0;
  var interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200); // Change color every 200 milliseconds
  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = ""; 
    if (callback) {
      callback();
    }
  }, 2000); 
}

// Function to display the cat.gif initially
function displayCat() {
  
  var imageContainer = document.getElementById("image-container");
  
  var catImage = new Image();
  
  catImage.src = "assets/cat.gif"; // Assuming the cat image is named "cat.gif"
  
  catImage.alt = "Cat";
  
  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
  
  document.getElementById("image-container").innerHTML = "";
 
  var imageContainer = document.getElementById("image-container");
  
  var catHeartImage = new Image();
  
  catHeartImage.src = "assets/cat-heart.gif"; 
  
  catHeartImage.alt = "Cat Heart";
  
  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);
    
    // Add caption under the cat-heart image
    var caption = document.createElement('div');
    caption.id = 'image-caption';
    caption.innerText = 'I knew it !!!!!';
    imageContainer.appendChild(caption);
    
    document.getElementById("options").style.display = "none";
  };
}


displayCat();
