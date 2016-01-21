var nums = [];

var countUp = function(countTo, multiple) {
  for (var i = 1; i <= countTo; i++) {
    if ((i % multiple) === 0) { // if a number modulo multiple = 0
    nums.push(i);
    };
  };

  return nums;
};

$(function(){
  $("form#numbers").submit(function(event){
    var countTo = parseInt($("input#num1").val());
    var multiple = parseInt($("input#num2").val());

    countUp(countTo, multiple);
    // var resultString = nums.join(", ");
    $("div#result").append(nums.join(", "));

    event.preventDefault();
  });
});
