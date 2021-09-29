var StretchyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('stretchyDancer');
};

StretchyDancer.prototype = Object.create(Dancer.prototype);
StretchyDancer.prototype.constructor = StretchyDancer;

StretchyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomSize = function() {
    return (Math.random() * 100).toString() + 'px';
  };

  var colors = ['black', 'yellow', 'blue', 'white', 'green', 'purple', 'lime', 'cyan', 'gray', 'greenyellow', 'aqua', 'antique white', 'dark cyan', 'gold', 'mediumslateblue', ];

  var randomColor = function() {
    var index = Math.floor(Math.random() * 14);
    return colors[index];
  };

  this.$node.css('width', randomSize());
  this.$node.css('height', randomSize());
  this.$node.css('background-color', randomColor());

};



