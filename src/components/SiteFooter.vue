<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)
function join() {
  if (email.value.includes('@')) submitted.value = true
}

const cols = [
  { title: 'Product', links: ['Accounts', 'Virtual cards', 'Bill payments', 'Pricing'] },
  { title: 'Developer', links: ['API docs', 'Status', 'Sandbox'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog'] },
]
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-top">
      <div class="footer-brand">
        <a href="#top" class="brand">
          <img src="/assets/logo.png" alt="1app" class="brand-logo" />
        </a>
        <p>Global payments infrastructure for Nigerians &mdash; hold, receive, and manage multi-currency accounts from one wallet.</p>
        <div class="store-mini">
          <span>Google Play</span>
          <span>App Store</span>
        </div>
      </div>

      <div v-for="c in cols" :key="c.title" class="footer-col">
        <h4>{{ c.title }}</h4>
        <a v-for="l in c.links" :key="l" href="#">{{ l }}</a>
      </div>

      <div class="footer-col footer-join">
        <h4>Stay updated</h4>
        <p>Product news, once a month.</p>
        <form class="join-form" @submit.prevent="join">
          <input type="email" v-model="email" placeholder="you@email.com" required />
          <button type="submit" class="btn btn-brand">{{ submitted ? 'Joined' : 'Join' }}</button>
        </form>
      </div>
    </div>

    <div class="wrap footer-bottom">
      <span>&copy; 2026 1app Technologies Inc.</span>
      <span class="footer-badges">PCI-DSS compliant &middot; NDPR audit 2026</span>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--line); margin-top: 2rem; }
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr 1.2fr;
  gap: 2rem;
  padding: clamp(3rem, 6vw, 4.5rem) 0 2.5rem;
}
.footer-brand .brand {
  display: flex; align-items: center;
  margin-bottom: 1rem;
}
.brand-logo { height: 24px; width: auto; }
.footer-brand p { color: var(--ink-soft); font-size: 0.88rem; max-width: 32ch; }
.store-mini { display: flex; gap: 0.6rem; margin-top: 1rem; }
.store-mini span {
  font-size: 0.78rem; border: 1px solid var(--line); border-radius: var(--radius-pill);
  padding: 0.35rem 0.8rem; color: var(--ink-faint);
}

.footer-col h4 { font-family: var(--font-body); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.9rem; }
.footer-col a { display: block; font-size: 0.88rem; color: var(--ink-soft); padding: 0.3rem 0; }
.footer-col a:hover { color: var(--ink); }
.footer-join p { font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 0.9rem; }
.join-form { display: flex; gap: 0.5rem; }
.join-form input {
  flex: 1; min-width: 0; padding: 0.55rem 0.8rem;
  border: 1px solid var(--line); border-radius: var(--radius-pill);
  font-size: 0.85rem;
}
.join-form .btn { padding: 0.55rem 1.1rem; font-size: 0.85rem; }

.footer-bottom {
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid var(--line-soft);
  font-size: 0.8rem; color: var(--ink-faint);
}

@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
  .footer-brand { grid-column: span 2; }
}
@media (max-width: 560px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-brand { grid-column: auto; }
}
</style>
