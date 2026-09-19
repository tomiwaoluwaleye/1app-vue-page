// Lightweight v-reveal directive: adds .is-visible once an element
// enters the viewport. Used deliberately, not on every single card.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)

export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    observer.observe(el)
  },
}
