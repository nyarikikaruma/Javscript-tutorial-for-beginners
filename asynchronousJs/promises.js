const operationSuccess = true

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    if (operationSuccess) {
      resolve('Operation successful');
    } else {
      reject(new Error('Operation failed'));
    }
  });

//   consuming promises
myPromise.then(result => {
    console.log('Promise fulfilled:', result);
  }).catch(error => {
    console.error('Promise rejected:', error);
  });

  // chaining promises

  // Lets create a promise which resolves to 10 after 3 seconds
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});


// Then we invoke then() method of the promise
p.then((result) => {
  console.log(result);
  return result * 2;
});


p.then((result) => {
  console.log(result);
  return result * 2;
}).then((result) => {
  console.log(result);
  return result * 3;
}).then((result) => {
  console.log(result);
  return result * 3;
}).then((result) => {
  console.log(result);
  return result * 3;
}).then((result) => {
  console.log(result);
  return result * 3;
});
