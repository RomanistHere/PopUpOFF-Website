let curScreenWeidth = window.screen.width;
if (curScreenWeidth > 1023) {
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-138501898-2']);
	_gaq.push(['_trackPageview']);

	(function() {
	  var ga = document.createElement('script');
	  ga.type = 'text/javascript';
	  ga.async = true;
	  ga.src = 'https://ssl.google-analytics.com/ga.js';
	  var s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(ga, s);
	})();

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
	    	_gaq.push(['_trackEvent', 'section_clicked', e.target.id]);
	    	e.preventDefault();
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
	        _gaq.push(['_trackEvent', 'image_clicked', imgPopUp.src]);
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
	        _gaq.push(['_trackEvent', 'close_section', 'close_section']);
	    });
	});

	document.querySelector('.top-interactive_1').addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.add('hide');
		document.querySelector('.top-interactive_2').classList.add('show');
		_gaq.push(['_trackEvent', 'top_hidden_click', '1']);
	});

	document.querySelector('.top-interactive_2').addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.add('hide');
		document.querySelector('.top__text').classList.add('show');
		_gaq.push(['_trackEvent', 'top_hidden_click', '2']);
	});

	document.querySelector('.logo').addEventListener('click', function(e) {
		_gaq.push(['_trackEvent', 'logo_clicked', 'logo']);
	});

	document.querySelector('.follow').addEventListener('click', function(e) {
		_gaq.push(['_trackEvent', 'social_media', 'twitter']);
	});

	const storeLinks = document.querySelectorAll(".store_links__item");
	storeLinks.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	const storeData = this.getAttribute("data-link");
	        _gaq.push(['_trackEvent', 'open_store', storeData]);
	    });
	});	

	document.querySelector('.closeVideo').addEventListener('click', closeVideo);

	if (window.location.href.indexOf("how_to_use") != -1) {
		document.querySelector('.middle__item:nth-child(3) .middle__link').classList.add('clicked');
        document.querySelector('.middle__item:nth-child(3) .middle__link').parentNode.classList.toggle('opened');
        document.querySelector('.middle__item:nth-child(3) .middle__link').parentNode.parentNode.classList.toggle('condition');
	}

	if (window.location.href.indexOf("greetings") != -1) {
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
}
setOptHandler();
// temporarily version of responsive
let oldScreenWidth = curScreenWeidth;
window.addEventListener('resize', checkWidth);