<script setup>
import { ref, computed } from 'vue'

const routes = [
  {
    from: 'NGN',
    fromSymbol: '₦',
    fromAmount: '450,000',
    to: 'USD',
    toSymbol: '$',
    toAmount: '300.42',
    label: 'International transfer',
    note: 'London · Just now',
  },
  {
    from: 'USD',
    fromSymbol: '$',
    fromAmount: '300.42',
    to: 'GBP',
    toSymbol: '£',
    toAmount: '224.81',
    label: 'Currency exchange',
    note: 'London · Just now',
  },
  {
    from: 'GBP',
    fromSymbol: '£',
    fromAmount: '224.81',
    to: 'NGN',
    toSymbol: '₦',
    toAmount: '336,900',
    label: 'Convert & spend',
    note: 'Lagos · Just now',
  },
]

const activeRoute = ref(0)

const route = computed(() => routes[activeRoute.value])

function selectRoute(index) {
  activeRoute.value = index
}
</script>

<template>
  <section id="product" class="section solution premium-solution">

    <div class="wrap">

      <!-- INTRO -->
      <div class="solution-intro" v-reveal>

        <div>
          <p class="eyebrow">One app. Many ways to move.</p>

          <h2>
            Your money moves
            <em>with you.</em>
          </h2>
        </div>

        <p class="solution-intro-copy">
          From your first payment to your next international transfer,
          1app brings the things you do with money into one simple flow.
        </p>

      </div>


      <!-- MAIN PRODUCT EXPERIENCE -->
      <div class="money-experience" v-reveal>

        <div class="experience-top">

          <div>
            <span class="experience-kicker">
              MONEY MOVEMENT
            </span>

            <h3>
              From Lagos
              <span>to anywhere.</span>
            </h3>

            <p>
              Choose a currency. Set an amount.
              Move when you're ready.
            </p>
          </div>

          <div class="live-status">
            <span></span>
            Interative preview
          </div>

        </div>


        <!-- TRANSACTION VISUAL -->
        <div class="transaction-stage">

          <div class="stage-line"></div>

          <!-- SOURCE -->
          <div class="money-node source-node">

            <div class="node-icon">
              {{ route.fromSymbol }}
            </div>

            <div class="node-info">
              <small>{{ route.from }}</small>

              <strong>
                {{ route.fromSymbol }}{{ route.fromAmount }}
              </strong>

              <span>
                Available balance
              </span>
            </div>

          </div>


          <!-- CENTER -->
          <div class="transfer-core">

            <div class="transfer-ring ring-one"></div>
            <div class="transfer-ring ring-two"></div>

            <button
              class="transfer-button"
              @click="selectRoute((activeRoute + 1) % routes.length)"
              aria-label="Change currency route"
            >
              <span>↗</span>
            </button>

            <div class="transfer-label">
              {{ route.label }}
            </div>

          </div>


          <!-- DESTINATION -->
          <div class="money-node destination-node">

            <div class="node-icon destination">
              {{ route.toSymbol }}
            </div>

            <div class="node-info">
              <small>{{ route.to }}</small>

              <strong>
                {{ route.toSymbol }}{{ route.toAmount }}
              </strong>

              <span>
                {{ route.note }}
              </span>
            </div>

          </div>

        </div>


        <!-- ROUTE CONTROLS -->
        <div class="route-controls">

          <button
            v-for="(item, index) in routes"
            :key="item.label"
            :class="{ active: index === activeRoute }"
            @click="selectRoute(index)"
          >
            <span>{{ item.from }}</span>

            <i>→</i>

            <span>{{ item.to }}</span>
          </button>

        </div>

      </div>


      <!-- SUPPORTING CAPABILITIES -->
      <div class="capability-row">

        <article v-reveal>
          <span class="cap-number">01</span>

          <div>
            <h4>Get paid</h4>

            <p>
              Receive money into the balances you actually use.
            </p>
          </div>

          <span class="cap-arrow">↗</span>
        </article>


        <article v-reveal>
          <span class="cap-number">02</span>

          <div>
            <h4>Spend globally</h4>

            <p>
              Create a virtual card for your online payments.
            </p>
          </div>

          <span class="cap-arrow">↗</span>
        </article>


        <article v-reveal>
          <span class="cap-number">03</span>

          <div>
            <h4>Exchange instantly</h4>

            <p>
              Move between supported currencies without leaving 1app.
            </p>
          </div>

          <span class="cap-arrow">↗</span>
        </article>

      </div>

    </div>

  </section>
</template>


<style scoped>

.premium-solution {
  padding-top: clamp(6rem, 10vw, 10rem);
  padding-bottom: clamp(6rem, 10vw, 10rem);
  background: #fff;
}


/* INTRO */

.solution-intro {
  display: grid;
  grid-template-columns: 1.1fr .65fr;
  gap: 5rem;
  align-items: end;
  margin-bottom: 4rem;
}

.solution-intro h2 {
  max-width: 680px;
  margin-top: .8rem;

  font-family: var(--font-display, "Fraunces", Georgia, serif);
  font-size: clamp(3.4rem, 6vw, 6.5rem);
  line-height: .9;
  letter-spacing: -.055em;
  font-weight: 600;
}

.solution-intro h2 em {
  color: var(--brand, #e01e7a);
  font-style: italic;
}

.solution-intro-copy {
  max-width: 390px;
  padding-bottom: .5rem;

  color: var(--ink-soft, #6b6875);
  font-size: 1rem;
  line-height: 1.75;
}


/* MAIN EXPERIENCE */

.money-experience {
  position: relative;
  overflow: hidden;

  min-height: 570px;
  padding: clamp(2rem, 5vw, 4rem);

  border-radius: 34px;

  background:
    radial-gradient(
      circle at 78% 55%,
      rgba(224, 30, 122, .20),
      transparent 28%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(100, 86, 180, .12),
      transparent 32%
    ),
    #19153d;

  color: #fff;

  box-shadow:
    0 35px 90px rgba(27,22,64,.16);
}


.money-experience::before {
  content: "";

  position: absolute;
  inset: 0;

  opacity: .12;

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
      transparent 75%
    );

  pointer-events: none;
}


.experience-top {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 2rem;
}


.experience-kicker {
  color: rgba(255,255,255,.46);

  font-family: var(--font-mono, monospace);
  font-size: .65rem;
  letter-spacing: .16em;
}


.experience-top h3 {
  max-width: 500px;
  margin-top: .8rem;

  font-family: var(--font-display, "Fraunces", Georgia, serif);
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: .92;
  letter-spacing: -.05em;
}


.experience-top h3 span {
  color: #e95a9b;
  font-style: italic;
}


.experience-top p {
  max-width: 380px;
  margin-top: 1rem;

  color: rgba(255,255,255,.58);

  font-size: .9rem;
  line-height: 1.7;
}


.live-status {
  display: flex;
  align-items: center;
  gap: .5rem;

  padding: .55rem .8rem;

  border: 1px solid rgba(255,255,255,.12);
  border-radius: 999px;

  color: rgba(255,255,255,.65);

  font-family: var(--font-mono, monospace);
  font-size: .62rem;

  background: rgba(255,255,255,.05);
  backdrop-filter: blur(10px);
}


.live-status span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #e01e7a;

  box-shadow:
    0 0 0 5px rgba(224,30,122,.13);
}


/* TRANSACTION */

.transaction-stage {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 900px;

  margin: 5rem auto 3.5rem;
}


.stage-line {
  position: absolute;
  left: 14%;
  right: 14%;
  top: 50%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.28),
      transparent
    );
}


/* MONEY NODE */

.money-node {
  position: relative;
  z-index: 3;

  display: flex;
  align-items: center;
  gap: 1rem;

  width: 250px;
  padding: 1rem;

  border: 1px solid rgba(255,255,255,.10);
  border-radius: 18px;

  background: rgba(255,255,255,.065);

  box-shadow:
    0 18px 45px rgba(0,0,0,.12);

  backdrop-filter: blur(14px);

  transition:
    transform .35s ease,
    background .35s ease;
}


.money-node:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,.09);
}


.node-icon {
  display: grid;
  place-items: center;

  width: 48px;
  height: 48px;

  flex: 0 0 auto;

  border-radius: 15px;

  background: #e01e7a;

  color: #fff;

  font-family: var(--font-display, Georgia, serif);
  font-size: 1.4rem;

  box-shadow:
    0 12px 28px rgba(224,30,122,.25);
}


.node-icon.destination {
  background: #fff;
  color: #19153d;
  box-shadow: none;
}


.node-info small {
  display: block;

  color: rgba(255,255,255,.43);

  font-family: var(--font-mono, monospace);
  font-size: .62rem;
}


.node-info strong {
  display: block;
  margin-top: .2rem;

  font-size: 1rem;
  letter-spacing: -.02em;
}


.node-info span {
  display: block;
  margin-top: .25rem;

  color: rgba(255,255,255,.40);

  font-size: .6rem;
}


/* TRANSFER CORE */

.transfer-core {
  position: relative;
  z-index: 5;

  display: grid;
  place-items: center;

  width: 125px;
  height: 125px;
}


.transfer-ring {
  position: absolute;

  border: 1px solid rgba(224,30,122,.28);
  border-radius: 50%;

  animation: transferPulse 3s ease-in-out infinite;
}


.ring-one {
  inset: 8px;
}


.ring-two {
  inset: -8px;

  border-color: rgba(255,255,255,.08);

  animation-delay: .8s;
}


@keyframes transferPulse {

  0%, 100% {
    transform: scale(.95);
    opacity: .45;
  }

  50% {
    transform: scale(1.05);
    opacity: 1;
  }

}


.transfer-button {
  position: relative;
  z-index: 2;

  display: grid;
  place-items: center;

  width: 58px;
  height: 58px;

  border: 0;
  border-radius: 50%;

  background: #e01e7a;
  color: #fff;

  font-size: 1.2rem;

  cursor: pointer;

  box-shadow:
    0 14px 35px rgba(224,30,122,.30);

  transition:
    transform .3s ease,
    box-shadow .3s ease;
}


.transfer-button:hover {
  transform: scale(1.08) rotate(8deg);

  box-shadow:
    0 18px 45px rgba(224,30,122,.40);
}


.transfer-label {
  position: absolute;
  bottom: -32px;

  color: rgba(255,255,255,.45);

  font-family: var(--font-mono, monospace);
  font-size: .55rem;
  white-space: nowrap;
}


/* ROUTE CONTROLS */

.route-controls {
  position: relative;
  z-index: 3;

  display: flex;
  justify-content: center;
  gap: .5rem;

  flex-wrap: wrap;
}


.route-controls button {
  display: flex;
  align-items: center;
  gap: .6rem;

  padding: .6rem .85rem;

  border: 1px solid rgba(255,255,255,.10);
  border-radius: 999px;

  background: rgba(255,255,255,.04);

  color: rgba(255,255,255,.48);

  font-family: var(--font-mono, monospace);
  font-size: .58rem;

  cursor: pointer;

  transition: all .25s ease;
}


.route-controls button i {
  font-style: normal;
  color: rgba(255,255,255,.25);
}


.route-controls button:hover,
.route-controls button.active {
  border-color: rgba(224,30,122,.35);

  background: rgba(224,30,122,.12);

  color: #fff;
}


/* CAPABILITIES */

.capability-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;

  margin-top: 1px;

  border: 1px solid var(--line, rgba(27,22,64,.1));
  border-radius: 0 0 28px 28px;

  overflow: hidden;
}


.capability-row article {
  position: relative;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: start;

  padding: 1.8rem;

  background: #fff;

  transition:
    background .3s ease,
    transform .3s ease;
}


.capability-row article:hover {
  background: #fff7fa;
}


.cap-number {
  color: var(--brand, #e01e7a);

  font-family: var(--font-mono, monospace);
  font-size: .62rem;
}


.capability-row h4 {
  font-size: .95rem;
  font-weight: 700;
}


.capability-row p {
  max-width: 230px;

  margin-top: .35rem;

  color: var(--ink-soft, #6b6875);

  font-size: .78rem;
  line-height: 1.6;
}


.cap-arrow {
  color: #aaa5af;

  transition:
    transform .25s ease,
    color .25s ease;
}


.capability-row article:hover .cap-arrow {
  color: var(--brand, #e01e7a);
  transform: translate(3px, -3px);
}


/* RESPONSIVE */

@media (max-width: 900px) {

  .solution-intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .money-experience {
    min-height: auto;
  }

  .transaction-stage {
    gap: 1rem;
  }

  .money-node {
    width: 210px;
  }

  .capability-row {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 650px) {

  .solution-intro h2 {
    font-size: 3.2rem;
  }

  .experience-top {
    flex-direction: column;
  }

  .transaction-stage {
    flex-direction: column;
    margin-top: 3rem;
  }

  .stage-line {
    left: 50%;
    right: auto;
    top: 18%;
    bottom: 18%;

    width: 1px;
    height: auto;
  }

  .money-node {
    width: min(100%, 280px);
  }

  .transfer-core {
    transform: rotate(90deg);
  }

  .transfer-label {
    transform: rotate(-90deg);
  }

}

/* =========================================================
   PREMIUM SOLUTION MOTION
   ========================================================= */

.money-experience {
  perspective: 1200px;
}

.money-stage {
  position: relative;
  overflow: hidden;
}

/* subtle moving background */
.money-stage::before {
  content: '';
  position: absolute;
  inset: -30%;
  background:
    radial-gradient(circle at 30% 40%, rgba(224, 30, 122, .08), transparent 28%),
    radial-gradient(circle at 70% 60%, rgba(27, 22, 64, .06), transparent 30%);
  animation: solutionAtmosphere 12s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes solutionAtmosphere {
  from {
    transform: translate3d(-2%, -1%, 0) scale(1);
  }

  to {
    transform: translate3d(2%, 2%, 0) scale(1.05);
  }
}

/* currency nodes */
.money-node {
  transition:
    transform .45s cubic-bezier(.2,.75,.2,1),
    box-shadow .45s ease,
    border-color .35s ease;
}

.money-node:hover {
  transform: translateY(-7px) scale(1.04);
  box-shadow: 0 18px 40px rgba(27, 22, 64, .10);
}

.money-node.active {
  transform: translateY(-4px) scale(1.04);
}

/* route line */
.money-route {
  position: relative;
}

.money-route::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(224, 30, 122, .45),
    transparent
  );
  transform: translateY(-50%);
  animation: routeFlow 2.8s linear infinite;
  pointer-events: none;
}

@keyframes routeFlow {
  from {
    transform: translate(-35%, -50%);
  }

  to {
    transform: translate(35%, -50%);
  }
}

/* moving transaction dot */
.route-pulse::after {
  animation:
    routePulse 2.4s ease-in-out infinite,
    routeTravel 3.2s ease-in-out infinite;
}

@keyframes routeTravel {
  0% {
    left: 8%;
  }

  50% {
    left: 50%;
  }

  100% {
    left: 92%;
  }
}

/* amount card */
.money-amount,
.amount-card {
  transition:
    transform .5s cubic-bezier(.2,.75,.2,1),
    box-shadow .5s ease;
}

.money-amount:hover,
.amount-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 50px rgba(27, 22, 64, .12);
}

/* active transaction status */
.live-status {
  animation: statusFloat 4s ease-in-out infinite;
}

@keyframes statusFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

/* capability cards */
.capability,
.capability-card {
  transition:
    transform .4s cubic-bezier(.2,.75,.2,1),
    background .3s ease,
    border-color .3s ease;
}

.capability:hover,
.capability-card:hover {
  transform: translateY(-6px);
}

/* smooth state changes */
.money-content {
  animation: moneyContentIn .55s cubic-bezier(.2,.75,.2,1);
}

@keyframes moneyContentIn {
  from {
    opacity: .3;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .money-stage::before,
  .money-route::after,
  .route-pulse::after,
  .live-status {
    animation: none;
  }
}
</style>