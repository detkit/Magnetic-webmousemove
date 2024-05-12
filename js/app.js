const maneticEl = document.querySelectorAll('.magnetic');

maneticEl.forEach((magneticEls) => {
	magneticEls.addEventListener('mousemove', function (e) {
		let rect = magneticEls.getBoundingClientRect();

		let x = (e.clientX - rect.left - rect.width / 2) * 0.5;
		let y = (e.clientY - rect.top - rect.height / 2) * 0.5;

		magneticEls.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
		magneticEls.style.scale = '1.1';
		magneticEls.style.transition = '.1s ease, .3 ease';
		magneticEls.style.transitionProperty = 'transform, scale';
		magneticEls.style.cursor = 'pointer';
		magneticEls.style.zIndex = '999';
	});

	// reset element effects on mouseout
	magneticEls.addEventListener('mouseout', function () {
		magneticEls.style.transform = 'translate(0px, 0px)';
		magneticEls.style.scale = '1';
		magneticEls.style.transition = '.3s ease, .3 ease';
		magneticEls.style.transitionProperty = 'transform, scale';
		magneticEls.style.zIndex = '888';
	});
});
