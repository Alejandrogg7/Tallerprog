import '../styles/index.scss';

import 'bootstrap';

function calculate() {
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    const result = numberOne + numberTwo;
    alert(result);
}

console.log('webpack starterkit');