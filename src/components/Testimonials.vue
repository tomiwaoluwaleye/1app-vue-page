<script setup>
const quotes = [
  { name: 'Adaeze N.', role: 'Freelance UI designer', body: 'Sending money abroad now takes seconds, not a whole afternoon at the branch.' },
  { name: 'Tunde B.', role: 'Small business owner', body: 'I invoice clients abroad and pay my team the same day. That alone justified switching.' },
  { name: 'Ifeoma R.', role: 'Verified customer', body: 'Support actually responds fast. That doesn\u2019t feel normal for a payments app, but here it is.' },
]
</script>

<template>
  <section id="contact" class="section testimonials">
    <div class="wrap">
      <div class="section-head" v-reveal>
        <p class="eyebrow">What our customers think</p>
        <h2>What our clients say.</h2>
      </div>
      <div class="quote-grid">
        <figure v-for="(q, i) in quotes" :key="q.name" v-reveal :style="{ transitionDelay: i * 0.08 + 's' }" class="quote-card">
          <blockquote>&ldquo;{{ q.body }}&rdquo;</blockquote>
          <figcaption>
            <span class="avatar">{{ q.name[0] }}</span>
            <div>
              <strong>{{ q.name }}</strong>
              <span>{{ q.role }}</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
.quote-card {
  margin: 0;
  padding: 1.8rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: var(--paper);
}
.quote-card blockquote {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--ink);
}
.quote-card figcaption {
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: var(--brand-soft);
  color: var(--brand-deep);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-family: var(--font-display);
}
.quote-card figcaption div { display: flex; flex-direction: column; font-size: 0.85rem; }
.quote-card figcaption strong { font-size: 0.92rem; }
.quote-card figcaption span { color: var(--ink-faint); }

@media (max-width: 900px) {
  .quote-grid { grid-template-columns: 1fr; }
}
</style>
