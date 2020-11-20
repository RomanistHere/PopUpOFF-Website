let curScreenWeidth = window.screen.width;
if (curScreenWeidth > 1023) {
	const url = window.location.href;
	if (url.indexOf("2.0") != -1) {
		// 2.0 text
		// show new elements
		document.querySelectorAll('.upd-hide').forEach(element => {
			element.classList.remove('upd-hide')
		});
		// remove old elements
		document.querySelectorAll('.upd').forEach(element => {
			element.classList.add('upd-hide')
		});

		const video = document.querySelector('iframe')
		video.setAttribute('data-src', 'https://www.youtube-nocookie.com/embed/3jTKRCxLyPE')
	}

	setHeights();
	window.addEventListener('resize', setHeights);

	const dom_observer = new MutationObserver(setHeights);
	dom_observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
		characterData: true
	});
	// handlers
	const triggerLink = document.querySelectorAll(".middle__link");

	triggerLink.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	e.preventDefault();

			if (this.id === 'video')
				initVideo();

	        this.classList.add('clicked');
	        this.parentNode.classList.toggle('opened');
	        this.parentNode.parentNode.classList.toggle('condition');
	    });
	});

	const imgPopUp = document.querySelector(".popUp__img");

	const imgClick = document.querySelectorAll(".imgClick");
	imgClick.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	e.preventDefault();
	    	imgPopUp.src = e.target.src;
	    	const imgText = e.target.getAttribute('data-desc');
	    	document.querySelector('.popUp__text').innerHTML = imgText;
	        document.querySelector(".popUp").classList.add("show");
	    });
	});

	const imgClose = document.querySelector(".popUp__close");

    imgClose.addEventListener("click", function(e) {
    	e.preventDefault();
        document.querySelector(".popUp").classList.add("hide");
        setTimeout(function() {
        	document.querySelector(".popUp").classList.remove("show");
        	document.querySelector(".popUp").classList.remove("hide");
        }, 1000);
	});

	const closeSection = document.querySelectorAll(".middle__close");

	closeSection.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	e.preventDefault();
	    	this.parentNode.classList.toggle('opened');
	        this.parentNode.parentNode.classList.toggle('condition');
	        triggerLink.forEach(function(element) {
	        	element.classList.remove('clicked');
	        });
	    });
	});

	document.querySelector('.top-interactive_1').addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.add('hide');
		document.querySelector('.top-interactive_2').classList.add('show');
	});

	document.querySelector('.top-interactive_2').addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.add('hide');
		document.querySelector('.top__text').classList.add('show');
	});

	document.querySelector('.closeVideo').addEventListener('click', closeVideo);

	if (url.indexOf("how_to_use") != -1) {
		document.querySelector('.middle__item:nth-child(3) .middle__link').classList.add('clicked');
        document.querySelector('.middle__item:nth-child(3) .middle__link').parentNode.classList.toggle('opened');
        document.querySelector('.middle__item:nth-child(3) .middle__link').parentNode.parentNode.classList.toggle('condition');
	}

	if (url.indexOf("greetings") != -1) {
		const $greeting = document.querySelector('.greeting')
		$greeting.classList.add('greeting-vis');
		setTimeout(function() {
			$greeting.classList.add('greeting-hid');
		}, 10000);
	}

	messToConsole();
} else {
	// mobiles
	const $triggerLink = document.querySelectorAll(".middle__link");

	$triggerLink.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	e.preventDefault();
	    });
	});

	document.querySelector('.top__title').addEventListener("click", function(e) {
    	e.preventDefault();
    });

	document.querySelector('.top__bold').addEventListener("click", function(e) {
    	e.preventDefault();
    });

	initVideo();
}
setOptHandler();
// temporarily version of responsive
let oldScreenWidth = curScreenWeidth;
window.addEventListener('resize', checkWidth);
