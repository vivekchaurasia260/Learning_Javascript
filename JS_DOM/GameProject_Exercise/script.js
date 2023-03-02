// Restart the Game Button
var restart = document.querySelector("#b");

// Grabs all the squares
var squares = document.querySelectorAll("td");

// Clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

// Check the square marker

// This is one way of doing.
// We need to write this 8 more time for different id's.
// var cellOne = document.querySelector("#one");

// cellOne.addEventListener("click", function () {
//   if (cellOne.textContent === "") {
//     cellOne.textContent = "X";
//   } else if (cellOne.textContent === "X") {
//     cellOne.textContent = "O";
//   } else {
//     cellOne.textContent = "";
//   }
// });

// Another way of doing above approach :

function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

// For loop to add event listeners to all the squares

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker);
}
