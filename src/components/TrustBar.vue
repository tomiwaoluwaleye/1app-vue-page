<script setup>
const signals = [
  'PAYMENTS',
  'CARDS',
  'CURRENCIES',
  'TRANSFERS',
  'BUSINESS',
  'GLOBAL MONEY',
]
</script>

<template>
  <section class="trustbar-premium">
    <div class="wrap">
      <div class="trustbar-head" v-reveal>
        <span class="trustbar-line"></span>
        <p>One financial workspace</p>
        <span class="trustbar-line"></span>
      </div>

      <div class="signal-grid" v-reveal>
        <div
          v-for="(signal, index) in signals"
          :key="signal"
          class="signal-item"
        >
          <span class="signal-number">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <span class="signal-name">
            {{ signal }}
          </span>

          <span class="signal-arrow">↗</span>
        </div>
      </div>

      <div class="trustbar-bottom" v-reveal>
        <p>
          Designed to make moving and managing money
          <em>feel simpler.</em>
        </p>

        <span class="bottom-mark">1APP / 2026</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trustbar-premium {
  position: relative;
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: var(--bg);
  overflow: hidden;
}

/* =========================
   HEADER
========================= */

.trustbar-head {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
}

.trustbar-head p {
  margin: 0;
  color: var(--grey);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
}

.trustbar-line {
  width: 42px;
  height: 1px;
  background: var(--line);
}

/* =========================
   SIGNAL GRID
========================= */

.signal-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.signal-item {
  position: relative;
  min-height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem 1rem;
  border-right: 1px solid var(--line);
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.signal-item:first-child {
  border-left: 1px solid var(--line);
}

.signal-item:hover {
  background: var(--pink-pale);
  transform: translateY(-3px);
}

.signal-number {
  color: var(--pink);
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
}

.signal-name {
  color: var(--ink);
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 1.3vw, 1.15rem);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.signal-arrow {
  position: absolute;
  top: 1.15rem;
  right: 1rem;
  color: var(--grey);
  font-size: 0.8rem;
  opacity: 0;
  transform: translate(-4px, 4px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.signal-item:hover .signal-arrow {
  opacity: 1;
  transform: translate(0, 0);
}

/* =========================
   BOTTOM
========================= */

.trustbar-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2.2rem;
}

.trustbar-bottom p {
  max-width: 38ch;
  margin: 0;
  color: var(--grey);
  font-size: 0.9rem;
  line-height: 1.65;
}

.trustbar-bottom em {
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-style: normal;
}

.bottom-mark {
  color: var(--grey);
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
}

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {
  .signal-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .signal-item:nth-child(4) {
    border-left: 1px solid var(--line);
    border-top: 1px solid var(--line);
  }

  .signal-item:nth-child(5),
  .signal-item:nth-child(6) {
    border-top: 1px solid var(--line);
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {
  .trustbar-premium {
    padding: 3.5rem 0;
  }

  .trustbar-head {
    margin-bottom: 1.7rem;
  }

  .trustbar-head p {
    font-size: 0.55rem;
  }

  .trustbar-line {
    width: 24px;
  }

  .signal-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .signal-item {
    min-height: 105px;
    padding: 1rem 0.85rem;
  }

  .signal-item:nth-child(3) {
    border-left: 1px solid var(--line);
    border-top: 1px solid var(--line);
  }

  .signal-item:nth-child(4) {
    border-top: 1px solid var(--line);
  }

  .signal-item:nth-child(5),
  .signal-item:nth-child(6) {
    border-top: 1px solid var(--line);
  }

  .trustbar-bottom {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1.7rem;
  }
}
</style>