<script setup>
</script>

<template>
  <section class="section security">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Why it's secure</p>
        <h2>Built like a dashboard, not a brochure.</h2>
      </div>

      <div class="bento">
        <div class="bento-tile tile-analytics" v-reveal>
          <h3>Payments & analytics</h3>
          <p>Track every transfer, refund, and settlement with a real-time ledger view.</p>
          <div class="mini-chart">
            <span style="--h:40%"></span><span style="--h:65%"></span><span style="--h:35%"></span>
            <span style="--h:80%"></span><span style="--h:55%"></span><span style="--h:90%"></span>
          </div>
        </div>

        <div class="bento-tile tile-cards" v-reveal style="transition-delay: 0.06s">
          <h3>Cards</h3>
          <p>Hover to flip &mdash; freeze or issue a new virtual card instantly.</p>
          <div class="mini-card">
            <span class="chip"></span>
            <span class="mini-dots">•••• •••• •••• 4821</span>
          </div>
        </div>

        <div class="bento-tile tile-transfers" v-reveal style="transition-delay: 0.12s">
          <h3>Transfers</h3>
          <p>Cross-currency payouts settle in under four seconds on average.</p>
          <div class="pulse-line"><span></span></div>
        </div>

        <div class="bento-tile tile-security" v-reveal style="transition-delay: 0.18s">
          <h3>Security</h3>
          <p>Bank-level encryption and fraud monitoring on every transaction.</p>
          <div class="lock-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.6"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bento {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.2rem;
}
.bento-tile {
  border-radius: var(--radius-lg);
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  min-height: 190px;
}
.bento-tile h3 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.05rem;
}
.bento-tile p {
  margin-top: 0.5rem;
  font-size: 0.88rem;
  max-width: 30ch;
}

.tile-analytics {
  grid-row: span 2;
  background: linear-gradient(160deg, var(--brand) 0%, var(--brand-deep) 100%);
  color: #fff;
}
.tile-analytics p { color: rgba(255,255,255,0.85); }
.mini-chart {
  position: absolute;
  bottom: 1.6rem;
  left: 1.8rem;
  right: 1.8rem;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 60px;
}
.mini-chart span {
  flex: 1;
  height: var(--h);
  background: rgba(255,255,255,0.5);
  border-radius: 3px;
}

.tile-cards {
  background: var(--ink);
  color: var(--paper);
}
.tile-cards p { color: rgba(255,251,252,0.65); }
.mini-card {
  margin-top: 1.2rem;
  background: linear-gradient(135deg, #2a1b23, #3d1e2e);
  border-radius: var(--radius-sm);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.chip { width: 26px; height: 18px; border-radius: 4px; background: var(--gold); }
.mini-dots { font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.05em; }

.tile-transfers {
  background: var(--paper-dim);
  border: 1px solid var(--line);
}
.tile-transfers p { color: var(--ink-soft); }
.pulse-line {
  margin-top: 1.4rem;
  height: 2px;
  background: var(--line);
  position: relative;
  border-radius: 2px;
}
.pulse-line span {
  position: absolute;
  top: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand);
  animation: pulse-move 2.6s ease-in-out infinite;
}
@keyframes pulse-move {
  0% { left: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: 96%; opacity: 0; }
}

.tile-security {
  background: var(--gold-soft);
  border: 1px solid rgba(224, 164, 21, 0.3);
}
.tile-security p { color: var(--ink-soft); }
.lock-icon {
  margin-top: 1.4rem;
  color: var(--gold);
}

@media (max-width: 900px) {
  .bento { grid-template-columns: 1fr 1fr; }
  .tile-analytics { grid-column: span 2; grid-row: auto; }
}
@media (max-width: 560px) {
  .bento { grid-template-columns: 1fr; }
  .tile-analytics { grid-column: auto; }
}
</style>
