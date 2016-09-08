"use strict"

const driveSystem = require('./drive-system');
const collisionDetection = require('./collision-detection');
const World = require('./world');
const mars = new World([10,10], [[5,5], [6,7]]);

var Rover = function(initLoc = [1,1], initDirection = 'S', world = mars) {
  this.location = {x: initLoc[0], y: initLoc[1]};
  this.facing = initDirection;
  this.move = driveSystem.move.bind(this);
  this.isCollision = collisionDetection.isCollision.bind(this);
  this.world = world;
};

Rover.prototype.currentLocation = function() {
  return [this.location.x, this.location.y];
};

Rover.prototype.giveCommands = function(commands) {
  this.commands = commands;
  executeCommands.call(this);
};

function executeCommands() {
  for (let i=0; i < this.commands.length; i++) {
    let moveTo = this.move(this.commands[i]);
    if (moveTo.newFacing) {
      updateFacing.call(this, moveTo.newFacing);
    } else if (this.isCollision(moveTo)) {
      break;
    } else {
      updateLocation.call(this, moveTo);
    }
  }
};

function updateFacing(newFacing) {
  this.facing = newFacing;
};

function updateLocation(moveTo) {
  this.location[moveTo.axis] = moveTo.newLoc;
};

module.exports = Rover;
