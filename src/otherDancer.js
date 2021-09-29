var OtherDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('otherDancer');
};

OtherDancer.prototype = Object.create(Dancer.prototype);
OtherDancer.prototype.constructor = OtherDancer;

OtherDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

    this.$node.fadeOut();
    this.$node.fadeIn();

};
// OtherDancer.prototype.lineUp = function() {


// };