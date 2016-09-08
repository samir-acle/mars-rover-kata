"use strict"

var World = function(grid, obstacles) {
  this.grid = {x: grid[0], y: grid[1]};
  this.obstacles = obstacles.map(function(loc) {
    return {x: loc[0], y: loc[1]}
  });
}

module.exports = World;