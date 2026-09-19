<script setup>
const banks = ['GTBank', 'Fidelity Bank', '9 Payment Service Bank', 'Providus Bank', 'Polaris Bank']
</script>

<template>
  <section class="section card-feature">
    <div class="wrap card-feature-grid">
      <div class="card-feature-copy" v-reveal>
        <p class="eyebrow">The 1app card</p>
        <h2>One card, wired into every bank you already use.</h2>
        <p class="card-feature-desc">
          Most cards tie you to a single bank. The 1app Verve card links up to five Nigerian banks at once, so you're never stuck moving funds around before you can pay for something.
        </p>
        <ul class="bank-list">
          <li v-for="b in banks" :key="b">{{ b }}</li>
        </ul>
      </div>
      <div class="card-feature-visual" v-reveal style="transition-delay: 0.08s">
        <img src="/assets/card-multi-bank.jpg" alt="1app Verve card connected to GTBank, Fidelity, 9PSB, Providus and Polaris bank accounts" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-feature-grid {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
.card-feature-desc {
  margin-top: 1.1rem;
  color: var(--ink-soft);
  max-width: 42ch;
}
.bank-list {
  list-style: none;
  margin: 1.6rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.bank-list li {
  font-size: 0.85rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  padding: 0.4rem 0.9rem;
  color: var(--ink-soft);
}
.card-feature-visual img {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

@media (max-width: 860px) {
  .card-feature-grid { grid-template-columns: 1fr; }
  .card-feature-visual { max-width: 340px; margin: 0 auto; }
}
</style>
