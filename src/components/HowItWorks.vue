<script setup>
const steps = [
  { title: 'Create your account', body: 'Sign up with your phone number and a valid ID, no branch visit required.' },
  { title: 'Verify in minutes', body: 'Identity checks run automatically in the background while you explore the app.' },
  { title: 'Send, hold, or spend', body: 'Fund your wallet and start moving money across currencies right away.' },
]
</script>

<template>
  <section class="section how">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">How it works</p>
        <h2>Three steps between you and your first transfer.</h2>
      </div>

      <ol class="how-list">
        <li v-for="(s, i) in steps" :key="s.title" v-reveal :style="{ transitionDelay: i * 0.1 + 's' }">
          <img v-if="i === 0" src="/assets/badge-1.png" alt="Step 1" class="how-badge" />
          <span v-else class="how-badge how-badge--css">{{ i + 1 }}</span>
          <div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.how-list li {
  border-top: 2px solid var(--ink);
  padding-top: 1.2rem;
}
.how-badge {
  display: block;
  width: 44px;
  height: 44px;
}
.how-badge--css {
  border-radius: 12px;
  background: var(--brand);
  color: #fff;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 700;
  font-size: 1.3rem;
  display: grid;
  place-items: center;
}
.how-list h3 {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.8rem 0 0.5rem;
}
.how-list p {
  color: var(--ink-soft);
  font-size: 0.95rem;
}

@media (max-width: 820px) {
  .how-list { grid-template-columns: 1fr; gap: 1.6rem; }
}
</style>
