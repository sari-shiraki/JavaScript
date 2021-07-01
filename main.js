'use strict';

  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  
  
  
  let startTime;
  let setIntervalid;
  let elapsedTime = 0;
  
  

  function countUp() {
    console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = String(d.getMilliseconds()).substr(0, 1);
    timer.textContent = `${h}:${m}:${s}:${ms}`;

  }
  
  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  
  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  
  function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }
  
  setButtonStateInitial();
  
  start.addEventListener('click', () =>　{
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
    
    setIntervalid = setInterval(countUp, 100);
    
  });
  
  stop.addEventListener('click', () =>　{
    setButtonStateStopped();
    clearInterval(setIntervalid);
    elapsedTime += Date.now() - startTime;
    
  });
  
  reset.addEventListener('click', () =>　{
    setButtonStateInitial();
    timer.textContent = '0:0:0:0';
    elapsedTime = 0;
  });
  
