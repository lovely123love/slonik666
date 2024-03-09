// Function to generate a random hex color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change the background color
  function changeBackgroundColor() {
    // Get the body element
    var body = document.body;
  
    // Generate a random color
    var randomColor = getRandomColor();
  
    // Change the background color
    body.style.backgroundColor = randomColor;
  }
  
  // Create a button element
  var button = document.createElement("button");
  button.textContent = "Change Color";
  button.onclick = changeBackgroundColor;
  
  // Append the button to the body of the document
  document.body.appendChild(button);
  