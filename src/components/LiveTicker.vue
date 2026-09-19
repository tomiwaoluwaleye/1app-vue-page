<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const feed = ref([
  { time: '09:14', label: 'Salary \u2014 TechCorp', amount: '+\u20a6650,000', kind: 'in' },
  { time: '09:12', label: 'Transfer to Ada B.', amount: '-\u20a625,000', kind: 'out' },
  { time: '09:09', label: 'Netflix', amount: '-\u20a68,500', kind: 'out' },
  { time: '09:05', label: 'Payment received', amount: '+\u20a6420,000', kind: 'in' },
])

const pool = [
  { label: 'Transfer to Chidi O.', kind: 'out', min: 3000, max: 90000 },
  { label: 'Freelance payout', kind: 'in', min: 80000, max: 900000 },
  { label: 'Spotify', kind: 'out', min: 2000, max: 4000 },
  { label: 'USD card top-up', kind: 'out', min: 20000, max: 250000 },
  { label: 'Client invoice paid', kind: 'in', min: 100000, max: 1200000 },
]

let timer
function pushRandom() {
  const p = pool[Math.floor(Math.random() * pool.length)]
  const amount = Math.floor(p.min + Math.random() * (p.max - p.min))
  const now = new Date()
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
  feed.value.unshift({
    time,
    label: p.label,
    amount: (p.kind === 'in' ? '+\u20a6' : '-\u20a6') + amount.toLocaleString(),
    kind: p.kind,
  })
  feed.value = feed.value.slice(0, 5)
}

onMounted(() => { timer = setInterval(pushRandom, 3400) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section class="section ticker">
    <div class="wrap">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Always on</p>
        <h2>Money moving, right now.</h2>
      </div>

      <div class="ticker-panel" v-reveal>
        <div class="ticker-head">
          <span>Live transaction feed</span>
          <span class="live-dot">Live</span>
        </div>
        <transition-group name="ticker" tag="ul" class="ticker-list">
          <li v-for="row in feed" :key="row.time + row.label + row.amount">
            <span class="t-time">{{ row.time }}</span>
            <span class="t-label">{{ row.label }}</span>
            <span class="t-amount" :class="row.kind">{{ row.amount }}</span>
          </li>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ticker-panel {
  background: var(--paper-dim);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 1.6rem clamp(1.2rem, 4vw, 2rem);
}
.ticker-head {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--ink-faint);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--line-soft);
}
.live-dot {
  color: var(--brand-deep);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.live-dot::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--brand);
  animation: blink 1.6s ease-in-out infinite;
}
@keyframes blink { 50% { opacity: 0.3; } }

.ticker-list { list-style: none; margin: 0; padding: 0; }
.ticker-list li {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--line-soft);
  font-size: 0.92rem;
}
.ticker-list li:last-child { border-bottom: none; }
.t-time { color: var(--ink-faint); font-family: var(--font-mono); font-size: 0.8rem; }
.t-amount { font-weight: 600; text-align: right; }
.t-amount.in { color: #1f8a5a; }
.t-amount.out { color: var(--ink); }

.ticker-move, .ticker-enter-active, .ticker-leave-active { transition: all 0.5s var(--ease); }
.ticker-enter-from { opacity: 0; transform: translateY(-10px); }
.ticker-leave-to { opacity: 0; }
.ticker-leave-active { position: absolute; }
</style>
