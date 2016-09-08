"use strict"

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
  var updatedLoc = this.location[navInfo.axis] + navInfo.direc * fOrB;
  var newLoc = wrapIfOffGrid.call(this, updatedLoc, navInfo.axis);
  return {newLoc: newLoc, axis: navInfo.axis};
}

function turnLeftOrRight(direction) {
  var lOrR = direction === 'r' ? 1 : -1;
  var newPos = COMPASS.indexOf(this.facing) + lOrR;
  newPos = newPos > 3 ? 0 : (newPos < 0 ? 3 : newPos);
  return {newFacing: COMPASS[newPos]};
}

function wrapIfOffGrid(loc, axis) {
  if (loc > this.world.grid[axis]) {
    return 1;
  } else if (loc < 1) {
    return this.world.grid[axis];
  } else {
    return loc;
  }
}

module.exports.move = function(direction) {
  if (direction === 'f' || direction === 'b') {
    return moveForOrBack.call(this, direction);
  } else if (direction === 'l' || direction === 'r') {
    return turnLeftOrRight.call(this, direction);
  } else {
    return {};
  }
};