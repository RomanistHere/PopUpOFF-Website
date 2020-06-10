const closeVideo = () => {
	const videoSRC = document.querySelector('.middle__video').getAttribute('src');
	document.querySelector('.middle__video').setAttribute('src', videoSRC);				
}
const setHeights = () => {
	const middleWrap = document.querySelectorAll(".middle__wrap:not(.middle__img_wr)");
	middleWrap.forEach((element) => {
		let sumOfChildsHeights = 0;
		for (let i = 0; i < element.children.length; i++) {
		    sumOfChildsHeights = sumOfChildsHeights + element.children[i].offsetHeight;
		}
		element.style.height = sumOfChildsHeights + 'px';
	});
	let middleImgWrap = document.querySelector(".middle__img_wr");
	const sumOfChildsHeights = middleImgWrap.children[0].children[0].offsetHeight;
	middleImgWrap.style.height = sumOfChildsHeights + 'px';
}
const messToConsole = () => {
	console.log('%c Hi there!', 'color: #efbb35');
	console.log(' ');
	console.log('%c What do u want to find?', 'color: #efbb35');
	console.log(' ');
	console.log('%c There are few hidden possibilities at this website. Can you find them?', 'color: #efbb35');
	console.log(' ');
	console.log('%c If you have errors within console, disable adblock or hide network errors. Theese are not mine:)', 'color: #efbb35');
	console.log(' ');
	console.log('%c Have a good day!', 'color: #efbb35');
}
const setOptHandler = () => {
	document.querySelector('.optPage').addEventListener('click', e => {
		e.preventDefault();
		const event = new Event("openOptPage");
			document.dispatchEvent(event);
			_gaq.push(['_trackEvent', 'openOptPage']);
	});
};
const checkWidth = () => {
	curScreenWeidth = window.screen.width;
	if (((oldScreenWidth < 1024) && (curScreenWeidth >= 1024)) ||
		((oldScreenWidth >= 1024) && (curScreenWeidth < 1024)) ) {
		location.reload();
	}
	oldScreenWidth = curScreenWeidth;
}