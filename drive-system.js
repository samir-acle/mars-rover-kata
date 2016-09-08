const NAVIGATION = {
  E: {direc: 1, axis: 'x'},
  W: {direc: -1, axis: 'x'},
  N: {direc: -1, axis: 'y'},
  S: {direc: 1, axis: 'y'}
};

module.exports.move = function(direction) {
  var fOrB = direction === 'f' ? 1 : -1;
  var navInfo = NAVIGATION[this.facing];
  this.location[navInfo.axis] += navInfo.direc * fOrB;
};