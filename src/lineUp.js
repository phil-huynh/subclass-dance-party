var LineUp = function {
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].lineUp();
    setTimeout(this.step.bind(window.dancers[i], 5000));

  }
};