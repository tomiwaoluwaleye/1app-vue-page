<script setup>
import { ref } from 'vue'

const controls = [
  {
    number: '01',
    title: 'Know where your money is',
    body: 'Keep a clearer view of your balances, transactions and money movement from one place.',
    icon: '◉',
  },
  {
    number: '02',
    title: 'Stay in control',
    body: 'Manage the way you use your cards and money without leaving the 1app experience.',
    icon: '⌁',
  },
  {
    number: '03',
    title: 'See before you move',
    body: 'Review important transfer details before making a payment or sending money.',
    icon: '↗',
  },
  {
    number: '04',
    title: 'Built around trust',
    body: 'A financial product should make important information easier to understand, not harder to find.',
    icon: '✓',
  },
]

const activeControl = ref(0)

function selectControl(index) {
  activeControl.value = index
}
</script>

<template>
  <section class="section security-premium">

    <div class="wrap">

      <!-- INTRO -->
      <div class="security-intro" v-reveal>

        <div>
          <p class="eyebrow">Trust & control</p>

          <h2>
            Your money.
            <span>Your view.</span>
          </h2>
        </div>

        <p>
          Financial products should make you feel informed and
          in control. 1app puts the important parts of your
          money experience where you can actually see them.
        </p>

      </div>


      <!-- MAIN TRUST EXPERIENCE -->
      <div class="security-stage" v-reveal>

        <div class="security-grid"></div>


        <!-- LEFT -->
        <div class="security-main">

          <div class="security-number">
            {{ controls[activeControl].number }}
          </div>

          <div class="security-icon">
            {{ controls[activeControl].icon }}
          </div>

          <span class="security-kicker">
            CONTROL / {{ controls[activeControl].number }}
          </span>

          <h3>
            {{ controls[activeControl].title }}
          </h3>

          <p>
            {{ controls[activeControl].body }}
          </p>


          <!-- CONTROL STATUS -->
          <div class="control-status">

            <span class="status-indicator"></span>

            <div>
              <strong>Designed for clarity</strong>
              <small>
                Important money information stays visible.
              </small>
            </div>

          </div>

        </div>


        <!-- RIGHT -->
        <div class="security-controls">

          <div class="controls-heading">
            <span>THE CONTROL LAYER</span>

            <small>
              {{ String(activeControl + 1).padStart(2, '0') }}
              /
              {{ String(controls.length).padStart(2, '0') }}
            </small>
          </div>


          <button
            v-for="(control, index) in controls"
            :key="control.number"
            class="control-item"
            :class="{ active: index === activeControl }"
            @click="selectControl(index)"
          >

            <span class="control-number">
              {{ control.number }}
            </span>

            <span class="control-title">
              {{ control.title }}
            </span>

            <span class="control-arrow">
              ↗
            </span>

          </button>


          <div class="control-progress">

            <div
              :style="{
                width: `${((activeControl + 1) / controls.length) * 100}%`
              }"
            ></div>

          </div>

        </div>

      </div>


      <!-- TRUST PRINCIPLES -->
      <div class="trust-principles" v-reveal>

        <div>
          <span>01</span>

          <p>
            Clear information.
            <strong>Fewer surprises.</strong>
          </p>
        </div>

        <div>
          <span>02</span>

          <p>
            Visible activity.
            <strong>More awareness.</strong>
          </p>
        </div>

        <div>
          <span>03</span>

          <p>
            Simple controls.
            <strong>More confidence.</strong>
          </p>
        </div>

      </div>


      <!-- FOOTER -->
      <div class="security-footer">

        <span>1APP / TRUST</span>

        <span>
          SEE · UNDERSTAND · CONTROL
        </span>

        <span>04</span>

      </div>

    </div>

  </section>
</template>


<style scoped>

.security-premium {
  position: relative;

  padding: clamp(5rem, 10vw, 9rem) 0;

  background: var(--paper);
  overflow: hidden;
}


/* INTRO */

.security-intro {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(280px, 0.7fr);

  gap: clamp(3rem, 8vw, 9rem);

  align-items: end;

  margin-bottom: 4rem;
}

.security-intro h2 {
  margin: 0;

  max-width: 650px;

  font-family: var(--font-display);

  font-size: clamp(3rem, 5.5vw, 6rem);

  line-height: 0.92;

  letter-spacing: -0.06em;

  font-weight: 500;
}

.security-intro h2 span {
  display: block;

  color: var(--brand);

  font-style: italic;
}

.security-intro > div .eyebrow {
  margin-bottom: 1rem;
}

.security-intro > p {
  max-width: 420px;

  margin: 0;

  color: var(--ink-soft);

  font-size: 0.96rem;

  line-height: 1.85;
}


/* MAIN STAGE */

.security-stage {
  position: relative;

  display: grid;

  grid-template-columns: 1.05fr 0.95fr;

  min-height: 520px;

  overflow: hidden;

  border-radius: var(--radius-lg);

  background: var(--ink);

  color: white;

  box-shadow:
    0 35px 90px rgba(27, 22, 64, 0.13);
}


/* GRID */

.security-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.08;

  background-image:
    linear-gradient(
      rgba(255,255,255,0.5) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.5) 1px,
      transparent 1px
    );

  background-size: 70px 70px;
}


/* MAIN COPY */

.security-main {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: clamp(2rem, 6vw, 5rem);

  overflow: hidden;
}

.security-main::before {
  content: '';

  position: absolute;

  width: 420px;
  height: 420px;

  top: 50%;
  left: 30%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: var(--brand);

  opacity: 0.13;

  filter: blur(80px);

  pointer-events: none;
}

.security-number {
  position: absolute;

  top: 2rem;
  left: 2rem;

  font-family: var(--font-mono);

  font-size: 0.65rem;

  color: rgba(255,255,255,0.35);
}

.security-icon {
  position: relative;

  width: 64px;
  height: 64px;

  display: grid;
  place-items: center;

  margin-bottom: 2rem;

  border: 1px solid rgba(255,255,255,0.15);

  border-radius: 50%;

  color: white;

  font-size: 1.2rem;

  background: rgba(255,255,255,0.04);
}

.security-kicker {
  position: relative;

  margin-bottom: 0.9rem;

  font-family: var(--font-mono);

  font-size: 0.62rem;

  letter-spacing: 0.13em;

  color: rgba(255,255,255,0.4);
}

.security-main h3 {
  position: relative;

  max-width: 470px;

  margin: 0;

  font-family: var(--font-display);

  font-size: clamp(2.2rem, 4vw, 4rem);

  line-height: 0.98;

  letter-spacing: -0.045em;

  font-weight: 500;
}

.security-main > p {
  position: relative;

  max-width: 430px;

  margin-top: 1.3rem;

  color: rgba(255,255,255,0.62);

  font-size: 0.92rem;

  line-height: 1.8;
}


/* STATUS */

.control-status {
  position: relative;

  display: flex;

  align-items: center;

  gap: 0.75rem;

  margin-top: 2rem;

  padding-top: 1.4rem;

  border-top: 1px solid rgba(255,255,255,0.1);

  max-width: 430px;
}

.status-indicator {
  width: 8px;
  height: 8px;

  flex: 0 0 auto;

  border-radius: 50%;

  background: var(--brand);
}

.control-status strong {
  display: block;

  font-size: 0.78rem;

  font-weight: 600;
}

.control-status small {
  display: block;

  margin-top: 0.2rem;

  color: rgba(255,255,255,0.4);

  font-size: 0.68rem;
}


/* CONTROLS */

.security-controls {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: clamp(2rem, 5vw, 4rem);

  border-left: 1px solid rgba(255,255,255,0.1);
}

.controls-heading {
  display: flex;

  justify-content: space-between;

  margin-bottom: 1rem;

  font-family: var(--font-mono);

  font-size: 0.62rem;

  letter-spacing: 0.12em;

  color: rgba(255,255,255,0.4);
}

.control-item {
  width: 100%;

  display: grid;

  grid-template-columns: 45px 1fr 30px;

  align-items: center;

  gap: 1rem;

  padding: 1.3rem 0;

  border: none;

  border-bottom: 1px solid rgba(255,255,255,0.09);

  background: transparent;

  color: rgba(255,255,255,0.5);

  text-align: left;

  cursor: pointer;

  transition:
    color 0.3s ease,
    padding 0.3s ease;
}

.control-item:hover,
.control-item.active {
  color: white;

  padding-left: 0.5rem;
}

.control-number {
  font-family: var(--font-mono);

  font-size: 0.65rem;

  color: rgba(255,255,255,0.25);
}

.control-item.active .control-number {
  color: var(--brand);
}

.control-title {
  font-size: 0.9rem;

  font-weight: 500;
}

.control-arrow {
  opacity: 0;

  transform: translate(-5px, 5px);

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  color: var(--brand);
}

.control-item:hover .control-arrow,
.control-item.active .control-arrow {
  opacity: 1;

  transform: translate(0, 0);
}


/* PROGRESS */

.control-progress {
  width: 100%;

  height: 2px;

  margin-top: 1.6rem;

  background: rgba(255,255,255,0.08);
}

.control-progress div {
  height: 100%;

  background: var(--brand);

  transition: width 0.4s ease;
}


/* PRINCIPLES */

.trust-principles {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  margin-top: 2rem;

  border-bottom: 1px solid var(--line);
}

.trust-principles > div {
  padding: 1.5rem;

  border-right: 1px solid var(--line);
}

.trust-principles > div:first-child {
  padding-left: 0;
}

.trust-principles > div:last-child {
  border-right: none;
}

.trust-principles span {
  display: block;

  margin-bottom: 0.6rem;

  font-family: var(--font-mono);

  font-size: 0.62rem;

  color: var(--brand);
}

.trust-principles p {
  margin: 0;

  color: var(--ink-soft);

  font-size: 0.85rem;
}

.trust-principles strong {
  color: var(--ink);

  font-weight: 600;
}


/* FOOTER */

.security-footer {
  display: flex;

  justify-content: space-between;

  padding-top: 1rem;

  font-family: var(--font-mono);

  font-size: 0.58rem;

  letter-spacing: 0.12em;

  color: var(--ink-faint);
}


/* RESPONSIVE */

@media (max-width: 900px) {

  .security-intro {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .security-stage {
    grid-template-columns: 1fr;
  }

  .security-controls {
    border-left: none;

    border-top: 1px solid rgba(255,255,255,0.1);
  }

}

@media (max-width: 640px) {

  .security-premium {
    padding: 4.5rem 0;
  }

  .security-intro h2 {
    font-size: 3rem;
  }

  .security-main {
    padding: 2rem;
  }

  .security-controls {
    padding: 1.5rem 2rem 2rem;
  }

  .trust-principles {
    grid-template-columns: 1fr;
  }

  .trust-principles > div {
    border-right: none;

    border-bottom: 1px solid var(--line);
    padding: 1.2rem 0;
  }

  .trust-principles > div:last-child {
    border-bottom: none;
  }

  .security-footer span:nth-child(2) {
    display: none;
  }

}

</style>