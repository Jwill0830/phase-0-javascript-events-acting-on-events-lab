let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  // Get the current "left" position of the dodger element
  let left = dodger.style.left.replace("px", "");
  let leftInteger = parseInt(left, 10);

  // Move the dodger to the left
  if (leftInteger > 0) {
    dodger.style.left = `${leftInteger - 1}px`;
  }
}

function moveDodgerRight() {
  // Get the current "left" position of the dodger element
  let left = dodger.style.left.replace("px", "");
  let leftInteger = parseInt(left, 10);

  // Move the dodger to the right
  if (leftInteger < 360) {
    dodger.style.left = `${leftInteger + 1}px`;
  }
}
