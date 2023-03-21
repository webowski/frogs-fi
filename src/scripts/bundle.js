const animObserver = new IntersectionObserver(
	function (entries, observer) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return
			entry.target.classList.add('is-animated')
			observer.unobserve(entry.target)
		})
	},
	{
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	}
)

function initAnims() {
	const $anims = document.querySelectorAll('.do-anim')

	$anims.forEach(($anim) => {
		animObserver.observe($anim)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	initAnims()
})
