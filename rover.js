"use strict"

var driveSystem = require('./drive-system');

var Rover = function(initLoc, initDirection) {
  this.location = {x: initLoc[0], y: initLoc[1]};
  this.facing = initDirection;
  this.move = driveSystem.move.bind(this);
};

Rover.prototype.currentLocation = function() {
  return [this.location.x, this.location.y];
};

Rover.prototype.giveCommands = function(commands) {
  this.commands = commands;
  this.executeCommands();
};

Rover.prototype.executeCommands = function() {
  for (let i=0; i < this.commands.length; i++) {
    this.move(this.commands.shift());
  }
};

module.exports = Rover;
