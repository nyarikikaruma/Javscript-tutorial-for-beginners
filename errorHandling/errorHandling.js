let x = 5;
// try {
//   x = y + 1;   // y cannot be used (referenced)
// }
// catch(err) {
//   console.log(err);
//   document.getElementById("demo").innerHTML = err.name;
// }

// throwing custom errors
class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'MyCustomError';
    }
  }

  try {
    x = sum + 1;
  } catch (err) {
    console.log('Our thrown error!. ', err);
    if (err instanceof MyCustomError) {
      console.error(err.message); // Handle the custom error
    } else {
      throw err; // Rethrow other errors
    }
  }