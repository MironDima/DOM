	const range = document.getElementById('range')
	const rangeSpan = document.getElementById('range-span')
	const circle = document.querySelector('#circle')


   	const btn = document.getElementById('btn')
   	const text = document.getElementById('text')
	const square = document.getElementById('square')
	
		const click = function(){
		text.value
		console.log(text.value);
	}
		const color = function(){
		square.style.backgroundColor = text.value
		console.log(square);
		}
		btn.addEventListener('click',click)
		btn.addEventListener('click',color)



	const inputRange = function(event){
		rangeSpan.textContent = event.target.value
		circle.style.width = rangeSpan.textContent + '%'
		circle.style.height = rangeSpan.textContent + '%'
		console.log(circle.style.width);
		console.log(circle.style.height);

	}
		
		range.addEventListener('input',inputRange)
		
		

		