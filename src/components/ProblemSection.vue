<script setup>
const problems = [
  {
    title: 'Hidden fees in the rate',
    body: 'Banks quote a "great" rate, then bury the real cost inside the exchange spread.',
  },
  {
    title: 'Days for a simple transfer',
    body: 'A payment to family abroad can sit "processing" for two or three business days.',
  },
  {
    title: 'Paperwork for a dollar account',
    body: 'Opening a domiciliary account often means a branch visit and a stack of forms.',
  },
]
</script>

<template>
  <section id="features" class="section problem">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Why it's broken</p>
        <h2>International payments feel broken.</h2>
        <p>If you've sent money abroad from Nigeria before, this will sound familiar.</p>
      </div>

      <div class="problem-grid">
        <article v-for="(p, i) in problems" :key="p.title" v-reveal :style="{ transitionDelay: i * 0.08 + 's' }" class="problem-card">
          <span class="problem-index">0{{ i + 1 }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.problem-card {
  padding: 2rem 1.8rem;
  border-radius: var(--radius-md);
  background: var(--paper-dim);
  border: 1px solid var(--line-soft);
}
.problem-index {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--brand-deep);
}
.problem-card h3 {
  font-size: 1.15rem;
  margin: 0.9rem 0 0.6rem;
  font-weight: 600;
  font-family: var(--font-body);
}
.problem-card p {
  color: var(--ink-soft);
  font-size: 0.95rem;
}

@media (max-width: 820px) {
  .problem-grid { grid-template-columns: 1fr; }
}
</style>
