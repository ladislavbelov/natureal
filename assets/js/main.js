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

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	// window.addEventListener('scroll', function(e){
	// 	if (isInViewport(document.querySelector('.index__how'))) {
	// 		console.log('first')
	// 	}
	// });

	// const box = document.querySelector('.index__how');
	// const rect = box.getBoundingClientRect();

	// console.log(rect);
	// function isInViewport(element) {
	// 	var rect = element.getBoundingClientRect();
	// 	var html = document.documentElement;
	// 	return (
	// 	  rect.top >= 0 &&
	// 	  rect.left >= 0 &&
	// 	  rect.bottom <= (window.innerHeight || html.clientHeight) &&
	// 	  rect.right <= (window.innerWidth || html.clientWidth)
	// 	);
	//   }
	  
	//   $(window).scroll(function(){
	// 	  $(".block").each(function(index,element){
	// 		  if(isInViewport(element)){
	// 			  //тут вешаешь класс на элемент меню
	// 			  //только надо еще допилить случаи когда видно больше одного блока
	// 		  }
	// 	  })
	//   })
});
