<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function join() {
  if (email.value.includes('@')) {
    submitted.value = true
  }
}

const cols = [
  {
    title: 'Product',
    links: ['Accounts', 'Cards', 'Currencies', 'Transfers'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Developers',
    links: ['API', 'Documentation', 'Sandbox', 'Status'],
  },
]
</script>

<template>
  <footer class="footer-premium">
    <div class="wrap footer-main">
      <!-- BRAND -->
      <div class="footer-brand">
        <a href="#top" class="brand">
          <img
            src="/assets/logo.png"
            alt="1app"
            class="brand-logo"
          />
        </a>

        <p class="brand-copy">
          One place to move, manage and experience your money.
          Built for a world without financial borders.
        </p>

        <div class="brand-meta">
          <span class="meta-dot"></span>
          <span>Money, connected.</span>
        </div>
      </div>

      <!-- LINKS -->
      <div
        v-for="column in cols"
        :key="column.title"
        class="footer-column"
      >
        <h4>{{ column.title }}</h4>

        <a
          v-for="link in column.links"
          :key="link"
          href="#"
        >
          {{ link }}
        </a>
      </div>

      <!-- NEWSLETTER -->
      <div class="footer-column footer-newsletter">
        <h4>Stay in the loop</h4>

        <p>
          Product updates, ideas and news from 1app.
        </p>

        <form
          class="join-form"
          @submit.prevent="join"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
            aria-label="Email address"
            required
          />

          <button type="submit">
            {{ submitted ? '✓' : '→' }}
          </button>
        </form>

        <span v-if="submitted" class="success-message">
          You're on the list.
        </span>
      </div>
    </div>

    <!-- BIG BRAND STATEMENT -->
    <div class="wrap footer-statement">
      <div class="statement-line"></div>

      <div class="statement-row">
        <p>
          Move
          <span>freely.</span>
        </p>

        <div class="statement-mark">
          <span>1</span>
          <span>APP</span>
        </div>
      </div>
    </div>

    <!-- BOTTOM -->
    <div class="footer-bottom">
      <div class="wrap footer-bottom-inner">
        <span>© 2026 1app</span>

        <div class="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>

        <span class="footer-location">
          Built for a connected world
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-premium {
  position: relative;
  overflow: hidden;
  margin-top: clamp(3rem, 7vw, 6rem);
  background: #15112f;
  color: #fff;
}

/* =========================
   MAIN
========================= */

.footer-main {
  display: grid;
  grid-template-columns: 1.7fr repeat(3, 0.8fr) 1.25fr;
  gap: clamp(2rem, 4vw, 4rem);
  padding-top: clamp(4rem, 7vw, 6rem);
  padding-bottom: 5rem;
}

/* =========================
   BRAND
========================= */

.footer-brand {
  max-width: 330px;
}

.brand {
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.4rem;
}

.brand-logo {
  width: auto;
  height: 29px;
  filter: brightness(0) invert(1);
}

.brand-copy {
  max-width: 31ch;
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.88rem;
  line-height: 1.7;
}

.brand-meta {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.35);
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 12px rgba(224, 30, 122, 0.8);
}

/* =========================
   COLUMNS
========================= */

.footer-column h4 {
  margin: 0 0 1.1rem;
  color: rgba(255, 255, 255, 0.38);
  font-family: var(--font-mono);
  font-size: 0.57rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.footer-column a {
  display: block;
  width: fit-content;
  padding: 0.28rem 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.82rem;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-column a:hover {
  color: #fff;
  transform: translateX(4px);
}

/* =========================
   NEWSLETTER
========================= */

.footer-newsletter p {
  max-width: 25ch;
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.78rem;
  line-height: 1.6;
}

.join-form {
  display: flex;
  align-items: center;
  max-width: 270px;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.045);
}

.join-form input {
  min-width: 0;
  flex: 1;
  padding: 0.6rem 0.75rem;
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
  font-size: 0.72rem;
}

.join-form input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.join-form button {
  display: grid;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: #fff;
  background: var(--pink);
  cursor: pointer;
  font-size: 0.9rem;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.join-form button:hover {
  transform: scale(1.06);
  background: var(--pink-2);
}

.success-message {
  display: block;
  margin-top: 0.65rem;
  color: #e7a9c8;
  font-family: var(--font-mono);
  font-size: 0.53rem;
  letter-spacing: 0.04em;
}

/* =========================
   STATEMENT
========================= */

.footer-statement {
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

.statement-line {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.statement-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2.5rem;
}

.statement-row p {
  margin: 0;
  color: #fff;
  font-family: var(--font-display);
  font-size: clamp(4rem, 11vw, 10rem);
  font-weight: 500;
  line-height: 0.75;
  letter-spacing: -0.065em;
}

.statement-row p span {
  color: #e59bc2;
}

.statement-mark {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding-bottom: 0.6rem;
  color: rgba(255, 255, 255, 0.35);
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
}

.statement-mark span:first-child {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
}

/* =========================
   BOTTOM
========================= */

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 70px;
  color: rgba(255, 255, 255, 0.3);
  font-family: var(--font-mono);
  font-size: 0.53rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer-legal {
  display: flex;
  gap: 1.2rem;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: #fff;
}

.footer-location {
  text-align: right;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .footer-main {
    grid-template-columns: 1.5fr repeat(2, 1fr);
  }

  .footer-brand {
    grid-column: span 2;
  }

  .footer-newsletter {
    grid-column: span 1;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 650px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 1.5rem;
    padding-top: 3.5rem;
    padding-bottom: 4rem;
  }

  .footer-brand {
    grid-column: span 2;
  }

  .footer-newsletter {
    grid-column: span 2;
  }

  .statement-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .statement-row p {
    font-size: clamp(4rem, 21vw, 7rem);
  }

  .statement-mark {
    padding-bottom: 0;
  }

  .footer-bottom-inner {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
  }

  .footer-location {
    text-align: left;
  }
}


/* =========================================================
   PREMIUM FOOTER MOTION
   ========================================================= */

.site-footer,
.footer {
  overflow: hidden;
}

.footer-link,
.site-footer a {
  transition:
    color .25s ease,
    transform .25s ease;
}

.footer-link:hover,
.site-footer a:hover {
  transform: translateX(3px);
}

.footer-brand,
.footer-logo {
  transition: transform .4s cubic-bezier(.2,.75,.2,1);
}

.footer-brand:hover,
.footer-logo:hover {
  transform: translateY(-2px);
}

.footer-glow {
  animation: footerGlow 8s ease-in-out infinite;
}

@keyframes footerGlow {
  0%,100% {
    opacity: .25;
  }

  50% {
    opacity: .6;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-glow {
    animation: none;
  }
}

</style>