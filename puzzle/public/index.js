var rows = 5;
var columns = 5;
var currTile;
var otherTile;
var successful = false;

var expectedArr = [
  "/assets/1.jpg",
  "/assets/6.jpg",
  "/assets/11.jpg",
  "/assets/16.jpg",
  "/assets/21.jpg",
  "/assets/2.jpg",
  "/assets/7.jpg",
  "/assets/12.jpg",
  "/assets/17.jpg",
  "/assets/22.jpg",
  "/assets/3.jpg",
  "/assets/8.jpg",
  "/assets/13.jpg",
  "/assets/18.jpg",
  "/assets/23.jpg",
  "/assets/4.jpg",
  "/assets/9.jpg",
  "/assets/14.jpg",
  "/assets/19.jpg",
  "/assets/24.jpg",
  "/assets/5.jpg",
  "/assets/10.jpg",
  "/assets/15.jpg",
  "/assets/20.jpg",
  "/assets/25.jpg",
];

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //<img>
      let tile = document.createElement("img");
      tile.src = "./assets/blank.jpg";

      // Dragging
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("container").append(tile);
    }
  }

  // Pieces
  let pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./assets/" + pieces[i] + ".jpg";

    // Dragging
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    document.getElementById("pieces").append(tile);
  }

  checkForCompletion();
};

//DRAG TILES
function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherTile = this;
  // Mark that a successful drag and drop occurred
  successfulDragDrop = true;
}

function dragEnd() {
  if (currTile.src.includes("blank")) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  if (document.getElementById("container").getElementsByTagName("img")[24].src.includes("25.jpg")) {
    successful = matchOrder();
  }
  if (successful) {
    showCongratulations();
    console.log("Congratulations!");
  } else {
    console.log("Not yet");
  }
}

function matchOrder() {
  let puzzArr = [];
  let orgArr = [];

  for (let i = 0; i < 25; i++) {
    let item = document.getElementById("container").getElementsByTagName("img")[i].src;
    puzzArr.push(item);
  }
  console.log(puzzArr);

  for (let i = 0; i < 25; i++) {
    let item = "http://localhost:3000" + expectedArr[i];
    orgArr.push(item);
    console.log(orgArr);
    if (orgArr[i] !== puzzArr[i]) {
      console.log("Not completed");
      return false;
    }
  }
  console.log("Completed");
  return true;
}

function showCongratulations() {
  // Hide the puzzle container and the pieces container
  document.getElementById("container").style.display = "none";
  document.getElementById("pieces").style.display = "none";

  // Show the final message
  document.querySelector(".final").style.display = "block";
}
