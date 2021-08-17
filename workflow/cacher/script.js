const calcBtn = document.querySelector('.calc-btn');
const result = document.getElementsByClassName('result')[0];
const input = document.getElementsByClassName('input-value');
const chb = document.getElementById('cacher-chb');

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fiBSlow(n) {
  return n <= 1 ? n : fiBSlow(n - 1) + fiBSlow(n - 2);
}

function stopwatch(func, val, calcType) {
  const start = new Date().getTime();
  const result = func(val);
  const end = new Date().getTime();

  return calcType + ' ' + `${end - start}ms.`+ ' ' + `Value: ${result}`;
}

calcBtn.addEventListener('click', function() {
  const inputVal = input[0].value;

  let resultVal = null;
  let calcType = '';

  const value = Number(inputVal);

  if(chb.checked) {
    fib = Cacher.withCache(fib);

    resultVal = stopwatch(fib, value, 'With cache:');
  } else {
    resultVal = stopwatch(fiBSlow, value, 'No cache:');
  }

  result.innerHTML = resultVal;
}) 



class Cacher {
  // constructor() {}

  static withCache(func) {
    let cache = new Map();
  
    return function(...args) {
      let key = Cacher.hash(args);
      if (cache.has(key)) {  
        return cache.get(key);
      }
  
      let result = func.apply(this, args);
  
      cache.set(key, result); 
      return result;
    };
  }

  static hash(args) {
    return [].join.call(args);
  }
}


/*-------------- Func-s with few arg-s ---------------*/
// function fibPow(n, ...args) {
//   return n <= 1 ? n : (fibPow(n - 1, args) + fibPow(n - 2,  args)) * args.reduce((current) => Math.pow(current, current));
// }

// function fibPowSlow(n, ...args) {
//   return n <= 1 ? n : (fib(n - 1, args) + fib(n - 2, args)) * args.reduce((current) => Math.pow(current, current));
// }

// let slow = fibPowSlow(40, 10);
// console.log('Slow not fib: ', slow);

// fibPow = Cacher.withCache(fibPow);
// let notSlow = fibPow(40, 10);
// console.log('Not slow not fib: ', notSlow);

