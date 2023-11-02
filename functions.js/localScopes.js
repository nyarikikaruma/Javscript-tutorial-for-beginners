var globalVariable = 'I am a global variable';

function printVariable() {
    const localVariable = 'I am local variable';
    console.log(globalVariable);
}

printVariable();
