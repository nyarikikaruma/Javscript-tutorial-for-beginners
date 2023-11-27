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