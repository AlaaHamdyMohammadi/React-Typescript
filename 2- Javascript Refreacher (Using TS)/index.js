var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (prevValue, currValue) { return prevValue + currValue; }, 0);
console.log(sum);
