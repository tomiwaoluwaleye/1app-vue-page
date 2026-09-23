<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();

  mouseX.value = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  mouseY.value = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
}

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <section id="wallet" class="section cta-premium">
    <div class="cta-orb orb-one"></div>
    <div class="cta-orb orb-two"></div>

    <div class="wrap cta-inner" v-reveal @mousemove="handleMouseMove">
      <!-- COPY -->
      <div class="cta-copy">
        <div class="cta-eyebrow">
          <span class="eyebrow-dot"></span>
          Get started with 1app
        </div>

        <h2>
          Your money,
          <span>without borders.</span>
        </h2>

        <p>
          One place to move, manage and experience your money — wherever life
          takes you.
        </p>

        <div class="cta-actions">
          <a href="#" class="cta-primary">
            <span>Get started</span>
            <span class="cta-arrow">↗</span>
          </a>

          <a href="#" class="cta-secondary">
            Explore 1app
            <span>↓</span>
          </a>
        </div>

        <div class="cta-note">
          <span class="note-line"></span>
          <span>Simple. Connected. Built for movement.</span>
        </div>
      </div>

      <!-- VISUAL -->
      <div class="cta-visual">
        <div
          class="visual-glow"
          :style="{
            transform: `translate(${mouseX * 12}px, ${mouseY * 12}px)`,
          }"
        ></div>

        <div
          class="phone-frame"
          :style="{
            transform: `
              perspective(1000px)
              rotateY(${mouseX * 5}deg)
              rotateX(${mouseY * -4}deg)
              translateY(${mouseY * 5}px)
            `,
          }"
        >
          <div class="phone-top">
            <span>1app</span>
            <span class="phone-status">● ● ●</span>
          </div>

          <div class="phone-balance">
            <span>Total balance</span>
            <strong>₦ 2,480,500</strong>
          </div>

          <div class="phone-card">
            <div class="card-top">
              <span>1app</span>
              <span>VISA</span>
            </div>

            <div class="card-number">•••• &nbsp; •••• &nbsp; 4821</div>

            <div class="card-bottom">
              <span>1APP CARD</span>
              <span>09/29</span>
            </div>
          </div>

          <div class="phone-section-label">Recent activity</div>

          <div class="phone-transaction">
            <div class="transaction-icon">↗</div>
            <div class="transaction-info">
              <strong>Transfer</strong>
              <span>Today · 10:42 AM</span>
            </div>
            <b>− ₦85,000</b>
          </div>

          <div class="phone-transaction">
            <div class="transaction-icon dollar">$</div>
            <div class="transaction-info">
              <strong>USD balance</strong>
              <span>Today · 09:18 AM</span>
            </div>
            <b>$420.00</b>
          </div>

          <div class="phone-nav">
            <span class="active">Home</span>
            <span>Cards</span>
            <span>Move</span>
            <span>Profile</span>
          </div>
        </div>

        <!-- FLOATING ELEMENTS -->
        <div
          class="floating-pill pill-currency"
          :style="{
            transform: `translate(${mouseX * -8}px, ${mouseY * -6}px)`,
          }"
        >
          <span class="pill-icon">$</span>
          <div>
            <strong>USD</strong>
            <small>Available</small>
          </div>
        </div>

        <div
          class="floating-pill pill-transfer"
          :style="{
            transform: `translate(${mouseX * -5}px, ${mouseY * -9}px)`,
          }"
        >
          <span class="pill-icon">↗</span>
          <div>
            <strong>Money moved</strong>
            <small>Just now</small>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-bottom">
      <div class="wrap">
        <span>1APP</span>
        <span>MOVE / MANAGE / EXPERIENCE</span>
        <span>EVERYWHERE</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-premium {
  position: relative;
  overflow: hidden;
  margin: 0 var(--gutter);
  width: auto;
  border-radius: var(--radius-lg);
  min-height: 620px;
  color: #fff;
  background:
    radial-gradient(
      circle at 75% 45%,
      rgba(224, 30, 122, 0.38),
      transparent 28%
    ),
    radial-gradient(
      circle at 15% 90%,
      rgba(224, 30, 122, 0.2),
      transparent 30%
    ),
    #171239;
}

.cta-inner {
  position: relative;
  z-index: 2;
  min-height: 570px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(380px, 0.8fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 7rem);
  padding-top: clamp(4rem, 8vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

/* =========================
   BACKGROUND ORBS
========================= */

.cta-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(2px);
}

.orb-one {
  width: 420px;
  height: 420px;
  right: -160px;
  top: -180px;
  background: rgba(224, 30, 122, 0.12);
}

.orb-two {
  width: 280px;
  height: 280px;
  left: -120px;
  bottom: -160px;
  background: rgba(255, 255, 255, 0.04);
}

/* =========================
   COPY
========================= */

.cta-copy {
  max-width: 620px;
}

.cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1.4rem;
  color: rgba(255, 255, 255, 0.65);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 18px rgba(224, 30, 122, 0.8);
}

.cta-copy h2 {
  max-width: 650px;
  margin: 0;
  color: #fff;
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 500;
  line-height: 0.94;
  letter-spacing: -0.055em;
}

.cta-copy h2 span {
  display: block;
  color: #f4a6ca;
}

.cta-copy > p {
  max-width: 48ch;
  margin: 1.7rem 0 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 1rem;
  line-height: 1.75;
}

/* =========================
   ACTIONS
========================= */

.cta-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 52px;
  border-radius: var(--radius-pill);
  padding: 0 1.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.cta-primary {
  color: #fff;
  background: var(--pink);
  box-shadow: 0 14px 35px rgba(224, 30, 122, 0.28);
}

.cta-primary:hover {
  transform: translateY(-3px);
  background: var(--pink-2);
}

.cta-arrow {
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
}

.cta-secondary {
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.cta-secondary:hover {
  transform: translateY(-3px);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.05);
}

.cta-secondary span {
  font-size: 1rem;
}

/* =========================
   NOTE
========================= */

.cta-note {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.38);
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.note-line {
  width: 28px;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
}

/* =========================
   VISUAL
========================= */

.cta-visual {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-glow {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: rgba(224, 30, 122, 0.2);
  filter: blur(65px);
  transition: transform 0.35s ease;
}

/* =========================
   PHONE
========================= */

.phone-frame {
  position: relative;
  z-index: 2;
  width: min(290px, 70vw);
  height: 530px;
  overflow: hidden;
  padding: 1rem;
  border: 7px solid #0d0b25;
  border-radius: 38px;
  background: #f9f7fa;
  color: var(--ink);
  box-shadow:
    0 45px 90px rgba(0, 0, 0, 0.42),
    inset 0 0 0 1px rgba(255, 255, 255, 0.25);
  transition: transform 0.2s ease-out;
}

.phone-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.35rem 1.3rem;
  font-size: 0.75rem;
  font-weight: 800;
}

.phone-status {
  color: #bbb7c0;
  font-size: 0.42rem;
  letter-spacing: 0.12em;
}

.phone-balance {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0 0.3rem 1.1rem;
}

.phone-balance span {
  color: #8d8993;
  font-size: 0.58rem;
}

.phone-balance strong {
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}

/* =========================
   CARD
========================= */

.phone-card {
  min-height: 155px;
  padding: 1.1rem;
  border-radius: 18px;
  color: #fff;
  background: linear-gradient(
    135deg,
    rgba(224, 30, 122, 0.95),
    rgba(42, 22, 77, 0.98)
  );
  box-shadow: 0 18px 30px rgba(35, 18, 65, 0.2);
}

.card-top,
.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-top {
  font-size: 0.63rem;
  font-weight: 700;
}

.card-number {
  margin-top: 2.3rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.card-bottom {
  margin-top: 1rem;
  font-family: var(--font-mono);
  font-size: 0.45rem;
  opacity: 0.72;
}

/* =========================
   TRANSACTIONS
========================= */

.phone-section-label {
  margin: 1.2rem 0 0.7rem;
  color: #77727d;
  font-size: 0.55rem;
  font-weight: 700;
}

.phone-transaction {
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0;
}

.transaction-icon {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  border-radius: 9px;
  color: var(--pink);
  background: var(--pink-light);
  font-size: 0.7rem;
  font-weight: 700;
}

.transaction-icon.dollar {
  color: #55506c;
  background: #eceaf1;
}

.transaction-info {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
}

.transaction-info strong {
  font-size: 0.58rem;
}

.transaction-info span {
  color: #99949e;
  font-size: 0.46rem;
}

.phone-transaction b {
  font-family: var(--font-mono);
  font-size: 0.48rem;
  font-weight: 600;
}

/* =========================
   PHONE NAV
========================= */

.phone-nav {
  position: absolute;
  right: 1rem;
  bottom: 0.8rem;
  left: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.55rem 0.25rem 0.2rem;
  border-top: 1px solid #e8e5e9;
  background: rgba(249, 247, 250, 0.96);
}

.phone-nav span {
  color: #aaa5ae;
  text-align: center;
  font-size: 0.45rem;
}

.phone-nav span.active {
  color: var(--pink);
  font-weight: 700;
}

/* =========================
   FLOATING PILLS
========================= */

.floating-pill {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  background: rgba(28, 24, 61, 0.82);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  transition: transform 0.3s ease;
}

.pill-currency {
  top: 16%;
  right: -2%;
}

.pill-transfer {
  bottom: 15%;
  left: -4%;
}

.pill-icon {
  display: grid;
  width: 29px;
  height: 29px;
  place-items: center;
  border-radius: 9px;
  color: #fff;
  background: rgba(224, 30, 122, 0.9);
  font-size: 0.72rem;
  font-weight: 700;
}

.floating-pill div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.floating-pill strong {
  color: #fff;
  font-size: 0.57rem;
}

.floating-pill small {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.45rem;
}

/* =========================
   BOTTOM BAR
========================= */

.cta-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cta-bottom .wrap {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: rgba(255, 255, 255, 0.3);
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 900px) {
  .cta-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cta-copy {
    max-width: 680px;
    margin: 0 auto;
  }

  .cta-actions {
    justify-content: center;
  }

  .cta-note {
    justify-content: center;
  }

  .cta-visual {
    min-height: 460px;
  }

  .phone-frame {
    width: 270px;
    height: 500px;
  }

  .pill-currency {
    right: 7%;
  }

  .pill-transfer {
    left: 7%;
  }
}

@media (max-width: 600px) {
  .cta-premium {
    margin: 0 0.75rem;
    border-radius: 28px;
  }

  .cta-inner {
    min-height: auto;
    padding-top: 3.5rem;
    padding-bottom: 4rem;
  }

  .cta-copy h2 {
    font-size: clamp(2.8rem, 13vw, 4rem);
  }

  .cta-copy > p {
    font-size: 0.9rem;
  }

  .cta-actions {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
  }

  .cta-visual {
    min-height: 410px;
    margin-top: 0.5rem;
  }

  .phone-frame {
    width: 235px;
    height: 435px;
    border-width: 6px;
    border-radius: 30px;
  }

  .phone-card {
    min-height: 125px;
  }

  .card-number {
    margin-top: 1.6rem;
  }

  .pill-currency {
    top: 8%;
    right: -1%;
  }

  .pill-transfer {
    bottom: 8%;
    left: -1%;
  }

  .floating-pill {
    padding: 0.5rem 0.6rem;
  }

  .cta-bottom .wrap {
    gap: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }

  .cta-bottom .wrap span:nth-child(2) {
    display: none;
  }
}

/* =========================================================
   PREMIUM TESTIMONIAL MOTION
   ========================================================= */

.testimonials,
.testimonial-section {
  perspective: 1000px;
}

.testimonial-card,
.quote-card,
.testimonial {
  transition:
    transform .5s cubic-bezier(.2,.75,.2,1),
    box-shadow .5s ease,
    border-color .35s ease;
}

.testimonial-card:hover,
.quote-card:hover,
.testimonial:hover {
  transform: translateY(-8px);
  box-shadow: 0 26px 60px rgba(27,22,64,.11);
}

.testimonial-avatar,
.avatar,
.quote-avatar {
  transition:
    transform .4s cubic-bezier(.2,.75,.2,1);
}

.testimonial-card:hover .testimonial-avatar,
.testimonial-card:hover .avatar,
.quote-card:hover .quote-avatar {
  transform: scale(1.08);
}

.quote-mark {
  animation: quoteFloat 5s ease-in-out infinite;
}

@keyframes quoteFloat {
  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.testimonial-card:nth-child(2) {
  animation-delay: -.8s;
}

.testimonial-card:nth-child(3) {
  animation-delay: -1.6s;
}

@media (prefers-reduced-motion: reduce) {
  .quote-mark {
    animation: none;
  }
}
</style>
