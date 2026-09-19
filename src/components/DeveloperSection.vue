<script setup>
const points = [
  { title: 'Virtual accounts', body: 'Issue naira or dollar accounts to customers programmatically, with numbers you can reconcile against.' },
  { title: 'Identity verification', body: 'BVN, NIN, and document checks behind one endpoint, so onboarding doesn\u2019t need its own engineering team.' },
  { title: 'Payouts and collections', body: 'Move money in and out at the rate you saw when you called the endpoint, locked for an hour.' },
]
</script>

<template>
  <section id="developer" class="section dev">
    <div class="wrap dev-grid">
      <div class="dev-copy" v-reveal>
        <p class="eyebrow">Made for developers</p>
        <h2>A payments API that reads like documentation, not a puzzle.</h2>
        <ul class="dev-points">
          <li v-for="p in points" :key="p.title">
            <h4>{{ p.title }}</h4>
            <p>{{ p.body }}</p>
          </li>
        </ul>
      </div>

      <pre class="code-panel" v-reveal><code><span class="c-com">// create a virtual account for one call</span>
<span class="c-kw">const</span> account = <span class="c-kw">await</span> onapp.accounts.<span class="c-fn">create</span>({
  currency: <span class="c-str">'NGN'</span>,
  customer_id: <span class="c-str">'cus_48fk2'</span>,
});

<span class="c-com">// hold funds cross-currency</span>
<span class="c-kw">await</span> onapp.transfers.<span class="c-fn">create</span>({
  from: account.id,
  to_currency: <span class="c-str">'GBP'</span>,
  amount: <span class="c-num">500000</span>,
});</code></pre>
    </div>
  </section>
</template>

<style scoped>
.dev {
  background: var(--paper-deep);
  color: var(--paper);
  border-radius: var(--radius-lg);
  margin: 0 var(--gutter);
  width: auto;
}
.dev .wrap { padding: clamp(2.5rem, 6vw, 4rem) 0; }
.dev-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: start;
}
.dev-copy .eyebrow { color: var(--gold); }
.dev-copy .eyebrow::before { background: var(--gold); }
.dev-copy h2 { color: var(--paper); font-size: clamp(1.7rem, 3.6vw, 2.3rem); }

.dev-points {
  list-style: none;
  margin: 1.8rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.dev-points h4 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  color: var(--paper);
}
.dev-points p {
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: rgba(255, 251, 252, 0.65);
}

.code-panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  padding: 1.6rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.7;
  overflow-x: auto;
  margin: 0;
}
.c-com { color: rgba(255, 251, 252, 0.4); }
.c-kw { color: #f2a7cd; }
.c-str { color: var(--gold); }
.c-num { color: #8fd0c1; }
.c-fn { color: #9fd1ff; }

@media (max-width: 900px) {
  .dev-grid { grid-template-columns: 1fr; }
}
</style>
