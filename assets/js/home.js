const pImages = document.querySelectorAll('.hero-parallax img')
const s = [2.5, 3.5, 4, 5, 6, 7, 9]
const home = document.querySelector('#home')
const homeElems = document.querySelectorAll('.hidden')
const homeData = [{
	title: 'South Loop',
	cards: [{
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}, {
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}, {
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}]
},{
	title: 'North West',
	cards: [{
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}, {
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}, {
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}]
},{
	title: 'Downtown',
	cards: [{
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}, {
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}, {
		title: 'Card Heading',
		preview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.',
		img: 'https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80',
		link: '#',
	}]
}]
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
// pImages[0].style.top = '-' + (window.scrollY / 2.5) + 'px'
// pImages[1].style.top = '-' + (window.scrollY / 3.5) + 'px'
// pImages[2].style.top = '-' + (window.scrollY / 4) + 'px'
// pImages[3].style.top = '-' + (window.scrollY / 5) + 'px'
// pImages[4].style.top = '-' + (window.scrollY / 6) + 'px'
// pImages[5].style.top = '-' + (window.scrollY / 7) + 'px'
// pImages[6].style.top = '-' + (window.scrollY / 9) + 'px'
})

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add('show')
		} else {
			entry.target.classList.remove('show')
		}
	})
})


homeElems.forEach(el => observer.observe(el))
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
// homeData.forEach((data, ind) => {

// 	homeCards[ind].innerHTML += `
		
// 		<section class="card hidden">
// 			<img src="${data.cards[ind].img} alt="">
// 			<div class="card-content">
// 				<h2>
// 				${data.cards[ind].title}
// 				</h2>
// 				<p>
// 				${data.cards[ind].preview}
// 				</p>
// 				<a href="${data.cards[ind].link}" class="button">
// 				Find out more 
// 				</a>
// 			</div>
// 		</section>
// 	`
// })