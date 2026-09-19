<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const screens = [
  { name: "Dashboard", image: "/assets/dashboard.png" },
  { name: "Card", image: "/assets/card.png" },
  { name: "Dollar Card", image: "/assets/dollar-card.png" },
  { name: "Transactions", image: "/assets/transactions.png" },
  { name: "FX / Swap", image: "/assets/currency-swap.png" },
  { name: "Wallet", image: "/assets/wallet.png" },
];

const currencies = [
  { symbol: "$", code: "USD", delay: "0s", position: "top" },
  { symbol: "€", code: "EUR", delay: "0.7s", position: "top-right" },
  { symbol: "£", code: "GBP", delay: "1.4s", position: "right" },
  { symbol: "KSh", code: "KES", delay: "2.1s", position: "bottom-right" },
  { symbol: "GH₵", code: "GHS", delay: "2.8s", position: "bottom" },
  { symbol: "C$", code: "CAD", delay: "3.5s", position: "bottom-left" },
  { symbol: "₦", code: "NGN", delay: "4.2s", position: "left" },
];

const activeScreen = ref(0);

let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    activeScreen.value = (activeScreen.value + 1) % screens.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(timer);
});

function selectScreen(index) {
  activeScreen.value = index;
}
</script>

<template>
  <section class="hero">
    <div class="hero-glow hero-glow-one"></div>
    <div class="hero-glow hero-glow-two"></div>

    <div class="wrap hero-inner">
      <!-- LEFT SIDE -->

      <div class="hero-copy">
        <div class="hero-eyebrow">
          <span class="eyebrow-dot"></span>
          Live · ₦200M+ processed for Nigerians
        </div>

        <h1>
          One Wallet.
          <br />
          <span>Every Currency.</span>
          <br />
          Zero Stress.
        </h1>

        <p class="hero-description">
          Hold naira and dollars in one account, spin up a virtual dollar card
          in minutes, and move money across borders without a branch queue in
          sight.
        </p>

        <div class="hero-actions">
          <a href="#wallet" class="btn-pink"> Open Your Wallet </a>

          <a href="#developer" class="btn-outline"> View Documentation </a>
        </div>

        <div class="hero-trust">
          <span>✓ CBN Licensed</span>
          <span>✓ Settles in seconds</span>
          <span>✓ PCI-DSS Certified</span>
        </div>
      </div>

      <!-- RIGHT SIDE -->

      <div class="hero-visual">
        <!-- CURRENCY ORBIT -->

        <div class="currency-orbit">
          <div class="orbit-ring orbit-ring-one"></div>
          <div class="orbit-ring orbit-ring-two"></div>

          <div
            v-for="currency in currencies"
            :key="currency.code"
            class="currency-item"
            :style="{ '--delay': currency.delay }"
          >
            <div class="currency-badge">
              <strong>
                {{ currency.symbol }}
              </strong>

              <span>
                {{ currency.code }}
              </span>
            </div>
          </div>
        </div>

        <!-- PHONE -->

        <div class="phone-wrap">
          <div class="phone-glow"></div>

          <div class="phone">
            <div class="phone-screen">
              <Transition name="screen" mode="in-out">
                <img
                  :key="screens[activeScreen].name"
                  :src="screens[activeScreen].image"
                  :alt="screens[activeScreen].name"
                />
              </Transition>
            </div>
          </div>
        </div>

        <!-- SCREEN LIST -->

        <div class="screen-selector">
          <button
            v-for="(screen, index) in screens"
            :key="screen.name"
            type="button"
            class="screen-item"
            :class="{ active: activeScreen === index }"
            @click="selectScreen(index)"
          >
            <span class="screen-number">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <span class="screen-name">
              {{ screen.name }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 760px;
  overflow: hidden;
  background: var(--bg);
}

.hero-inner {
  min-height: 760px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  padding-top: 72px;
  padding-bottom: 72px;
}

.hero-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero-glow-one {
  top: 120px;
  right: 8%;
  background: var(--glow-1);
  opacity: 0.2;
}

.hero-glow-two {
  bottom: -120px;
  right: 30%;
  background: var(--glow-2);
  opacity: 0.16;
}

.hero-copy {
  position: relative;
  z-index: 3;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 13px;
  margin-bottom: 24px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--grey);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 0 5px var(--pink-light);
}

.hero-copy h1 {
  font-size: clamp(58px, 6vw, 86px);
  line-height: 0.94;
  letter-spacing: -3.5px;
  color: var(--navy);
}

.hero-copy h1 span {
  color: var(--pink);
}

.hero-description {
  max-width: 570px;
  margin: 25px 0 0;
  color: var(--grey);
  font-size: 16px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 29px;
}

.hero-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition:
    transform var(--dur-med) var(--ease),
    box-shadow var(--dur-med) var(--ease),
    border-color var(--dur-med) var(--ease);
}

.hero-actions a:hover {
  transform: translateY(-2px);
}

.hero-actions a:active {
  transform: translateY(0);
}

.hero-actions .btn-pink {
  box-shadow: var(--shadow-pink-sm);
}

.hero-actions .btn-pink:hover {
  box-shadow: var(--shadow-pink-md);
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  margin-top: 21px;
  color: var(--grey);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.hero-visual {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-wrap {
  position: relative;
  z-index: 4;
}

.phone-glow {
  position: absolute;
  inset: 40px -50px;
  background: var(--glow-1);
  filter: blur(55px);
  border-radius: 50%;
  opacity: 0.34;
}

.phone {
  position: relative;
  width: 285px;
  height: 575px;
  padding: 8px;
  border-radius: 40px;
  background: #111018;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 34px 78px rgba(27, 22, 64, 0.28),
    0 10px 24px rgba(27, 22, 64, 0.18),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 33px;
  background: white;
}

.phone-screen img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

/* =========================
   CURRENCY ORBIT
========================= */

.currency-orbit {
  position: absolute;
  width: 540px;
  height: 540px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
}

.orbit-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.orbit-ring-one {
  inset: 20px;
  border: 1px solid rgba(224, 30, 122, 0.12);
}

.orbit-ring-two {
  inset: 75px;
  border: 1px solid rgba(37, 30, 92, 0.08);
}

/* EACH CURRENCY */

.currency-item {
  position: absolute;
  left: 50%;
  top: 50%;

  width: 72px;
  height: 72px;

  margin-left: -36px;
  margin-top: -36px;

  animation: currencyOrbit 7s linear infinite;
  animation-delay: var(--delay);

  transform-origin: 36px 36px;
}

/* CURRENCY BADGE */

.currency-badge {
  width: 64px;
  height: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.9);

  border: 1px solid rgba(224, 30, 122, 0.13);

  box-shadow:
    0 12px 30px rgba(20, 18, 27, 0.08),
    0 4px 12px rgba(224, 30, 122, 0.08);

  backdrop-filter: blur(12px);
}

.currency-badge strong {
  color: var(--pink);

  font-family: "Fraunces", serif;

  font-size: 20px;
  font-weight: 700;

  line-height: 1;
}

.currency-badge span {
  margin-top: 4px;

  color: var(--grey);

  font-family: "IBM Plex Mono", monospace;

  font-size: 8px;
  font-weight: 500;
}

/* ACTUAL CIRCULAR MOVEMENT */

.currency-item:nth-of-type(3) {
  transform: rotate(0deg) translateX(235px);
}

.currency-item:nth-of-type(4) {
  transform: rotate(51deg) translateX(235px);
}

.currency-item:nth-of-type(5) {
  transform: rotate(102deg) translateX(235px);
}

.currency-item:nth-of-type(6) {
  transform: rotate(153deg) translateX(235px);
}

.currency-item:nth-of-type(7) {
  transform: rotate(204deg) translateX(235px);
}

.currency-item:nth-of-type(8) {
  transform: rotate(255deg) translateX(235px);
}

.currency-item:nth-of-type(9) {
  transform: rotate(306deg) translateX(235px);
}

@keyframes currencyOrbit {
  0% {
    transform: rotate(0deg) translateX(235px) rotate(0deg);
  }

  100% {
    transform: rotate(360deg) translateX(235px) rotate(-360deg);
  }
}

/* =========================
   PHONE
========================= */

.phone-wrap {
  position: relative;
  z-index: 4;
}

.phone-glow {
  position: absolute;

  inset: 40px -50px;

  background: var(--glow-1);

  filter: blur(55px);

  border-radius: 50%;

  opacity: 0.34;
}

.phone {
  position: relative;

  width: 285px;
  height: 575px;

  padding: 8px;

  border-radius: 40px;

  background: #111018;
  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow:
    0 34px 78px rgba(27, 22, 64, 0.28),
    0 10px 24px rgba(27, 22, 64, 0.18),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;

  border-radius: 33px;

  background: white;
}

.phone-screen img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}

.screen-enter-active,
.screen-leave-active {
  transition:
    opacity 0.58s var(--ease-out),
    transform 0.58s var(--ease-out);
}

.screen-enter-from {
  opacity: 0;
  transform: translate(10px, -8px) scale(0.99);
}

.screen-enter-to {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.screen-leave-from {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.screen-leave-to {
  opacity: 0;
  transform: translate(-10px, -8px) scale(0.99);
}

/* =========================
   SCREEN SELECTOR
========================= */

.screen-selector {
  position: absolute;

  z-index: 8;

  top: 50%;
  right: 0;

  display: flex;
  flex-direction: column;

  gap: 7px;

  width: 135px;

  transform: translateY(-50%);
}

.screen-item {
  display: flex;
  align-items: center;

  gap: 9px;

  width: 100%;

  padding: 9px 10px;

  border: 1px solid transparent;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.78);

  color: var(--grey);

  font-size: 10px;
  font-weight: 600;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    border-color 0.25s ease;
}

.screen-item:hover {
  background: var(--surface);

  color: var(--navy);

  transform: translateX(-3px);
}

.screen-item.active {
  background: var(--surface);

  color: var(--pink);

  border-color: rgba(224, 30, 122, 0.15);

  box-shadow: var(--shadow-sm);
}

.screen-number {
  font-family: "IBM Plex Mono", monospace;

  font-size: 8px;

  opacity: 0.55;
}

.screen-name {
  font-weight: 700;

  white-space: nowrap;
}

@media (max-width: 1000px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-visual {
    min-height: 650px;
  }

  .screen-selector {
    right: 0;
    max-width: calc(100% - 20px);
  }
}

@media (max-width: 700px) {
  .hero-inner {
    padding-top: 50px;
  }

  .hero-copy h1 {
    font-size: 52px;
    letter-spacing: -2.5px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-trust {
    justify-content: center;
  }

  .phone {
    width: 255px;
    height: 515px;
  }

  .screen-selector {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .currency-badge {
    transform: scale(0.8);
  }
}
</style>
