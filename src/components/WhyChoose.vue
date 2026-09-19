<script setup>
const reasons = [
  'Instant virtual dollar cards',
  'Pay internationally, no wire drama',
  'No hidden fees, ever',
  'Bank-level encryption on every transfer',
  'Fast transfers, seconds not days',
  'CBN-licensed partner banks',
]
</script>

<template>
  <section id="company" class="section why">
    <div class="wrap why-inner">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Why Nigerians choose 1app</p>
        <h2>Built around what actually frustrates you.</h2>
      </div>
      <ul class="why-list">
        <li v-for="(r, i) in reasons" :key="r" v-reveal :style="{ transitionDelay: i * 0.04 + 's' }">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          {{ r }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.why { background: var(--brand-soft); border-radius: var(--radius-lg); margin: 0 var(--gutter); width: auto; padding: clamp(2.5rem, 6vw, 4rem) 0; }
.why-inner .section-head { margin-bottom: 2rem; }
.why-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem 2rem;
}
.why-list li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.98rem;
  color: var(--ink);
}
.why-list svg { color: var(--brand-deep); flex-shrink: 0; }

@media (max-width: 640px) {
  .why-list { grid-template-columns: 1fr; }
}
</style>
