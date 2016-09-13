var total = 0;
var numbers = process.argv;

// console.log(numbers);

for (var i = 2; i < numbers.length; i++) {
  total += parseInt(numbers[i]);
}

console.log(total);
