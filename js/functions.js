const closeVideo=()=>{const e=document.querySelector(".middle__video").getAttribute("src");document.querySelector(".middle__video").setAttribute("src",e)},setHeights=()=>{document.querySelectorAll(".middle__wrap:not(.middle__img_wr)").forEach(e=>{let o=0;for(let t=0;t<e.children.length;t++)o+=e.children[t].offsetHeight;e.style.height=o+"px"});let e=document.querySelector(".middle__img_wr");const o=e.children[0].children[0].offsetHeight;e.style.height=o+"px"},messToConsole=()=>{console.log("%c Hi there!","color: #efbb35"),console.log(" "),console.log("%c What do u want to find?","color: #efbb35"),console.log(" "),console.log("%c There are few hidden possibilities at this website. Can you find them?","color: #efbb35"),console.log(" "),console.log("%c If you have errors within console, disable adblock or hide network errors. Theese are not mine:)","color: #efbb35"),console.log(" "),console.log("%c Have a good day!","color: #efbb35")},setOptHandler=()=>{document.querySelector(".optPage").addEventListener("click",e=>{e.preventDefault();const o=new Event("openOptPage");document.dispatchEvent(o),_gaq.push(["_trackEvent","openOptPage"])})},checkWidth=()=>{curScreenWeidth=window.screen.width,(oldScreenWidth<1024&&curScreenWeidth>=1024||oldScreenWidth>=1024&&curScreenWeidth<1024)&&location.reload(),oldScreenWidth=curScreenWeidth};