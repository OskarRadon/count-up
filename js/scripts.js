var countUp = function(input, multiple) {
  var nums = [];
  for (var i = 1; i <= input; i++) {
    if ((i % multiple) === 0) { // if a number modulo multiple = 0
    nums.push(i);
    };
  };
  
  return nums;
};
