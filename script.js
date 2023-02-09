	const range = document.getElementById('range')
	const rangeSpan = document.getElementById('range-span')
	const circle = document.getElementById('circle')
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


	const inputRange = function(){
		rangeSpan.textContent = range.value
		console.log(range.value);
	}

	const circlecup = function(event){
		
		circle.offsetHeight = event.currentTarget
		circle.offsetWidth = event.currentTarget
		console.log(circle.offsetHeight);
		console.log(circle.offsetWidth);

	}

	range.addEventListener('click',inputRange)
	range.addEventListener('click',circlecup)
	
	
	