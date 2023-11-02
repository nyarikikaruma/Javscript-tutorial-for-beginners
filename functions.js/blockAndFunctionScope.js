var globalVariable = 'I am a global variable';

function printVariable() {
    const localVariable = 'I am local variable';
    console.log(globalVariable);
}

{
    var localGlobalVariable = 'I am a confused variable';
}
console.log(localGlobalVariable)
printVariable();
