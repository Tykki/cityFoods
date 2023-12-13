const pImages = document.querySelectorAll('.hero-parallax img')
const s = [2.5, 3.5, 4, 5, 6, 7, 9]
const placeholderImg = ['https://images.unsplash.com/photo-1608877906884-5ffef2ef9612?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1622003184404-bc0c66144534?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
function imgShuffler(arr=placeholderImg, index=Math.floor(Math.random() * placeholderImg.length)) {
	if (index < 0 || index >= arr.length) {
	  // Index out of bounds, handle accordingly
	  return null;
	}
  
	// Use splice to remove the element at the specified index
	const removedValue = arr.splice(index, 1)[0];
  
	return removedValue;
  }
// Add a scroll event to the page
window.addEventListener('scroll', ()=>{
// Move the imgs to the top by adding the scrolled
// amount and converting it to a neg num
// Divide by a bigger num to make the effect more subtle.
// Apply this to make farther objects move slower,
// and closer objs move faster
	pImages.forEach((img, ind) => {
		img.style.top = '-' + (window.scrollY / s[ind]) + 'px'
	})
})
const homeData = [{
	title: 'South Loop',
	cards: [{
		title: 'Low Country',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://static.wixstatic.com/media/583af2_f5e7d6b184c5473aac96107bb7ca441d~mv2.jpg/v1/fill/w_980,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/583af2_f5e7d6b184c5473aac96107bb7ca441d~mv2.jpg',
		link: '#south-loop',
	}, {
		title: 'Coming Soon',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: imgShuffler(),
		link: '#coming-soon',
	}, {
		title: 'Coming Soon',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: imgShuffler(),
		link: '#coming-soon',
	}]
},{
	title: 'North West',
	cards: [{
		title: 'Chesa\'s Bistro & Bar',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://static.wixstatic.com/media/dcde64_5ed6384849c9490899c5a7e1db2135fa~mv2.jpg/v1/fill/w_506,h_314,al_c,q_80,usm_0.66_1.00_0.01/dcde64_5ed6384849c9490899c5a7e1db2135fa~mv2.jpg',
		link: '#north-west',
	}, {
		title: 'Coming Soon',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: imgShuffler(),
		link: '#coming-soon',
	}, {
		title: 'Coming Soon',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: imgShuffler(),
		link: '#coming-soon',
	}]
},{
	title: 'Downtown',
	cards: [{
		title: 'RPM Steak',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://photos.singleplatform.com/0080360655bb1c414ce1f4b3cfa7af0eb54abcc6.jpg',
		link: '#downtown',
	}, {
		title: 'Coming Soon',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: imgShuffler(),
		link: '#coming-soon',
	}, {
		title: 'Coming Soon',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: imgShuffler(),
		link: '#coming-soon',
	}]
}]



homeData.forEach((data) => {

home.innerHTML += `
	<section class="home-item hidden">
					<h1>${data.title}</h1>
					<div class="cards">
					</div>
				</section>
	`
})
const homeCards = document.querySelectorAll('.cards')
 homeData.forEach((data, indx) => {
	 data.cards.forEach((card, ind) => {
		 
	 

 	homeCards[indx].innerHTML += `
		
 		<section class="card hidden">
 			<img src="${data.cards[ind].img}" alt="">
 			<div class="card-content">
 				<h2>
 				${data.cards[ind].title}
 				</h2>
 				<p>
 				${data.cards[ind].preview}
 				</p>
 				<a href="${data.cards[ind].link}" class="button">
 				${ind === 0 ? '<h3>Read More</h3>': '<h3>Learn More</h3>'} 
 				</a>
 			</div>
 		</section>
 	`
	})
 })
const homeElems = document.querySelectorAll('.hidden')
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
//		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add('show')
		} else {
			entry.target.classList.remove('show')
		}
	})
})


homeElems.forEach(el => observer.observe(el))