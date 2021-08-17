const calcBtn = document.querySelector('.calc-btn');
const result = document.getElementsByClassName('result')[0];
const input = document.getElementsByClassName('input-value');
const chb = document.getElementById('cacher-chb');

function rFact(num)
{
    if (num === 0 || num === 1) { 
        return 1; 
    }
    else { 
        return num * rFact(num - 1); 
    }
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fibPow(n, ...args) {
  return n <= 1 ? n : (fib(n - 1) + fib(n - 2)) * args.reduce((current) => Math.pow(current, current));
}

// function fi(...theArgs) {
//   return theArgs.reduce((current) => {
//     return Math.pow(current, current);
//   });
// }

calcBtn.addEventListener('click', function() {
  result.innerHTML = '-';

  const inputVal = input[0].value;
  // let inputArr = [];

  // if(inputVal.search(/\;|\,|\ /) !== -1) {
  //   inputArr = inputVal.split(/\;|\,|\ /).map(num => +num);
  // }

  // console.log(inputArr);

  const value = Number(inputVal);

  let resultVal = null;

  if(chb.checked) {
    const fibCache = Cacher.withCache(fib);
    console.log(fibCache);

    resultVal = fibCache(value);
  } else {
    resultVal = fib(value);
    console.log(fib);
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

// const fiSlow = fib(40);
// console.log(fiSlow);

// fib = Cacher.withCache(fib);

// const fi = fib(100);
// console.log(fi);


// const slow = fibPow(40, 10);
// console.log('Slow not fib: ', slow);

// fibPow = Cacher.withCache(fibPow);
// const notSlow = fibPow(40, 10);
// console.log('Not slow not fib: ', notSlow);
