// worker.js
/* eslint-disable no-restricted-globals */
self.onmessage = function (e) {
    const result = computeHeavyTask(e.data);
    self.postMessage(result);
  };
  
  function computeHeavyTask(data) {
    // Example heavy computation
    let primeCount = 0;
    for (let i = 2; i <= data; i++) {
      if (isPrime(i)) primeCount++;
    }
    return primeCount;
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }