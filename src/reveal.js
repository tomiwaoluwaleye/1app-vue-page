// 1app — lightweight scroll reveal system
// Adds a reveal class when an element enters the viewport.

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('is-visible')

      observer.unobserve(entry.target)
    })
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  }
)

export const reveal = {
  mounted(el, binding) {
    // Default reveal
    let type = binding.value || 'default'

    const classes = {
      default: 'reveal',
      up: 'reveal-up',
      scale: 'reveal-scale',
      left: 'reveal-left',
      right: 'reveal-right',
      stagger: 'reveal-stagger',
    }

    el.classList.add(classes[type] || 'reveal')

    observer.observe(el)
  },

  unmounted(el) {
    observer.unobserve(el)
  },
}