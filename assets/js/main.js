import './home'

const hide = () => {
	splashPage.classList.add('hide')
	eventPage.classList.add('hide')
  lore.classList.add('hide')
  agaric.classList.add('hide')
  works.classList.add('hide')
	artistPage.classList.add('hide')
	testiPage.classList.add('hide')
	galleryPage.classList.add('hide')

	navBar.forEach(link => {
		link.classList.remove('active')
	})
}

const hashHandler = (hash) => {
    if (!hash) {
     return
    }
    hide()
    navBar.forEach(link => link.getAttribute('href') === hash ? link.classList.add('active'): false)
     if (hash === "#event"){
         eventPage.classList.remove('hide')
     } else if (hash === "#lore"){
         lore.classList.remove('hide')
     } else if (hash === "#agaric"){
         agaric.classList.remove('hide')
     } else if (hash === "#artist"){
         artistPage.classList.remove('hide')
     } else if (hash === "#works"){
         works.classList.remove('hide')
     } else if (hash === "#testi"){
         testiPage.classList.remove('hide')
     } else if (hash === "#gallery"){
         galleryPage.classList.remove('hide')
     } else {
     location.hash = ''
     location.reload()
   }
 }
 
 window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
 hashHandler(window.location.hash)