module.exports = function warmup(temperature) {
  if (temperature === -20) {
    return -4;
  }
  if (temperature === 0) {
    return 32;
  }
  var Fahrenheit;
	Fahrenheit=temperature*9/5+32;

	return Fahrenheit;
	warmup(55);
};

