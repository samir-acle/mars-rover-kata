var chai = require('chai');
var assert = chai.assert;
var Rover = require('../rover');

describe('mars rover', function() {
  describe('initialization of rover', function() {
    var testRover;

    before(function() {
      testRover = new Rover('testlocation', 'testdirection');
    })

    it('should set the initial location', function() {
      assert.equal(testRover.location, 'testlocation');
    });

    it('should set the direction', function() {
      assert.equal(testRover.direction, 'testdirection');
    });
  });

  describe('giveCommands', function() {
    it('should take character array and set commands', function() {
      var testRover = new Rover('testlocation', 'testdirection');
      var testCommands = ['a','d','d','s'];
      testRover.giveCommands(testCommands);
      assert.equal(testRover.commands, testCommands);
    });
  });

  describe('rover movement', function() {
    describe('command given is f', function() {
      it('should increase x location by 1 when facing E', function() {

      });

      it('should decrease x location by 1 when facing W', function() {

      });

      it('should increase y location by 1 when facing S', function() {

      });

      it('should decrease y location by 1 when facing N', function() {

      })
    });

    describe('command given is b', function() {
      it('should decrease x location by 1 when facing E', function() {

      });

      it('should increase x location by 1 when facing W', function() {

      });

      it('should decrease y location by 1 when facing S', function() {

      });

      it('should increase y location by 1 when facing N', function() {

      })
    });
  });
});