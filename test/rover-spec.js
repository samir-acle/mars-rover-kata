var chai = require('chai');
var assert = chai.assert;
var Rover = require('../rover');

describe('mars rover', function() {
  describe('initialization of rover', function() {
    var testRover;

    before(function() {
      testRover = new Rover([2,3], 'testdirection');
    })

    it('should set the initial location', function() {
      assert.equal(testRover.location.x, 2);
      assert.equal(testRover.location.y, 3);
    });

    it('should set the facing direction', function() {
      assert.equal(testRover.facing, 'testdirection');
    });
  });

  describe('currentLocation', function() {
    it('should return array with x and y location values', function() {
      var testRover = new Rover([2,3], 'testdirection');
      assert.deepEqual(testRover.currentLocation(), [2,3]);
    });
  });

  describe('giveCommands', function() {
    it('should take character array and set commands', function() {
      var testRover = new Rover([0,0], 'W');
      var testCommands = ['a','d','d','s'];
      testRover.giveCommands(testCommands);
      assert.equal(testRover.commands, testCommands);
    });
  });

  describe('rover movement', function() {
    describe('command given is f', function() {
      it('should increase x location by 1 when facing E', function() {
        var testRover = new Rover([1,1], 'E');
        testRover.giveCommands(['f']);
        assert.deepEqual(testRover.currentLocation(), [2,1]);
      });

      it('should decrease x location by 1 when facing W', function() {
        var testRover = new Rover([1,1], 'W');
        testRover.giveCommands(['f']);
        assert.deepEqual(testRover.currentLocation(), [0,1]);
      });

      it('should increase y location by 1 when facing S', function() {
        var testRover = new Rover([1,1], 'S');
        testRover.giveCommands(['f']);
        assert.deepEqual(testRover.currentLocation(), [1,2]);
      });

      it('should decrease y location by 1 when facing N', function() {
        var testRover = new Rover([1,1], 'N');
        testRover.giveCommands(['f']);
        assert.deepEqual(testRover.currentLocation(), [1,0]);
      })
    });

    describe('command given is b', function() {
      it('should decrease x location by 1 when facing E', function() {
        var testRover = new Rover([1,1], 'E');
        testRover.giveCommands(['b']);
        assert.deepEqual(testRover.currentLocation(), [0,1]);
      });

      it('should increase x location by 1 when facing W', function() {
        var testRover = new Rover([1,1], 'W');
        testRover.giveCommands(['b']);
        assert.deepEqual(testRover.currentLocation(), [2,1]);
      });

      it('should decrease y location by 1 when facing S', function() {
        var testRover = new Rover([1,1], 'S');
        testRover.giveCommands(['b']);
        assert.deepEqual(testRover.currentLocation(), [1,0]);
      });

      it('should increase y location by 1 when facing N', function() {
        var testRover = new Rover([1,1], 'N');
        testRover.giveCommands(['b']);
        assert.deepEqual(testRover.currentLocation(), [1,2]);
      })
    });
  });
});