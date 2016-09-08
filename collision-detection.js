"use strict"

module.exports.isCollision = function(moveTo) {
  var collisionExists = false;
  var posToCheck = {
    x: moveTo.axis === 'x' ? moveTo.newLoc : this.location.x,
    y: moveTo.axis === 'y' ? moveTo.newLoc : this.location.y
  };

  for (let i=0; i < this.world.obstacles.length; i++) {
    if (this.world.obstacles[i].x === posToCheck.x && this.world.obstacles[i].y === posToCheck.y) {
      collisionExists = true;
      break;
    }
  }

  return collisionExists;
};