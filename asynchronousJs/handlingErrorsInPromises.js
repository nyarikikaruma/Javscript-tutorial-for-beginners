function getUserById(id) {
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin'
        });
    });
}


// change our function to throw an error.
function getUserById(id) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid id argument');
    }

    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin'
        });
    });
}

// try handling the promise by using both then() and catch() methods.
// getUserById('a')
//     .then(user => console.log(user.username))
//     .catch(err => console.log(err));


// When you raise an exception outside the promise, you must catch it with try/cath method.

try {
    getUserById('a')
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${err}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}