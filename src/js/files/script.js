let zSpacing = -1000, //Переменная отвечает за расстояние по оси z
		lastPos = zSpacing / 5, //стартовая позиция
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = [] // буду наполнять данный массив значениями по оси z

window.onscroll = function() {

	let top = document.documentElement.scrollTop, // измеряет дистанцию от верха элемента до верхней точки видимого контента
			delta = lastPos - top //использую это значение для того, чтобы фреймы двигались по оси z. сможем менять значение transform

	lastPos = top //обновляю последнюю позицию

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)  //пушу обновленные значения в переменную
		zVals[i] += delta * -5.5 //с помощью индекса -5.5 могу управлять скоростью пролистывания
		//Беру конкретный фрейм по индексу
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				//Для плавного затухания уменьшаю zSpacing. чем больше параметр (/ 1.8 ), тем раньше будет применяться opacity
				opacity = zVals[i] < Math.abs(zSpacing) / 3 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`) //задаю атрибуты каждому фрейму
	})

}
// Тригер-скролл, который скролит документ на 1px
window.scrollTo(0, 1)