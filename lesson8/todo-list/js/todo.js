var ee;
var rr;
function cancelExecution(event) {
    rr = event.currentTarget;
    event.currentTarget.checked = false;
    document.querySelector('.undone').appendChild(event.currentTarget.parentElement);
    event.currentTarget.onclick = taskDone;
}
doneSelectorAll = document.querySelectorAll('.done label input');
Array.from(doneSelectorAll).forEach(item => item.onclick = cancelExecution);

function taskDone(event){
    rr = event.currentTarget;
    event.currentTarget.checked = true;
    document.querySelector('.done').appendChild(event.currentTarget.parentElement);
    event.currentTarget.onclick = cancelExecution;
}
undoneSelectorAll = document.querySelectorAll('.undone label input');
Array.from(undoneSelectorAll).forEach(item => item.onclick = taskDone);