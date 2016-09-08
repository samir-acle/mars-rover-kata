var Rover = function(initLoc, initDirection) {
  this.location = initLoc;
  this.direction = initDirection;
};

Rover.prototype.giveCommands = function(commands) {
  this.commands = commands;
}

module.exports = Rover;
