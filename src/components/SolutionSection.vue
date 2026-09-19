<script setup>
const features = [
  { title: 'Receive payments', body: 'Get paid by clients anywhere, straight into your naira or dollar balance.' },
  { title: 'Virtual dollar card', body: 'Spin up a card for subscriptions and online shopping in minutes.' },
  { title: 'International transfers', body: 'Send money abroad without it sitting stuck in bank processing.' },
  { title: 'Currency conversion', body: 'Swap naira, dollars and pounds at the mid-market rate, instantly.' },
  { title: 'Business payments', body: 'Pay vendors and run payroll, or issue accounts through the API.' },
]
</script>

<template>
  <section class="section solution">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">How 1app solves it</p>
        <h2>Everything money-related, in one place.</h2>
        <p>Six products, one login &mdash; built so switching between currencies stops being the hard part of your day.</p>
      </div>

      <div class="solution-feature" v-reveal>
        <div class="solution-feature-copy">
          <span class="feature-tag">Send money</span>
          <h3>Move funds locally or across borders in seconds, at a rate you see and confirm before you send.</h3>
        </div>
        <div class="route-ticket">
          <span>Lagos</span>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>London</span>
          <span class="route-amount">₦450,000+</span>
        </div>
      </div>

      <div class="solution-grid">
        <article v-for="(f, i) in features" :key="f.title" v-reveal :style="{ transitionDelay: i * 0.05 + 's' }" class="solution-card">
          <h4>{{ f.title }}</h4>
          <p>{{ f.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-feature {
  background: var(--ink);
  color: var(--paper);
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 5vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--brand);
}
.feature-tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--gold-soft);
}
.solution-feature-copy h3 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.3rem;
  margin-top: 0.7rem;
  max-width: 34ch;
  line-height: 1.35;
}
.route-ticket {
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-pill);
  padding: 0.7rem 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
}
.route-amount {
  background: var(--brand);
  padding: 0.25rem 0.7rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.8rem;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.solution-card {
  padding: 1.5rem 1.3rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
}
.solution-card h4 {
  font-family: var(--font-body);
  font-size: 0.98rem;
  font-weight: 600;
}
.solution-card p {
  margin-top: 0.5rem;
  font-size: 0.87rem;
  color: var(--ink-soft);
}

@media (max-width: 980px) {
  .solution-grid { grid-template-columns: repeat(2, 1fr); }
  .solution-feature { flex-direction: column; align-items: flex-start; }
  .route-ticket { align-self: stretch; justify-content: center; flex-wrap: wrap; }
}
@media (max-width: 520px) {
  .solution-grid { grid-template-columns: 1fr; }
}
</style>
