

let currentSlide = 0

function showSlide(index) {
	const slides = document.querySelectorAll('.carousel-item')
	if (index >= slides.length) {
		currentSlide = 0
	} else if (index < 0) {
		currentSlide = slides.length - 1
	} else {
		currentSlide = index
	}

	const carouselItems = document.querySelector('.carousel-items')
	carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`

	slides.forEach((slide, index) => {
		slide.classList.remove('active')
	})
	slides[currentSlide].classList.add('active')
}

function nextSlide() {
	showSlide(currentSlide + 1)
}

function prevSlide() {
	showSlide(currentSlide - 1)
}

// Автоматическая смена слайдов (по желанию)
setInterval(() => {
	nextSlide()
}, 20000) // каждые 20 секунды

// Бургер

const burger = document.getElementById('burger')
const mobileNav = document.getElementById('mobile-nav')

burger.addEventListener('click', () => {
	mobileNav.style.display =
		mobileNav.style.display === 'block' ? 'none' : 'block'
})
