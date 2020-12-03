const clock = document.getElementById('clock');
const dates = document.getElementById('dates');
const progressBar = document.getElementById('progressBar');
function setDate() {
	clock.innerHTML = 'Time: ' + new Date().toLocaleTimeString() + '<img src="src/images/clock.gif">';
	dates.innerHTML = 'Date: ' + new Date().toLocaleDateString();
	const date = new Date();
	const getSeconds = date.getSeconds();
	const getWidth = (getSeconds / 60) * 100;
	progressBar.style.width = `${getWidth}%`;
}
setInterval(setDate, 10);