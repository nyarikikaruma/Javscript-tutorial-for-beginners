function outerFunction() {

    // This is a closure.
    function print() {
        console.log('I am printing user names.');
    }
    print()
}

outerFunction();