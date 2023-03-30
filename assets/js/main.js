window.addEventListener('load', function(){
	
	let btnUp = document.querySelector('.btnUp');
	let header = document.querySelector('.header');
	let topSection = document.querySelector('.index__intro .mid-spacer');
	let roundFrameTop = document.querySelector('.round-frame__top');

	btnUp.addEventListener('click', function(e){
		scrollToY(0);
	});

	window.addEventListener('scroll', function(e){
		let pos = window.pageYOffset;
		
		if(pos > window.innerHeight){
			btnUp.classList.add('btnUp-open');
		}
		else{
			btnUp.classList.remove('btnUp-open');
		}
	});
	function scrollToY(pos){
		window.scrollTo({
			top: pos,
			behavior: "smooth"
		});
	}
	window.addEventListener('scroll', function(e){
		if ((topSection.scrollHeight - 150) > window.pageYOffset) {
			roundFrameTop.style.transform = "rotate("+ window.scrollY / 5 + "deg)";
			roundFrameTop.style.top = window.scrollY / 10 + "%";
		}
	});
});
