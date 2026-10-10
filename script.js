//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("ip");
const output = document.getElementById("ip");

function promisewithDelay(value, delay){
	return new Promise(resolve => {
		setTimeout(() => resolve(value),delay);
	});
}

button.onclick = function (){
	const num = Number (input.value);

	promiseWithDelay(num,2000)
	.then (result => {
		output.textContent = `Result: ${result}`;
		return promiseWithDelay(result * 2 ,1000);
	})
	.then (result => {
		output.textContent = `Result: ${result}`;
		return promiseWithDelay(result -3 ,1000);
})
	.then (result => {
		output.textContent = `Result: ${result}`;
		return promiseWithDelay(result / 2 ,1000);
	})
	.then (result => {
		output.textContent = `Result: ${result}`;
		return promiseWithDelay(result +10 ,1000);
	})

	.then (result => {
		output.textContent = `Final Result: ${result}`;
	});
};