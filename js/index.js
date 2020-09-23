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
			_paq.push(["trackEvent", "section_clicked", e.target.id]);
			plausible(e.target.id);
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
			plausible('image_clicked');
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

	document.querySelectorAll('.follow').forEach(item => item.addEventListener('click', function(e) {
		const ariaLabel = e.currentTarget.getAttribute("aria-label");
		const social = ariaLabel.substring(ariaLabel.lastIndexOf("to") + 3)
		_gaq.push(['_trackEvent', 'social_media', social]);
		_paq.push(['trackEvent', 'social_media', social]);
		plausible('social_media');
	}));

	const storeLinks = document.querySelectorAll(".store_links__item");
	storeLinks.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	const storeData = this.getAttribute("data-link");
			_gaq.push(['_trackEvent', 'open_store', storeData]);
	        _paq.push(['trackEvent', 'open_store', storeData]);
            plausible('browser_click');
	    });
	});

	document.querySelector('.closeVideo').addEventListener('click', closeVideo);

	const allLinks = document.querySelectorAll("a");
	allLinks.forEach(function(element) {
	    element.addEventListener("click", function(e) {
	    	const data = this.getAttribute("href");
			_gaq.push(['_trackEvent', 'link_pressed', data]);
	        _paq.push(['trackEvent', 'link_pressed', data]);
	    });
	});

	const url = window.location.href;

	if (url.indexOf("how_to_use") != -1) {
		document.querySelector('.middle__item:nth-child(3) .middle__link').classList.add('clicked');
        document.querySelector('.middle__item:nth-child(3) .middle__link').parentNode.classList.toggle('opened');
        document.querySelector('.middle__item:nth-child(3) .middle__link').parentNode.parentNode.classList.toggle('condition');
	}

	if (url.indexOf("greetings") != -1) {
		const browserStore = url.substring(url.lastIndexOf("greetings") + 10);
		_gaq.push(['_trackEvent', 'greetings', browserStore ? browserStore : 'unknown']);
		_paq.push(['trackEvent', 'greetings', browserStore ? browserStore : 'unknown']);
        plausible('new_install__' + browserStore)
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

const initVideo = () => {
	const video = document.querySelector('iframe');
	video.setAttribute('src', video.getAttribute('data-src'))
}

initVideo();
