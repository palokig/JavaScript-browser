let inputElements = document.querySelectorAll('.list-block input');
let casesMade = 0 ;

function showLabel() {
    console.log(event.target.checked);
    if (event.target.checked) {
        ++casesMade;
    } else {
        --casesMade;
    }
    if (casesMade == inputElements.length) {
        document.getElementsByClassName('list-block')[0].classList.add('complete');
    } else{
        document.getElementsByClassName('list-block')[0].classList.remove('complete');

    }
    outputElement.value = textCasesOutput();
}

for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].checked) {
        ++casesMade;
    }
    inputElements[i].addEventListener('change', showLabel);
}

function textCasesOutput() {
    return `${casesMade} из ${inputElements.length}`;
}

let outputElement = document.querySelector('.list-block output');

outputElement.value = textCasesOutput();