//import './home'
const homePage  = document.querySelector('#home')
const countryPage = document.querySelector('#country')
const headerHero = document.querySelector('#header-hero')
const navBar = document.querySelector('#nav')
const chesasPage = document.querySelector('#chesas')
const steakPage = document.querySelector('#steak')
const comingSoonPage = document.querySelector('#coming-soon')

const hide = () => {
	homePage.classList.add('clear')
	countryPage.classList.add('clear')
	headerHero.classList.add('clear')
	chesasPage.classList.add('clear')
  steakPage.classList.add('clear')
  comingSoonPage.classList.add('clear')
//  works.classList.add('hide')
//	artistPage.classList.add('hide')
//	testiPage.classList.add('hide')
//	galleryPage.classList.add('hide')
//
//	navBar.forEach(link => {
//		link.classList.remove('active')
//	})
}

const hashHandler = (hash) => {
    if (!hash) {
     return
    }
	console.log(hash)
    hide()
         navBar.classList.remove('clear')
         //    navBar.forEach(link => link.getAttribute('href') === hash ? link.classList.add('active'): false)
     if (hash === "#country"){
         countryPage.classList.remove('clear')
    } else if (hash === "#chesas"){
        chesasPage.classList.remove('clear')
    } else if (hash === "#steak"){
        steakPage.classList.remove('clear')
    } else if (hash === "#coming-soon"){
        comingSoonPage.classList.remove('clear')
//     } else if (hash === "#works"){
//         works.classList.remove('hide')
//     } else if (hash === "#testi"){
//         testiPage.classList.remove('hide')
//     } else if (hash === "#gallery"){
//         galleryPage.classList.remove('hide')
     } else {
     location.hash = ''
     location.reload()
   }
 }
 
 window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
 hashHandler(window.location.hash)

 const track = document.getElementById("image-track");

 const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
 
 const handleOnUp = () => {
   track.dataset.mouseDownAt = "0";  
   track.dataset.prevPercentage = track.dataset.percentage;
 }
 
 const handleOnMove = e => {
   if(track.dataset.mouseDownAt === "0") return;
   
   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		 maxDelta = window.innerWidth / 2;
   
   const percentage = (mouseDelta / maxDelta) * -100,
		 nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
		 nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
   
   track.dataset.percentage = nextPercentage;
   
   track.animate({
	 transform: `translate(${nextPercentage}%, -50%)`
   }, { duration: 1200, fill: "forwards" });
   
   for(const image of track.getElementsByClassName("image")) {
	 image.animate({
	   objectPosition: `${100 + nextPercentage}% center`
	 }, { duration: 1200, fill: "forwards" });
   }
 }
 
 /* -- Had to add extra lines for touch events -- */
 
 window.onmousedown = e => handleOnDown(e);
 
 window.ontouchstart = e => handleOnDown(e.touches[0]);
 
 window.onmouseup = e => handleOnUp(e);
 
 window.ontouchend = e => handleOnUp(e.touches[0]);
 
 window.onmousemove = e => handleOnMove(e);
 
 window.ontouchmove = e => handleOnMove(e.touches[0]);