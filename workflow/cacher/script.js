const calcBtn = document.querySelector('.calc-btn');
const result = document.getElementsByClassName('result')[0];
const input = document.getElementsByClassName('input-value');
const chb = document.getElementById('cacher-chb');

function fib(n, func) {
    return n <= 1 ? n : func(n - 1, func) + func(n - 2, func);
}

function stopwatch(func, val, calcType) {
  const start = new Date().getTime();
  const result = func(val, func);
  const end = new Date().getTime();

  return calcType + ' ' + `${end - start}ms.`+ ' ' + `Value: ${result}`;
}

calcBtn.addEventListener('click', function() {
  const inputVal = input[0].value;
  const value = Number(inputVal);

  let resultVal = null;

  if(chb.checked) {
    resultVal = stopwatch(fibCache, value, 'With cache:');
  } else {
    resultVal = stopwatch(fib, value, 'No cache:');
  }

  result.innerHTML = resultVal;
}) 


class Cacher {
  static withCache(func) {
    const cache = new Map();
  
    return function(...args) {
      const key = Cacher.hash(args);
      if (cache.has(key)) {  
        return cache.get(key);
      }
  
      const result = func.apply(this, args);
  
      cache.set(key, result); 
      return result;
    };
  }

  static hash(args) {
    return [].join.call(args);
  }
}

const fibCache = Cacher.withCache(fib);