const timeEl = document.querySelector('.time');
const dayEl = document.querySelector('.day');
const startbtn = document.getElementById('start')
const stopbtn  = document.getElementById('stop')
const resetbtn = document.getElementById('reset')


let seconds = 86396;
let day = 0;
let interval = null;

startbtn.addEventListener('click',start);
stopbtn.addEventListener('click',stop);
resetbtn.addEventListener('click',reset);


function timer(){
    
    seconds++;

    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds - (hrs*3600))/60);
    let sec = Math.floor(seconds % 60);
    
    
    if(hrs < 10) hrs = '0'+hrs;
    if(mins < 10) mins = '0'+mins;
    if(sec < 10) sec = '0'+sec;
    
    if(!(seconds%86400)){
        seconds = 0;
        day++
    }
    timeEl.textContent = `${hrs}:${mins}:${sec}`;
    dayEl.textContent = `Day ${day}`
    console.log(hrs,mins,sec);
}

function start(){
    if(interval){
        return 
    } 
    interval = setInterval(timer,1000); 
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    seconds = 0;
    day = 0;
    timeEl.textContent = "00:00:00"
    dayEl.textContent = `Day ${day}`
}

