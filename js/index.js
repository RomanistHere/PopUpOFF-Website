let curScreenWeidth=window.screen.width;if(curScreenWeidth>1023){var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-138501898-2"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),setHeights(),window.addEventListener("resize",setHeights),new MutationObserver(setHeights).observe(document.documentElement,{childList:!0,subtree:!0,characterData:!0});const e=document.querySelectorAll(".middle__link");e.forEach(function(e){e.addEventListener("click",function(e){_gaq.push(["_trackEvent","section_clicked",e.target.id]),e.preventDefault(),this.classList.add("clicked"),this.parentNode.classList.toggle("opened"),this.parentNode.parentNode.classList.toggle("condition")})});const t=document.querySelector(".popUp__img");document.querySelectorAll(".imgClick").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),t.src=e.target.src;const c=e.target.getAttribute("data-desc");document.querySelector(".popUp__text").innerHTML=c,document.querySelector(".popUp").classList.add("show"),_gaq.push(["_trackEvent","image_clicked",t.src])})}),document.querySelector(".popUp__close").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".popUp").classList.add("hide"),setTimeout(function(){document.querySelector(".popUp").classList.remove("show"),document.querySelector(".popUp").classList.remove("hide")},1e3)}),document.querySelectorAll(".middle__close").forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.parentNode.classList.toggle("opened"),this.parentNode.parentNode.classList.toggle("condition"),e.forEach(function(e){e.classList.remove("clicked")}),_gaq.push(["_trackEvent","close_section","close_section"])})}),document.querySelector(".top-interactive_1").addEventListener("click",function(e){e.preventDefault(),this.classList.add("hide"),document.querySelector(".top-interactive_2").classList.add("show"),_gaq.push(["_trackEvent","top_hidden_click","1"])}),document.querySelector(".top-interactive_2").addEventListener("click",function(e){e.preventDefault(),this.classList.add("hide"),document.querySelector(".top__text").classList.add("show"),_gaq.push(["_trackEvent","top_hidden_click","2"])}),document.querySelector(".logo").addEventListener("click",function(e){_gaq.push(["_trackEvent","logo_clicked","logo"])}),document.querySelectorAll(".follow").forEach(e=>e.addEventListener("click",function(e){const t=e.currentTarget.getAttribute("aria-label"),c=t.substring(t.lastIndexOf("to")+3);_gaq.push(["_trackEvent","social_media",c])})),document.querySelectorAll(".store_links__item").forEach(function(e){e.addEventListener("click",function(e){const t=this.getAttribute("data-link");_gaq.push(["_trackEvent","open_store",t])})}),document.querySelector(".closeVideo").addEventListener("click",closeVideo),document.querySelectorAll("a").forEach(function(e){e.addEventListener("click",function(e){const t=this.getAttribute("href");_gaq.push(["_trackEvent","link_pressed",t])})});const c=window.location.href;if(-1!=c.indexOf("how_to_use")&&(document.querySelector(".middle__item:nth-child(3) .middle__link").classList.add("clicked"),document.querySelector(".middle__item:nth-child(3) .middle__link").parentNode.classList.toggle("opened"),document.querySelector(".middle__item:nth-child(3) .middle__link").parentNode.parentNode.classList.toggle("condition")),-1!=c.indexOf("greetings")){const e=c.substring(c.lastIndexOf("greetings")+10);_gaq.push(["_trackEvent","greetings",e||"unknown"]);const t=document.querySelector(".greeting");t.classList.add("greeting-vis"),setTimeout(function(){t.classList.add("greeting-hid")},1e4)}messToConsole()}else{document.querySelectorAll(".middle__link").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault()})}),document.querySelector(".top__title").addEventListener("click",function(e){e.preventDefault()}),document.querySelector(".top__bold").addEventListener("click",function(e){e.preventDefault()})}setOptHandler();let oldScreenWidth=curScreenWeidth;window.addEventListener("resize",checkWidth);const initVideo=()=>{const e=document.querySelector("iframe");e.setAttribute("src",e.getAttribute("data-src"))};initVideo();
