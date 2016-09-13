let total = 0;
const numbers = process.argv;

for (let i = 2; i < numbers.length; i++) {
  total += parseInt(numbers[i]);
}

console.log(total);
