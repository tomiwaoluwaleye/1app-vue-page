<script setup>
</script>

<template>
  <section id="wallet" class="section cta">
    <div class="wrap cta-inner" v-reveal>
      <div class="cta-copy">
        <p class="eyebrow" style="color: var(--gold-soft)">Get started</p>
        <h2>Download the app.</h2>
        <p>It takes a few minutes to start enjoying all the benefits. Get 1app on Google Play or the App Store.</p>
        <div class="store-buttons">
          <a href="#" class="store-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3.5v17a1 1 0 001.5.87l14-8.5a1 1 0 000-1.74l-14-8.5A1 1 0 003 3.5z"/></svg>
            Google Play
          </a>
          <a href="#" class="store-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 12.4c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.2 1 8.2.7 1 1.6 2.1 2.7 2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.2 0 1.9-1 2.6-2 .8-1.2 1.2-2.3 1.2-2.4-.1 0-2.2-.9-2.7-2z"/></svg>
            App Store
          </a>
        </div>
      </div>
      <div class="cta-visual">
        <img src="/assets/app-screens.png" alt="1app login and wallet dashboard screens" class="app-screens" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta { background: linear-gradient(135deg, var(--brand) 0%, var(--brand-deep) 100%); border-radius: var(--radius-lg); margin: 0 var(--gutter); width: auto; color: #fff; }
.cta .wrap { padding: clamp(2.8rem, 6vw, 4.5rem) 0; }
.cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.cta-copy h2 { color: #fff; font-size: clamp(1.9rem, 4vw, 2.6rem); margin: 0.6rem 0 0.8rem; }
.cta-copy p:not(.eyebrow) { color: rgba(255,255,255,0.85); max-width: 40ch; }
.store-buttons { display: flex; gap: 0.8rem; margin-top: 1.6rem; flex-wrap: wrap; }
.store-btn {
  display: flex; align-items: center; gap: 0.5rem;
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 0.65rem 1.2rem;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  transition: background 0.25s ease;
}
.store-btn:hover { background: rgba(0,0,0,0.4); }

.cta-visual { flex-shrink: 0; }
.app-screens {
  width: min(70vw, 260px);
  filter: drop-shadow(0 30px 50px rgba(0,0,0,0.35));
}

@media (max-width: 760px) {
  .cta-inner { flex-direction: column; text-align: center; align-items: center; }
  .store-buttons { justify-content: center; }
}
</style>
