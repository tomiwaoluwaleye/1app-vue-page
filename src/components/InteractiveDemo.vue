<script setup>
import { ref, computed } from 'vue'

const corridors = [
  {
    to: 'United Kingdom',
    code: 'GBP',
    symbol: '£',
    rate: 0.00049,
    flag: '🇬🇧',
    city: 'London'
  },
  {
    to: 'United States',
    code: 'USD',
    symbol: '$',
    rate: 0.00062,
    flag: '🇺🇸',
    city: 'New York'
  },
  {
    to: 'Kenya',
    code: 'KES',
    symbol: 'KSh',
    rate: 0.081,
    flag: '🇰🇪',
    city: 'Nairobi'
  },
  {
    to: 'Ghana',
    code: 'GHS',
    symbol: '₵',
    rate: 0.0093,
    flag: '🇬🇭',
    city: 'Accra'
  }
]

const amount = ref(500000)
const corridorIndex = ref(0)

const corridor = computed(
  () => corridors[corridorIndex.value]
)

const feeRate = 0.004

const fee = computed(() =>
  Math.round(amount.value * feeRate)
)

const received = computed(() =>
  Math.max(
    0,
    (amount.value - fee.value) * corridor.value.rate
  ).toFixed(2)
)

const formattedReceived = computed(() =>
  Number(received.value).toLocaleString()
)

function selectCorridor(index) {
  corridorIndex.value = index
}

function setAmount(value) {
  amount.value = value
}
</script>


<template>
  <section id="demo" class="section transfer-demo">

    <div class="wrap">

      <!-- INTRO -->
      <div class="transfer-intro" v-reveal>

        <div>
          <p class="eyebrow">
            Move money globally
          </p>

          <h2>
            Know the journey
            <span>before you start.</span>
          </h2>
        </div>

        <p>
          Choose where your money is going, enter an amount and
          explore an example of the transfer experience.
        </p>

      </div>


      <!-- TRANSFER STUDIO -->
      <div class="transfer-studio" v-reveal>

        <div class="studio-grid"></div>

        <!-- HEADER -->
        <div class="studio-header">

          <div>
            <span class="studio-kicker">
              TRANSFER STUDIO
            </span>

            <h3>
              Send from
              <strong>Lagos</strong>
            </h3>
          </div>

          <div class="studio-status">
            <span></span>
            Interactive preview
          </div>

        </div>


        <!-- ROUTE -->
        <div class="transfer-route">

          <!-- SOURCE -->
          <div class="route-location">

            <div class="location-icon">
              🇳🇬
            </div>

            <div>
              <small>FROM</small>
              <strong>Nigeria</strong>
              <span>NGN · ₦</span>
            </div>

          </div>


          <!-- CONNECTOR -->
          <div class="route-connector">

            <div class="route-line"></div>

            <div class="route-dot"></div>

            <span>
              1app
            </span>

          </div>


          <!-- DESTINATION -->
          <div class="route-location destination">

            <div class="location-icon">
              {{ corridor.flag }}
            </div>

            <div>
              <small>TO</small>
              <strong>{{ corridor.to }}</strong>
              <span>
                {{ corridor.code }} · {{ corridor.symbol }}
              </span>
            </div>

          </div>

        </div>


        <!-- MAIN CALCULATOR -->
        <div class="transfer-panel">

          <!-- AMOUNT -->
          <div class="amount-section">

            <div class="field-label">
              <span>You send</span>
              <small>NGN</small>
            </div>

            <div class="amount-input">

              <span class="currency-symbol">
                ₦
              </span>

              <input
                v-model.number="amount"
                type="number"
                min="1000"
                step="1000"
                aria-label="Amount to send"
              />

            </div>


            <!-- QUICK AMOUNTS -->
            <div class="quick-amounts">

              <button
                @click="setAmount(100000)"
                :class="{ active: amount === 100000 }"
              >
                ₦100k
              </button>

              <button
                @click="setAmount(250000)"
                :class="{ active: amount === 250000 }"
              >
                ₦250k
              </button>

              <button
                @click="setAmount(500000)"
                :class="{ active: amount === 500000 }"
              >
                ₦500k
              </button>

              <button
                @click="setAmount(1000000)"
                :class="{ active: amount === 1000000 }"
              >
                ₦1m
              </button>

            </div>

          </div>


          <!-- RESULT -->
          <div class="receive-section">

            <div class="field-label">
              <span>Recipient gets</span>
              <small>{{ corridor.code }}</small>
            </div>

            <div class="received-amount">

              <Transition name="amount" mode="out-in">

                <strong :key="received">
                  {{ corridor.symbol }}{{ formattedReceived }}
                </strong>

              </Transition>

            </div>

            <p>
              Example conversion for
              <strong>{{ corridor.city }}</strong>
            </p>

          </div>

        </div>


        <!-- CORRIDORS -->
        <div class="corridor-section">

          <div class="corridor-heading">
            <span>Choose destination</span>
            <small>
              {{ String(corridorIndex + 1).padStart(2, '0') }}/04
            </small>
          </div>

          <div class="corridor-list">

            <button
              v-for="(item, index) in corridors"
              :key="item.code"
              class="corridor"
              :class="{ active: index === corridorIndex }"
              @click="selectCorridor(index)"
            >

              <span class="corridor-flag">
                {{ item.flag }}
              </span>

              <span class="corridor-name">
                {{ item.to }}
              </span>

              <span class="corridor-code">
                {{ item.code }}
              </span>

              <span class="corridor-arrow">
                ↗
              </span>

            </button>

          </div>

        </div>


        <!-- FOOTER -->
        <div class="studio-footer">

          <div>
            <span>Transfer fee</span>
            <strong>
              ₦{{ fee.toLocaleString() }}
            </strong>
          </div>

          <div>
            <span>Destination</span>
            <strong>
              {{ corridor.city }}
            </strong>
          </div>

          <div>
            <span>Example rate</span>
            <strong>
              {{ corridor.rate }}
            </strong>
          </div>

          <a
            href="#wallet"
            class="studio-cta"
          >
            Continue
            <span>→</span>
          </a>

        </div>

      </div>


      <!-- BOTTOM NOTE -->
      <div class="transfer-note" v-reveal>

        <span>
          GLOBAL MONEY MOVEMENT
        </span>

        <p>
          See the numbers first.
          <strong>Then make your move.</strong>
        </p>

        <span>
          1APP
        </span>

      </div>

    </div>

  </section>
</template>


<style scoped>

/* =========================================================
   SECTION
   ========================================================= */

.transfer-demo {
  padding-top: clamp(7rem, 12vw, 11rem);
  padding-bottom: clamp(7rem, 12vw, 11rem);

  background: #fff;
}


.transfer-intro {
  display: grid;
  grid-template-columns: 1.1fr .65fr;

  gap: 5rem;

  align-items: end;

  margin-bottom: 4rem;
}


.transfer-intro h2 {
  max-width: 720px;

  margin-top: .8rem;

  font-family:
    var(--font-display, "Fraunces", Georgia, serif);

  font-size:
    clamp(3.5rem, 6.5vw, 7rem);

  line-height: .88;

  letter-spacing: -.06em;

  font-weight: 600;
}


.transfer-intro h2 span {
  display: block;

  color:
    var(--brand, #e01e7a);

  font-style: italic;
}


.transfer-intro > p {
  max-width: 390px;

  color:
    var(--ink-soft, #6b6875);

  font-size: 1rem;

  line-height: 1.75;
}


/* =========================================================
   STUDIO
   ========================================================= */

.transfer-studio {
  position: relative;

  overflow: hidden;

  padding:
    clamp(1.5rem, 4vw, 3.5rem);

  border-radius: 36px;

  background:
    radial-gradient(
      circle at 75% 30%,
      rgba(224,30,122,.20),
      transparent 28%
    ),
    radial-gradient(
      circle at 20% 90%,
      rgba(100,86,180,.13),
      transparent 32%
    ),
    #19153d;

  color: #fff;

  box-shadow:
    0 35px 90px rgba(27,22,64,.17);
}


.studio-grid {
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
      circle at center,
      black,
      transparent 72%
    );

  pointer-events: none;
}


/* =========================================================
   HEADER
   ========================================================= */

.studio-header {
  position: relative;
  z-index: 2;

  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: 2rem;
}


.studio-kicker {
  color:
    rgba(255,255,255,.40);

  font-family:
    var(--font-mono, monospace);

  font-size: .58rem;

  letter-spacing: .16em;
}


.studio-header h3 {
  margin-top: .65rem;

  font-family:
    var(--font-display, "Fraunces", Georgia, serif);

  font-size:
    clamp(2.2rem, 4vw, 4rem);

  line-height: .95;

  letter-spacing: -.05em;
}


.studio-header h3 strong {
  color: #e95a9b;

  font-style: italic;

  font-weight: 600;
}


.studio-status {
  display: flex;

  align-items: center;

  gap: .55rem;

  padding: .55rem .8rem;

  border:
    1px solid rgba(255,255,255,.10);

  border-radius: 999px;

  background:
    rgba(255,255,255,.04);

  color:
    rgba(255,255,255,.55);

  font-family:
    var(--font-mono, monospace);

  font-size: .56rem;
}


.studio-status span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #e01e7a;

  box-shadow:
    0 0 0 5px rgba(224,30,122,.12);
}


/* =========================================================
   ROUTE
   ========================================================= */

.transfer-route {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;

  gap: 2rem;

  max-width: 900px;

  margin: 4rem auto 3rem;
}


.route-location {
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 1rem;

  border:
    1px solid rgba(255,255,255,.09);

  border-radius: 17px;

  background:
    rgba(255,255,255,.045);

  backdrop-filter: blur(12px);
}


.location-icon {
  display: grid;

  place-items: center;

  width: 46px;
  height: 46px;

  flex: 0 0 auto;

  border-radius: 14px;

  background:
    rgba(255,255,255,.08);

  font-size: 1.25rem;
}


.route-location small {
  display: block;

  color:
    rgba(255,255,255,.30);

  font-family:
    var(--font-mono, monospace);

  font-size: .5rem;

  letter-spacing: .12em;
}


.route-location strong {
  display: block;

  margin-top: .2rem;

  font-size: .9rem;
}


.route-location span {
  display: block;

  margin-top: .2rem;

  color:
    rgba(255,255,255,.38);

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;
}


/* CONNECTOR */

.route-connector {
  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  height: 80px;
}


.route-line {
  position: absolute;

  left: 0;
  right: 0;

  top: 50%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(224,30,122,.55),
      transparent
    );
}


.route-dot {
  position: relative;
  z-index: 2;

  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #e01e7a;

  box-shadow:
    0 0 0 7px rgba(224,30,122,.12),
    0 0 30px rgba(224,30,122,.45);

  animation:
    routePulse 2.2s ease-in-out infinite;
}


.route-connector span {
  position: absolute;

  top: calc(50% + 18px);

  color:
    rgba(255,255,255,.28);

  font-family:
    var(--font-mono, monospace);

  font-size: .5rem;

  letter-spacing: .12em;
}


@keyframes routePulse {

  0%, 100% {
    transform: scale(.8);
    opacity: .65;
  }

  50% {
    transform: scale(1.15);
    opacity: 1;
  }

}


/* =========================================================
   TRANSFER PANEL
   ========================================================= */

.transfer-panel {
  position: relative;
  z-index: 3;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 1px;

  max-width: 900px;

  margin: 0 auto;

  border:
    1px solid rgba(255,255,255,.09);

  border-radius: 24px;

  overflow: hidden;

  background:
    rgba(255,255,255,.08);
}


.amount-section,
.receive-section {
  padding: 1.7rem;

  background:
    rgba(20,17,50,.76);

  backdrop-filter: blur(16px);
}


.field-label {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: .6rem;

  color:
    rgba(255,255,255,.45);

  font-family:
    var(--font-mono, monospace);

  font-size: .55rem;

  text-transform: uppercase;

  letter-spacing: .1em;
}


.field-label small {
  color:
    rgba(255,255,255,.24);
}


/* AMOUNT */

.amount-input {
  display: flex;

  align-items: center;

  gap: .65rem;

  padding: .8rem 0;

  border-bottom:
    1px solid rgba(255,255,255,.10);
}


.currency-symbol {
  color: #e95a9b;

  font-family:
    var(--font-display, Georgia, serif);

  font-size: 2rem;
}


.amount-input input {
  width: 100%;

  border: 0;

  outline: 0;

  background: transparent;

  color: #fff;

  font-family:
    var(--font-display, Georgia, serif);

  font-size:
    clamp(2rem, 4vw, 3.5rem);

  letter-spacing: -.04em;
}


.amount-input input::-webkit-inner-spin-button,
.amount-input input::-webkit-outer-spin-button {
  appearance: none;

  margin: 0;
}


.quick-amounts {
  display: flex;

  flex-wrap: wrap;

  gap: .4rem;

  margin-top: 1rem;
}


.quick-amounts button {
  padding: .42rem .65rem;

  border:
    1px solid rgba(255,255,255,.08);

  border-radius: 999px;

  background:
    rgba(255,255,255,.035);

  color:
    rgba(255,255,255,.42);

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  cursor: pointer;

  transition:
    background .25s ease,
    color .25s ease,
    border-color .25s ease;
}


.quick-amounts button:hover,
.quick-amounts button.active {
  border-color:
    rgba(224,30,122,.35);

  background:
    rgba(224,30,122,.12);

  color: #fff;
}


/* RESULT */

.received-amount {
  display: flex;

  align-items: baseline;

  min-height: 76px;

  padding: .55rem 0;

  border-bottom:
    1px solid rgba(255,255,255,.10);
}


.received-amount strong {
  color: #fff;

  font-family:
    var(--font-display, Georgia, serif);

  font-size:
    clamp(2.2rem, 4vw, 3.5rem);

  letter-spacing: -.05em;
}


.receive-section > p {
  margin-top: .85rem;

  color:
    rgba(255,255,255,.30);

  font-size: .62rem;
}


.receive-section > p strong {
  color:
    rgba(255,255,255,.55);
}


/* NUMBER TRANSITION */

.amount-enter-active,
.amount-leave-active {
  transition:
    opacity .25s ease,
    transform .25s ease;
}


.amount-enter-from {
  opacity: 0;

  transform:
    translateY(8px);
}


.amount-leave-to {
  opacity: 0;

  transform:
    translateY(-8px);
}


/* =========================================================
   CORRIDORS
   ========================================================= */

.corridor-section {
  position: relative;

  z-index: 3;

  max-width: 900px;

  margin: 2rem auto 0;
}


.corridor-heading {
  display: flex;

  justify-content: space-between;

  margin-bottom: .65rem;

  color:
    rgba(255,255,255,.32);

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  text-transform: uppercase;

  letter-spacing: .12em;
}


.corridor-heading small {
  color:
    rgba(255,255,255,.20);
}


.corridor-list {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: .5rem;
}


.corridor {
  display: grid;

  grid-template-columns: auto 1fr auto;

  align-items: center;

  gap: .55rem;

  min-width: 0;

  padding: .75rem;

  border:
    1px solid rgba(255,255,255,.08);

  border-radius: 12px;

  background:
    rgba(255,255,255,.035);

  color:
    rgba(255,255,255,.45);

  text-align: left;

  cursor: pointer;

  transition:
    transform .25s ease,
    background .25s ease,
    border-color .25s ease,
    color .25s ease;
}


.corridor:hover {
  transform: translateY(-2px);

  background:
    rgba(255,255,255,.065);

  color: #fff;
}


.corridor.active {
  border-color:
    rgba(224,30,122,.35);

  background:
    rgba(224,30,122,.12);

  color: #fff;
}


.corridor-flag {
  font-size: 1rem;
}


.corridor-name {
  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  font-size: .6rem;
}


.corridor-code {
  color:
    rgba(255,255,255,.22);

  font-family:
    var(--font-mono, monospace);

  font-size: .48rem;
}


.corridor.active .corridor-code {
  color: #e95a9b;
}


.corridor-arrow {
  display: none;

  color: #e95a9b;
}


/* =========================================================
   FOOTER
   ========================================================= */

.studio-footer {
  position: relative;

  z-index: 3;

  display: grid;

  grid-template-columns:
    1fr 1fr 1fr auto;

  align-items: center;

  gap: 1rem;

  margin-top: 2rem;

  padding-top: 1.2rem;

  border-top:
    1px solid rgba(255,255,255,.09);
}


.studio-footer > div {
  display: flex;

  flex-direction: column;

  gap: .25rem;
}


.studio-footer span {
  color:
    rgba(255,255,255,.28);

  font-family:
    var(--font-mono, monospace);

  font-size: .48rem;

  text-transform: uppercase;

  letter-spacing: .10em;
}


.studio-footer strong {
  color:
    rgba(255,255,255,.72);

  font-size: .68rem;
}


.studio-cta {
  display: flex;

  align-items: center;

  gap: .7rem;

  padding: .75rem 1rem;

  border-radius: 999px;

  background: #e01e7a;

  color: #fff;

  font-size: .65rem;

  font-weight: 700;

  text-decoration: none;

  box-shadow:
    0 12px 30px rgba(224,30,122,.24);

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}


.studio-cta:hover {
  transform: translateY(-2px);

  box-shadow:
    0 16px 38px rgba(224,30,122,.34);
}


/* =========================================================
   BOTTOM NOTE
   ========================================================= */

.transfer-note {
  display: grid;

  grid-template-columns: auto 1fr auto;

  align-items: center;

  gap: 2rem;

  margin-top: 1.5rem;

  padding: 1.3rem 0;

  border-top:
    1px solid rgba(27,22,64,.10);

  border-bottom:
    1px solid rgba(27,22,64,.10);
}


.transfer-note span {
  color: #aaa5af;

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  letter-spacing: .12em;
}


.transfer-note p {
  justify-self: center;

  color:
    var(--ink-soft, #6b6875);

  font-size: .8rem;

  text-align: center;
}


.transfer-note strong {
  color: #1b1640;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {

  .transfer-intro {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .transfer-route {
    grid-template-columns: 1fr;

    gap: .8rem;

    max-width: 500px;

    margin-top: 3rem;
  }

  .route-connector {
    height: 35px;
  }

  .route-line {
    left: 25%;
    right: 25%;
  }

  .route-connector span {
    display: none;
  }

  .transfer-panel {
    grid-template-columns: 1fr;
  }

  .corridor-list {
    grid-template-columns: 1fr 1fr;
  }

  .studio-footer {
    grid-template-columns: 1fr 1fr;
  }

  .studio-cta {
    justify-content: center;
  }

}


@media (max-width: 600px) {

  .transfer-intro h2 {
    font-size: 3.4rem;
  }

  .transfer-studio {
    padding: 1.2rem;

    border-radius: 25px;
  }

  .studio-header {
    flex-direction: column;
  }

  .studio-header h3 {
    font-size: 2.5rem;
  }

  .route-location {
    padding: .8rem;
  }

  .amount-section,
  .receive-section {
    padding: 1.2rem;
  }

  .corridor-list {
    grid-template-columns: 1fr;
  }

  .corridor-arrow {
    display: block;
  }

  .studio-footer {
    grid-template-columns: 1fr;
  }

  .transfer-note {
    grid-template-columns: 1fr;

    gap: .6rem;
  }

  .transfer-note p {
    justify-self: start;

    text-align: left;
  }

}

/* =========================================================
   PREMIUM TRANSFER STUDIO MOTION
   ========================================================= */

.transfer-studio,
.interactive-demo {
  perspective: 1200px;
}

/* Main transfer panel */
.transfer-panel,
.transfer-card,
.demo-card {
  transition:
    transform .5s cubic-bezier(.2,.75,.2,1),
    box-shadow .5s ease;
}

.transfer-panel:hover,
.transfer-card:hover,
.demo-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(27, 22, 64, .12);
}

/* Currency selector */
.currency-select,
.currency-option,
.currency-pill {
  transition:
    transform .3s cubic-bezier(.2,.75,.2,1),
    background .3s ease,
    border-color .3s ease;
}

.currency-select:hover,
.currency-option:hover,
.currency-pill:hover {
  transform: translateY(-3px);
}

/* Active currency */
.currency-select.active,
.currency-option.active,
.currency-pill.active {
  box-shadow: 0 10px 25px rgba(224, 30, 122, .12);
}

/* Amount display */
.transfer-amount,
.amount-display,
.demo-amount {
  animation: amountBreath 4s ease-in-out infinite;
}

@keyframes amountBreath {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.015);
  }
}

/* Transfer arrow */
.transfer-arrow,
.swap-arrow,
.exchange-arrow {
  transition:
    transform .45s cubic-bezier(.2,.75,.2,1),
    background .3s ease;
}

.transfer-arrow:hover,
.swap-arrow:hover,
.exchange-arrow:hover {
  transform: rotate(180deg) scale(1.08);
}

/* Exchange / route line */
.transfer-route,
.exchange-route,
.demo-route {
  position: relative;
}

.transfer-route::after,
.exchange-route::after,
.demo-route::after {
  content: '';
  position: absolute;
  left: 5%;
  right: 5%;
  top: 50%;
  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(224, 30, 122, .5),
    transparent
  );

  animation: transferRoute 2.8s linear infinite;
  pointer-events: none;
}

@keyframes transferRoute {
  0% {
    opacity: .2;
    transform: scaleX(.65);
  }

  50% {
    opacity: 1;
    transform: scaleX(1);
  }

  100% {
    opacity: .2;
    transform: scaleX(.65);
  }
}

/* Result panel */
.transfer-result,
.exchange-result,
.demo-result {
  animation: resultReveal .7s cubic-bezier(.2,.75,.2,1);
}

@keyframes resultReveal {
  from {
    opacity: .5;
    transform: translateY(8px) scale(.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Status indicator */
.transfer-status,
.demo-status,
.status-dot {
  animation: transferStatus 2s ease-in-out infinite;
}

@keyframes transferStatus {
  0%, 100% {
    opacity: .55;
    box-shadow: 0 0 0 0 rgba(224, 30, 122, .15);
  }

  50% {
    opacity: 1;
    box-shadow: 0 0 0 7px rgba(224, 30, 122, .06);
  }
}

/* CTA */
.transfer-cta,
.demo-cta {
  transition:
    transform .35s cubic-bezier(.2,.75,.2,1),
    box-shadow .35s ease;
}

.transfer-cta:hover,
.demo-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(224, 30, 122, .18);
}

@media (prefers-reduced-motion: reduce) {
  .transfer-amount,
  .amount-display,
  .demo-amount,
  .transfer-route::after,
  .exchange-route::after,
  .demo-route::after,
  .transfer-result,
  .exchange-result,
  .demo-result,
  .transfer-status,
  .demo-status,
  .status-dot {
    animation: none;
  }
}


</style>