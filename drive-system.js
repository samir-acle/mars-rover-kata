const NAVIGATION = {
  E: {direc: 1, axis: 'x'},
  W: {direc: -1, axis: 'x'},
  N: {direc: -1, axis: 'y'},
  S: {direc: 1, axis: 'y'}
};

const COMPASS = ['N', 'E', 'S', 'W'];

function moveForOrBack(direction) {
  var fOrB = direction === 'f' ? 1 : -1;
  var navInfo = NAVIGATION[this.facing];
  this.location[navInfo.axis] += navInfo.direc * fOrB;
}


function turnLeftOrRight(direction) {
  var lOrR = direction === 'r' ? 1 : -1;
  var newPos = COMPASS.indexOf(this.facing) + lOrR;
  newPos = newPos > 3 ? 0 : (newPos < 0 ? 3 : newPos);
  this.facing = COMPASS[newPos];
}

module.exports.move = function(direction) {
  if (direction === 'f' || direction === 'b') {
    moveForOrBack.call(this, direction);
  } else if (direction === 'l' || direction === 'r') {
    turnLeftOrRight.call(this, direction);
  }
};