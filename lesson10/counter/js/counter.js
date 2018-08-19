'use strict';
if (localStorage.personalСounter == undefined){
    localStorage.personalСounter = 0;
}
document.getElementById('counter').innerText = localStorage.personalСounter;

document.getElementById('increment').addEventListener('click',()=>{
    document.getElementById('counter').innerText = ++localStorage.personalСounter;
});

document.getElementById('decrement').addEventListener('click',()=>{
    document.getElementById('counter').innerText = --localStorage.personalСounter;
});

document.getElementById('reset').addEventListener('click',()=>{
    localStorage.personalСounter = 0;
    document.getElementById('counter').innerText = localStorage.personalСounter;
});

