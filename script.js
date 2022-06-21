let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



function timer(seconds){
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds*1000;
	//console.log({now,then});
	displayTimeLeft(seconds);
	displayEndTime(then);
	



countdown =	setInterval(() =>{
		const secondLeft = Math.round((then - Date.now()) / 1000);
		if(secondLeft < 0){
		clearInterval(countdown);
		return;

	}
		//console.log(secondLeft);
		displayTimeLeft(secondLeft);

	},1000);

}

function displayTimeLeft(seconds)
{
  //clearInterval(countdown);
	const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  //document.title = display;
  timerDisplay.textContent = display;
  
 //console.log(seconds);
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
	var sec = 0;
	var tens = 0;

	var appendTens = document.getElementById('tens');
	var appendSeconds = document.getElementById('seconds');

	var buttonStart = document.getElementById('button-start');
	var buttonPause = document.getElementById('button-pause');
	var buttonReset = document.getElementById('button-reset');

	var inter;


function myTask()
{
  tens++;

  if(tens < 9)
  {
  	appendTens.innerHTML = "0" + tens;
  }
  if(tens > 9)
  {
  	appendTens.innerHTML = tens;
  }
  if(tens > 99)
  {
  	sec++;
  	appendSeconds.innerHTML = "0" + sec;

  	tens = 0;
  	appendTens.innerHTML = "0" + 0;
  }
   if(sec > 9)
  {
  	appendSeconds.innerHTML = sec;
  }


}
buttonStart.onclick = function(){
	inter = setInterval(myTask);
};
buttonPause.onclick = function(){
	clearInterval(inter);
};
buttonReset.onclick = function(){
	clearInterval(inter);
	tens = "00";
	sec = "00";

	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = sec;
};





