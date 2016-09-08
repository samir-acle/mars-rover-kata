# Mars Rover Code Kata

## Tasks
* Develop an api that moves a rover around on a grid.
* You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
* The rover receives a character array of commands.
* Implement commands that move the rover forward/backward (f,b).
* Implement commands that turn the rover left/right (l,r).
* Implement wrapping from one edge of the grid to another. (planets are spheres after all)
* Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.

## Implementation
I wanted to use a modular approach to solving this problem and decided to use Node.js to implement my solution. I used ES6 features where I thought they were applicable. I followed a TDD approach to solving this problem using Mocha and Chai Assertions. Tests were ran after every js file change by gulp. 

## Next Steps
* make the driveSystem and collistionDetection customizable
* expand on the world and add AI controlled rovers that move around the planet
