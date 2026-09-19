<script setup>
import { ref, computed } from 'vue'

const corridors = [
  { to: 'United Kingdom', code: 'GBP', symbol: '£', rate: 0.00049, flag: '🇬🇧' },
  { to: 'United States', code: 'USD', symbol: '$', rate: 0.00062, flag: '🇺🇸' },
  { to: 'Kenya', code: 'KES', symbol: 'KSh', rate: 0.081, flag: '🇰🇪' },
  { to: 'Ghana', code: 'GHS', symbol: '₵', rate: 0.0093, flag: '🇬🇭' },
]

const amount = ref(500000)
const corridorIndex = ref(0)
const corridor = computed(() => corridors[corridorIndex.value])

const feeRate = 0.004
const fee = computed(() => Math.round(amount.value * feeRate))
const received = computed(() => ((amount.value - fee.value) * corridor.value.rate).toFixed(2))
const seconds = computed(() => 18 + (corridorIndex.value * 4))
</script>

<template>
  <section id="demo" class="section demo">
    <div class="wrap demo-grid">
      <div class="demo-copy" v-reveal>
        <p class="eyebrow">Try it</p>
        <h2>See exactly what you'll pay, before you send.</h2>
        <p class="demo-desc">
          This is a live simulation. Try changing the amount below &mdash; it's exactly how the real transfer flow works inside 1app: no surprises between quote and confirmation.
        </p>
      </div>

      <div class="demo-widget" v-reveal>
        <div class="demo-row">
          <label for="amount">You send</label>
          <div class="demo-input">
            <span>₦</span>
            <input id="amount" type="number" v-model.number="amount" min="1000" step="1000" />
          </div>
        </div>

        <div class="corridor-picker">
          <button
            v-for="(c, i) in corridors"
            :key="c.code"
            class="corridor-chip"
            :class="{ active: i === corridorIndex }"
            @click="corridorIndex = i"
          >
            <span>{{ c.flag }}</span>{{ c.code }}
          </button>
        </div>

        <div class="demo-result">
          <div class="result-row">
            <span>You'll receive</span>
            <strong>{{ corridor.symbol }}{{ Number(received).toLocaleString() }}</strong>
          </div>
          <div class="result-row muted">
            <span>Transfer fee</span>
            <span>₦{{ fee.toLocaleString() }}</span>
          </div>
          <div class="result-row muted">
            <span>Arrives in</span>
            <span>~{{ seconds }} seconds</span>
          </div>
        </div>

        <a href="#wallet" class="btn btn-brand demo-cta">Send to {{ corridor.to }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
.demo-desc {
  margin-top: 1.1rem;
  color: var(--ink-soft);
  max-width: 40ch;
}

.demo-widget {
  background: var(--paper-dim);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: clamp(1.6rem, 4vw, 2.2rem);
}
.demo-row label {
  font-size: 0.85rem;
  color: var(--ink-faint);
}
.demo-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 0.7rem 1rem;
}
.demo-input span { color: var(--ink-faint); font-family: var(--font-mono); }
.demo-input input {
  border: none;
  background: none;
  font-size: 1.4rem;
  font-family: var(--font-display);
  width: 100%;
  color: var(--ink);
}
.demo-input input:focus { outline: none; }

.corridor-picker {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.corridor-chip {
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: var(--radius-pill);
  padding: 0.45rem 0.9rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: border-color 0.25s ease, background 0.25s ease;
}
.corridor-chip.active {
  border-color: var(--brand);
  background: var(--brand-soft);
  color: var(--brand-deep);
  font-weight: 600;
}

.demo-result {
  margin-top: 1.4rem;
  padding-top: 1.2rem;
  border-top: 1px dashed var(--line);
}
.result-row {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  font-size: 1rem;
}
.result-row strong {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--brand-deep);
}
.result-row.muted {
  font-size: 0.85rem;
  color: var(--ink-faint);
}

.demo-cta {
  width: 100%;
  margin-top: 1.4rem;
}

@media (max-width: 900px) {
  .demo-grid { grid-template-columns: 1fr; }
}
</style>
