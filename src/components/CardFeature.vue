<script setup>
import { ref } from 'vue'

const banks = [
  'GTBank',
  'Fidelity Bank',
  '9 Payment Service Bank',
  'Providus Bank',
  'Polaris Bank'
]

const activeBank = ref(0)

function selectBank(index) {
  activeBank.value = index
}
</script>

<template>
  <section class="section card-feature premium-card-section">
    <div class="wrap">

      <!-- SECTION INTRO -->
      <div class="card-section-intro" v-reveal>

        <div>
          <p class="eyebrow">The 1app card</p>

          <h2>
            Your card.
            <span>More connected.</span>
          </h2>
        </div>

        <p class="card-intro-copy">
          One card designed to sit across the way you already move money —
          giving your everyday spending a simpler connection to your accounts.
        </p>

      </div>


      <!-- MAIN CARD EXPERIENCE -->
      <div class="card-experience" v-reveal>

        <!-- BACKGROUND DETAILS -->
        <div class="card-grid"></div>
        <div class="card-glow"></div>

        <!-- LEFT INFORMATION -->
        <div class="card-info">

          <div class="card-number">
            01
          </div>

          <div>
            <span class="card-kicker">
              ONE CARD · MULTIPLE CONNECTIONS
            </span>

            <h3>
              Spend without
              <em>the extra steps.</em>
            </h3>

            <p>
              Connect your existing banking relationships and keep your
              spending experience in one place.
            </p>
          </div>

          <div class="card-status">
            <span class="status-dot"></span>
            Card experience
          </div>

        </div>


        <!-- CARD VISUAL -->
        <div
          class="card-visual"
          :class="{ 'card-shift': activeBank !== 0 }"
        >

          <div class="card-orbit orbit-one"></div>
          <div class="card-orbit orbit-two"></div>

          <div class="floating-label label-top">
            <span>01</span>
            Connected
          </div>

          <div class="floating-label label-bottom">
            <span>05</span>
            Bank links
          </div>

          <img
            src="/assets/card-multi-bank.jpg"
            alt="1app card connected to multiple Nigerian bank accounts"
          />

        </div>


        <!-- BANK CONNECTIONS -->
        <div class="bank-connections">

          <div class="connection-heading">
            <span>Connected accounts</span>
            <small>
              {{ String(activeBank + 1).padStart(2, '0') }}/05
            </small>
          </div>

          <div class="bank-list">

            <button
              v-for="(bank, index) in banks"
              :key="bank"
              :class="{ active: index === activeBank }"
              @click="selectBank(index)"
            >
              <span class="bank-index">
                0{{ index + 1 }}
              </span>

              <span>
                {{ bank }}
              </span>

              <i>↗</i>
            </button>

          </div>

        </div>

      </div>


      <!-- BOTTOM STATEMENT -->
      <div class="card-bottom" v-reveal>

        <span>ONE EXPERIENCE</span>

        <p>
          Your banking relationships stay where they are.
          <strong>Your spending experience becomes simpler.</strong>
        </p>

        <span>01APP</span>

      </div>

    </div>
  </section>
</template>


<style scoped>

.premium-card-section {
  position: relative;
  overflow: hidden;

  padding-top: clamp(7rem, 12vw, 11rem);
  padding-bottom: clamp(7rem, 12vw, 11rem);

  background: #faf8fa;
}


/* =========================================================
   INTRO
   ========================================================= */

.card-section-intro {
  display: grid;
  grid-template-columns: 1.1fr .65fr;
  gap: 5rem;
  align-items: end;

  margin-bottom: 4rem;
}

.card-section-intro h2 {
  max-width: 680px;

  margin-top: .8rem;

  font-family: var(--font-display, "Fraunces", Georgia, serif);
  font-size: clamp(3.5rem, 6.5vw, 7rem);
  line-height: .88;
  letter-spacing: -.06em;
  font-weight: 600;
}

.card-section-intro h2 span {
  display: block;

  color: var(--brand, #e01e7a);

  font-style: italic;
}

.card-intro-copy {
  max-width: 390px;

  padding-bottom: .4rem;

  color: var(--ink-soft, #6b6875);

  font-size: 1rem;
  line-height: 1.75;
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

.card-experience {
  position: relative;
  overflow: hidden;

  min-height: 620px;

  display: grid;
  grid-template-columns: .85fr 1.15fr;
  grid-template-rows: 1fr auto;

  padding: clamp(2rem, 5vw, 4rem);

  border-radius: 36px;

  background:
    radial-gradient(
      circle at 70% 45%,
      rgba(224,30,122,.24),
      transparent 30%
    ),
    radial-gradient(
      circle at 20% 90%,
      rgba(100,86,180,.15),
      transparent 30%
    ),
    #19153d;

  color: #fff;

  box-shadow:
    0 35px 90px rgba(27,22,64,.17);
}


.card-grid {
  position: absolute;
  inset: 0;

  opacity: .10;

  background-image:
    linear-gradient(
      rgba(255,255,255,.35) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,.35) 1px,
      transparent 1px
    );

  background-size: 70px 70px;

  mask-image:
    radial-gradient(
      circle at 70% 50%,
      black,
      transparent 70%
    );

  pointer-events: none;
}


.card-glow {
  position: absolute;

  width: 420px;
  height: 420px;

  right: 8%;
  top: 10%;

  border-radius: 50%;

  background: rgba(224,30,122,.16);

  filter: blur(80px);

  pointer-events: none;
}


/* =========================================================
   INFORMATION
   ========================================================= */

.card-info {
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 400px;
}

.card-number {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(255,255,255,.12);
  border-radius: 50%;

  color: rgba(255,255,255,.5);

  font-family: var(--font-mono, monospace);
  font-size: .62rem;
}


.card-kicker {
  color: rgba(255,255,255,.42);

  font-family: var(--font-mono, monospace);
  font-size: .58rem;
  letter-spacing: .15em;
}


.card-info h3 {
  max-width: 430px;

  margin-top: 1rem;

  font-family: var(--font-display, "Fraunces", Georgia, serif);
  font-size: clamp(2.8rem, 5vw, 5.3rem);
  line-height: .9;
  letter-spacing: -.055em;
}


.card-info h3 em {
  display: block;

  color: #e95a9b;

  font-style: italic;
}


.card-info p {
  max-width: 360px;

  margin-top: 1.2rem;

  color: rgba(255,255,255,.56);

  font-size: .9rem;
  line-height: 1.75;
}


.card-status {
  display: flex;
  align-items: center;
  gap: .6rem;

  width: fit-content;

  padding: .55rem .8rem;

  border: 1px solid rgba(255,255,255,.10);
  border-radius: 999px;

  color: rgba(255,255,255,.52);

  font-family: var(--font-mono, monospace);
  font-size: .58rem;

  background: rgba(255,255,255,.04);
}


.status-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #e01e7a;

  box-shadow:
    0 0 0 5px rgba(224,30,122,.12);
}


/* =========================================================
   CARD VISUAL
   ========================================================= */

.card-visual {
  position: relative;
  z-index: 2;

  display: grid;
  place-items: center;

  min-height: 420px;

  perspective: 1200px;

  transition: transform .6s cubic-bezier(.2,.8,.2,1);
}


.card-visual.card-shift {
  transform: translateY(-5px);
}


.card-visual img {
  position: relative;
  z-index: 3;

  width: min(100%, 650px);

  border-radius: 24px;

  transform:
    rotate(-5deg)
    translateY(5px);

  box-shadow:
    0 45px 80px rgba(0,0,0,.30),
    0 10px 30px rgba(224,30,122,.14);

  transition:
    transform .7s cubic-bezier(.2,.8,.2,1),
    filter .5s ease;
}


.card-visual:hover img {
  transform:
    rotate(-2deg)
    translateY(-8px)
    scale(1.025);

  filter:
    drop-shadow(0 20px 30px rgba(224,30,122,.12));
}


/* ORBITS */

.card-orbit {
  position: absolute;

  border: 1px solid rgba(255,255,255,.08);

  border-radius: 50%;

  pointer-events: none;
}


.orbit-one {
  width: 470px;
  height: 470px;

  animation: orbitFloat 8s ease-in-out infinite;
}


.orbit-two {
  width: 330px;
  height: 330px;

  border-color: rgba(224,30,122,.20);

  animation: orbitFloat 6s ease-in-out infinite reverse;
}


@keyframes orbitFloat {

  0%, 100% {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(1.04) rotate(4deg);
  }

}


/* FLOATING LABELS */

.floating-label {
  position: absolute;
  z-index: 5;

  display: flex;
  align-items: center;
  gap: .55rem;

  padding: .55rem .75rem;

  border: 1px solid rgba(255,255,255,.11);
  border-radius: 10px;

  background: rgba(255,255,255,.08);

  color: rgba(255,255,255,.72);

  font-family: var(--font-mono, monospace);
  font-size: .55rem;

  backdrop-filter: blur(14px);

  box-shadow:
    0 15px 35px rgba(0,0,0,.12);
}


.floating-label span {
  color: #e95a9b;
}


.label-top {
  right: 8%;
  top: 18%;

  animation: labelFloat 4s ease-in-out infinite;
}


.label-bottom {
  left: 8%;
  bottom: 18%;

  animation: labelFloat 4s ease-in-out infinite reverse;
}


@keyframes labelFloat {

  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }

}


/* =========================================================
   BANK CONNECTIONS
   ========================================================= */

.bank-connections {
  position: relative;
  z-index: 5;

  grid-column: 1 / -1;

  margin-top: 2rem;

  padding-top: 1.2rem;

  border-top: 1px solid rgba(255,255,255,.10);
}


.connection-heading {
  display: flex;
  justify-content: space-between;

  margin-bottom: .7rem;

  color: rgba(255,255,255,.38);

  font-family: var(--font-mono, monospace);
  font-size: .55rem;
  text-transform: uppercase;
  letter-spacing: .12em;
}


.connection-heading small {
  color: rgba(255,255,255,.22);
}


.bank-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: .5rem;
}


.bank-list button {
  display: flex;
  align-items: center;
  gap: .55rem;

  min-width: 0;

  padding: .75rem .8rem;

  border: 1px solid rgba(255,255,255,.08);
  border-radius: 12px;

  background: rgba(255,255,255,.035);

  color: rgba(255,255,255,.43);

  font-size: .65rem;
  font-weight: 600;

  text-align: left;

  cursor: pointer;

  transition:
    background .25s ease,
    border-color .25s ease,
    color .25s ease,
    transform .25s ease;
}


.bank-list button:hover {
  transform: translateY(-2px);

  background: rgba(255,255,255,.07);

  color: #fff;
}


.bank-list button.active {
  border-color: rgba(224,30,122,.35);

  background: rgba(224,30,122,.13);

  color: #fff;

  box-shadow:
    inset 0 0 0 1px rgba(224,30,122,.06);
}


.bank-index {
  color: rgba(255,255,255,.22);

  font-family: var(--font-mono, monospace);
  font-size: .52rem;
}


.bank-list button.active .bank-index {
  color: #e95a9b;
}


.bank-list button i {
  margin-left: auto;

  color: rgba(255,255,255,.20);

  font-style: normal;
}


.bank-list button.active i {
  color: #e95a9b;
}


/* =========================================================
   BOTTOM STATEMENT
   ========================================================= */

.card-bottom {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: center;

  margin-top: 1.5rem;
  padding: 1.3rem 0;

  border-top: 1px solid rgba(27,22,64,.10);
  border-bottom: 1px solid rgba(27,22,64,.10);
}


.card-bottom span {
  color: #aaa5af;

  font-family: var(--font-mono, monospace);
  font-size: .55rem;
  letter-spacing: .12em;
}


.card-bottom p {
  max-width: 600px;

  justify-self: center;

  color: #6b6875;

  font-size: .8rem;
  line-height: 1.6;

  text-align: center;
}


.card-bottom strong {
  color: #1b1640;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1000px) {

  .card-experience {
    grid-template-columns: 1fr;
  }

  .card-info {
    max-width: 500px;
    gap: 2rem;
  }

  .card-visual {
    min-height: 380px;
  }

  .bank-list {
    grid-template-columns: repeat(3, 1fr);
  }

}


@media (max-width: 760px) {

  .card-section-intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-section-intro h2 {
    font-size: 3.5rem;
  }

  .card-experience {
    min-height: auto;

    padding: 1.5rem;

    border-radius: 26px;
  }

  .card-info h3 {
    font-size: 3rem;
  }

  .card-visual {
    min-height: 300px;
  }

  .orbit-one {
    width: 300px;
    height: 300px;
  }

  .orbit-two {
    width: 220px;
    height: 220px;
  }

  .floating-label {
    display: none;
  }

  .bank-list {
    grid-template-columns: 1fr;
  }

  .card-bottom {
    grid-template-columns: 1fr;
    gap: .7rem;

    text-align: left;
  }

  .card-bottom p {
    justify-self: start;

    text-align: left;
  }

}
</style>