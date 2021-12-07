const colors = require('colors');

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function getSimpleNumbers(from, to) {
  const availableColors = ['red', 'yellow', 'green'];
  const numbers = [];
  if (isNaN(+from) || isNaN(+to)) {
    console.log(colors.red('введите числа'));
    return;
  }
  while (from < to) {
    isPrime(from) && numbers.push(from);

    from++;
  }

  !!numbers.length
    ? numbers.forEach((number, index) =>
        console.log(colors[availableColors[index % 3]](number))
      )
    : console.log(colors.red('нет чисел в диапазоне'));
}

getSimpleNumbers(9, '10');
