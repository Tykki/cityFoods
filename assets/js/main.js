//import './home'
const homePage  = document.querySelector('#home')
const southLoopPage = document.querySelector('#south-loop')
const headerHero = document.querySelector('#header-hero')
const navBar = document.querySelector('#nav')
const northWestPage = document.querySelector('#north-west')
const downtownPage = document.querySelector('#downtown')
const comingSoonPage = document.querySelector('#coming-soon')
const navTitle = document.querySelector('#navTitle')
const home = document.querySelector('#home')
const galleryPage = document.querySelector('#gallery')


const hide = () => {
	homePage.classList.add('clear')
	southLoopPage.classList.add('clear')
	headerHero.classList.add('clear')
	northWestPage.classList.add('clear')
  downtownPage.classList.add('clear')
  comingSoonPage.classList.add('clear')
  galleryPage.classList.add('clear')
}

const flag = 0;
const hashHandler = (hash) => {
    if (!hash) {
     return
    }
	console.log(hash)
    hide()
         navBar.classList.remove('clear')
         //    navBar.forEach(link => link.getAttribute('href') === hash ? link.classList.add('active'): false)
     if (hash === "#south-loop"){
         southLoopPage.classList.remove('clear')
         navTitle.innerHTML = 'South Loop'
    } else if (hash === "#north-west"){
        northWestPage.classList.remove('clear')
        navTitle.innerHTML = 'North West'
    } else if (hash === "#downtown"){
        downtownPage.classList.remove('clear')
        navTitle.innerHTML = 'Downtown'
    } else if (hash === "#coming-soon"){
        comingSoonPage.classList.remove('clear')
    } else if (hash === "#gallery"){
        galleryPage.classList.remove('clear')
        location.hash = '#gallery'
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