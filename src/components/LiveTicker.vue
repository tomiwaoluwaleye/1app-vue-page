<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const movements = [
  {
    from: 'Lagos',
    fromCode: 'NG',
    to: 'London',
    toCode: 'GB',
    amount: '₦450,000',
    converted: '£224.81',
    type: 'TRANSFER',
  },
  {
    from: 'New York',
    fromCode: 'US',
    to: 'Lagos',
    toCode: 'NG',
    amount: '$1,200',
    converted: '₦1.8M',
    type: 'RECEIVE',
  },
  {
    from: 'Accra',
    fromCode: 'GH',
    to: 'Lagos',
    toCode: 'NG',
    amount: '₵8,400',
    converted: '₦980K',
    type: 'MOVE',
  },
  {
    from: 'Lagos',
    fromCode: 'NG',
    to: 'Nairobi',
    toCode: 'KE',
    amount: '₦180,000',
    converted: 'KSh 14.6K',
    type: 'TRANSFER',
  },
]

const active = ref(0)
let timer

function nextMovement() {
  active.value = (active.value + 1) % movements.length
}

onMounted(() => {
  timer = setInterval(nextMovement, 3200)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="movement-section">
    <div class="wrap">

      <!-- TOP LABEL -->
      <div class="movement-top" v-reveal>
        <div class="movement-label">
          <span class="movement-dot"></span>
          GLOBAL MONEY MOVEMENT
        </div>

        <span class="movement-index">
          {{ String(active + 1).padStart(2, '0') }}
          /
          {{ String(movements.length).padStart(2, '0') }}
        </span>
      </div>


      <!-- MAIN MOVEMENT -->
      <div class="movement-stage" v-reveal>

        <div class="movement-copy">
          <p class="eyebrow">Built for movement</p>

          <h2>
            Money doesn't
            <span>stand still.</span>
          </h2>

          <p class="movement-description">
            From everyday payments to international transfers,
            1app gives your money somewhere to go.
          </p>
        </div>


        <!-- ROUTE -->
        <div class="movement-route">

          <Transition name="movement" mode="out-in">

            <div
              :key="active"
              class="route-card"
            >

              <!-- FROM -->
              <div class="route-side">

                <span class="route-label">FROM</span>

                <div class="route-place">
                  <span class="country-mark">
                    {{ movements[active].fromCode }}
                  </span>

                  <div>
                    <strong>
                      {{ movements[active].from }}
                    </strong>

                    <small>
                      {{ movements[active].amount }}
                    </small>
                  </div>
                </div>

              </div>


              <!-- CENTER -->
              <div class="route-middle">

                <div class="route-line">
                  <span class="moving-dot"></span>
                </div>

                <div class="route-arrow">
                  ↗
                </div>

                <span>
                  {{ movements[active].type }}
                </span>

              </div>


              <!-- TO -->
              <div class="route-side destination">

                <span class="route-label">TO</span>

                <div class="route-place">

                  <span class="country-mark">
                    {{ movements[active].toCode }}
                  </span>

                  <div>
                    <strong>
                      {{ movements[active].to }}
                    </strong>

                    <small>
                      {{ movements[active].converted }}
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </Transition>

        </div>

      </div>


      <!-- BOTTOM STRIP -->
      <div class="movement-strip" v-reveal>

        <div>
          <span class="strip-number">01</span>

          <p>
            One account.
            <strong>Multiple currencies.</strong>
          </p>
        </div>

        <div>
          <span class="strip-number">02</span>

          <p>
            One experience.
            <strong>Global movement.</strong>
          </p>
        </div>

        <div>
          <span class="strip-number">03</span>

          <p>
            Your money.
            <strong>Your control.</strong>
          </p>
        </div>

      </div>


      <!-- MICRO FOOTER -->
      <div class="movement-footer">
        <span>1APP</span>

        <span>
          MOVE · RECEIVE · SPEND · EXCHANGE
        </span>

        <span>04</span>
      </div>

    </div>
  </section>
</template>

<style scoped>

.movement-section {
  position: relative;
  padding: clamp(5rem, 10vw, 9rem) 0;
  background: var(--paper);
  overflow: hidden;
}


/* TOP */

.movement-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.movement-label {
  display: flex;
  align-items: center;
  gap: 0.55rem;

  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--ink-faint);
}

.movement-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--brand);

  animation: movementPulse 1.8s ease-in-out infinite;
}

@keyframes movementPulse {
  50% {
    opacity: 0.35;
    transform: scale(0.7);
  }
}

.movement-index {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--ink-faint);
}


/* MAIN STAGE */

.movement-stage {
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(500px, 1.4fr);
  gap: clamp(3rem, 8vw, 9rem);

  align-items: center;

  padding: clamp(3rem, 6vw, 5rem) 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}


/* COPY */

.movement-copy .eyebrow {
  margin-bottom: 1rem;
}

.movement-copy h2 {
  margin: 0;

  max-width: 520px;

  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 5.4rem);
  line-height: 0.95;
  letter-spacing: -0.055em;
  font-weight: 500;

  color: var(--ink);
}

.movement-copy h2 span {
  display: block;
  color: var(--brand);
  font-style: italic;
}

.movement-description {
  max-width: 390px;
  margin-top: 1.6rem;

  color: var(--ink-soft);
  font-size: 0.98rem;
  line-height: 1.8;
}


/* ROUTE */

.movement-route {
  position: relative;
  min-height: 300px;

  display: flex;
  align-items: center;
}

.route-card {
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 140px 1fr;
  align-items: center;

  padding: clamp(1.5rem, 3vw, 2.4rem);

  background: var(--paper-dim);
  border: 1px solid var(--line);

  border-radius: var(--radius-lg);

  box-shadow:
    0 25px 70px rgba(27, 22, 64, 0.07);
}


/* SIDES */

.route-side {
  padding: 1rem;
}

.route-label {
  display: block;

  margin-bottom: 1rem;

  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.13em;

  color: var(--ink-faint);
}

.route-place {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.country-mark {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--pink-light);

  color: var(--brand-deep);

  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 700;
}

.route-place strong {
  display: block;

  color: var(--ink);

  font-size: 1rem;
  font-weight: 600;
}

.route-place small {
  display: block;

  margin-top: 0.3rem;

  color: var(--ink-faint);

  font-family: var(--font-mono);
  font-size: 0.72rem;
}


/* CENTER */

.route-middle {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.7rem;
}

.route-line {
  position: relative;

  width: 100px;
  height: 1px;

  background: var(--line);
}

.moving-dot {
  position: absolute;

  top: 50%;
  left: 0;

  width: 7px;
  height: 7px;

  transform: translateY(-50%);

  border-radius: 50%;

  background: var(--brand);

  animation: travel 2.4s ease-in-out infinite;
}

@keyframes travel {
  0% {
    left: 0;
  }

  50% {
    left: calc(100% - 7px);
  }

  100% {
    left: 0;
  }
}

.route-arrow {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--brand);

  color: white;

  font-size: 1rem;
}

.route-middle > span {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.1em;

  color: var(--ink-faint);
}


/* TRANSITION */

.movement-enter-active,
.movement-leave-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}

.movement-enter-from {
  opacity: 0;
  transform: translateY(18px);
}

.movement-leave-to {
  opacity: 0;
  transform: translateY(-18px);
}


/* BOTTOM STRIP */

.movement-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 2rem;

  border-bottom: 1px solid var(--line);
}

.movement-strip > div {
  padding: 1.6rem 1.5rem;

  border-right: 1px solid var(--line);
}

.movement-strip > div:first-child {
  padding-left: 0;
}

.movement-strip > div:last-child {
  border-right: none;
}

.strip-number {
  display: block;

  margin-bottom: 0.7rem;

  font-family: var(--font-mono);
  font-size: 0.62rem;

  color: var(--brand);
}

.movement-strip p {
  margin: 0;

  color: var(--ink-soft);

  font-size: 0.88rem;
  line-height: 1.5;
}

.movement-strip strong {
  color: var(--ink);
  font-weight: 600;
}


/* FOOTER */

.movement-footer {
  display: flex;
  justify-content: space-between;

  padding-top: 1rem;

  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.12em;

  color: var(--ink-faint);
}


/* MOBILE */

@media (max-width: 900px) {

  .movement-stage {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .movement-copy h2 {
    max-width: 600px;
  }

  .movement-route {
    min-height: 260px;
  }

}

@media (max-width: 640px) {

  .movement-section {
    padding: 4.5rem 0;
  }

  .movement-top {
    margin-bottom: 1.5rem;
  }

  .movement-stage {
    padding: 2.5rem 0;
  }

  .movement-copy h2 {
    font-size: 3rem;
  }

  .route-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .route-middle {
    flex-direction: row;
    justify-content: center;
  }

  .route-line {
    width: 60px;
  }

  .route-side {
    padding: 0.7rem;
  }

  .movement-strip {
    grid-template-columns: 1fr;
  }

  .movement-strip > div {
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding: 1.2rem 0;
  }

  .movement-strip > div:last-child {
    border-bottom: none;
  }

  .movement-footer span:nth-child(2) {
    display: none;
  }

}

/* =========================================================
   PREMIUM GLOBAL MOVEMENT
   ========================================================= */

.global-map,
.movement-map,
.live-map {
  position: relative;
  overflow: hidden;
}

/* atmospheric glow */
.global-map::before,
.movement-map::before,
.live-map::before {
  content: '';
  position: absolute;
  width: 420px;
  height: 420px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(224, 30, 122, .07);
  filter: blur(80px);
  animation: globalGlow 7s ease-in-out infinite;
  pointer-events: none;
}

@keyframes globalGlow {
  0%, 100% {
    opacity: .45;
    transform: translate(-50%, -50%) scale(.9);
  }

  50% {
    opacity: 1;
    transform: translate(-48%, -52%) scale(1.12);
  }
}

/* map / world graphic */
.global-map svg,
.movement-map svg,
.live-map svg {
  transition: transform 1s cubic-bezier(.2,.75,.2,1);
}

.global-map:hover svg,
.movement-map:hover svg,
.live-map:hover svg {
  transform: scale(1.025);
}

/* route lines */
.route,
.map-route,
.connection {
  stroke-dasharray: 10 14;
  animation: routeDash 3.5s linear infinite;
}

@keyframes routeDash {
  to {
    stroke-dashoffset: -48;
  }
}

/* glowing route points */
.route-point,
.map-point,
.location-dot {
  animation: locationPulse 2.5s ease-in-out infinite;
  transform-origin: center;
}

@keyframes locationPulse {
  0%, 100% {
    opacity: .55;
    transform: scale(.85);
  }

  50% {
    opacity: 1;
    transform: scale(1.18);
  }
}

/* country / currency chips */
.country-chip,
.currency-chip,
.location-chip {
  transition:
    transform .4s cubic-bezier(.2,.75,.2,1),
    box-shadow .4s ease;
}

.country-chip:hover,
.currency-chip:hover,
.location-chip:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 35px rgba(27, 22, 64, .12);
}

/* floating movement cards */
.movement-card,
.global-card,
.location-card {
  animation: globalFloat 5s ease-in-out infinite;
}

.movement-card:nth-child(2),
.global-card:nth-child(2),
.location-card:nth-child(2) {
  animation-delay: -1.7s;
}

.movement-card:nth-child(3),
.global-card:nth-child(3),
.location-card:nth-child(3) {
  animation-delay: -3.2s;
}

@keyframes globalFloat {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

/* horizontal ticker movement */
.ticker-track,
.movement-track {
  animation: tickerMove 24s linear infinite;
}

@keyframes tickerMove {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-35%);
  }
}

/* pause when exploring */
.ticker-track:hover,
.movement-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .global-map::before,
  .movement-map::before,
  .live-map::before,
  .route,
  .map-route,
  .connection,
  .route-point,
  .map-point,
  .location-dot,
  .movement-card,
  .global-card,
  .location-card,
  .ticker-track,
  .movement-track {
    animation: none;
  }
}

</style>