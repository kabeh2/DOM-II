///////////////////////////////////////
/////////////// Change Order of Blocks

// 1. Grab all the blocks
const block = document.querySelectorAll(".block");

// 2. Initialize blockOrder
let blockOrder = 0;

// 3. Iterate through blocks and change the Order
block.forEach((el, i) => {
  block[i].addEventListener("click", e => {
    // Lower the order of block every click
    blockOrder -= 1;

    // Change the order of the iterated block
    // Remember lowest order # is the top block
    block[i].style.order = `${blockOrder}`;
  });
});

///////////////////////////////////////
/////////////// Block Move to Right

// 1. Initialize each blocks xIndex to 0

let xIndex = {
  "block--red": 0,
  "block--blue": 0,
  "block--green": 0,
  "block--pink": 0,
  "block--gray": 0
};

let interval, onX;

// 2. Iterate through blocks and add Event Listener

block.forEach((el, i) => {
  block[i].addEventListener("mousedown", () => {
    onX = block[i].classList[1];

    // Set interval on Window
    interval = window.setInterval(() => {
      // For each class in xIndex, add 1 when mousedown
      xIndex[onX]++;
      console.log(xIndex);

      // As mousedown, animate by changing x-index of block
      // Use GSAP TweenMax.to
      TweenMax.to(`.${onX}`, 0.5, {
        x: xIndex[onX]
      });

      // Test interval
      console.log("P.O.P...HOLD IT DOOOOOWN!!!");
    }, 10);
  });

  // Clear the interval on the window when mouseup
  // By using event listener
  window.addEventListener("mouseup", () => {
    window.clearInterval(interval);
    console.log("NM IM GOOD FAM!");
  });
});
