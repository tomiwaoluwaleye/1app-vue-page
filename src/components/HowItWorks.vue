<script setup>
import { ref } from 'vue'

const steps = [
  {
    number: '01',
    title: 'Create your account',
    body: 'Set up your 1app account and get your money workspace ready without the traditional banking runaround.',
    tag: 'GET STARTED',
  },
  {
    number: '02',
    title: 'Set up your money',
    body: 'Connect the way you want to fund, hold and move your money across the currencies you use.',
    tag: 'SET UP',
  },
  {
    number: '03',
    title: 'Move with 1app',
    body: 'Send, receive, exchange or spend from one experience built around how you actually use money.',
    tag: 'MOVE',
  },
]

const activeStep = ref(0)

function selectStep(index) {
  activeStep.value = index
}
</script>


<template>
  <section class="section how-premium">

    <div class="wrap">

      <!-- INTRO -->
      <div class="how-intro" v-reveal>

        <div>
          <p class="eyebrow">How it works</p>

          <h2>
            From sign up
            <span>to moving.</span>
          </h2>
        </div>

        <p>
          No complicated journey. Just a clear path from creating
          your account to having more control over your money.
        </p>

      </div>


      <!-- JOURNEY -->
      <div class="journey" v-reveal>

        <!-- PROGRESS LINE -->
        <div class="journey-line">
          <div
            class="journey-progress"
            :style="{
              width: `${activeStep * 50}%`
            }"
          ></div>
        </div>


        <!-- STEPS -->
        <div class="journey-steps">

          <button
            v-for="(step, index) in steps"
            :key="step.number"
            class="journey-step"
            :class="{ active: index === activeStep }"
            @click="selectStep(index)"
          >

            <span class="step-number">
              {{ step.number }}
            </span>

            <span class="step-dot"></span>

            <span class="step-tag">
              {{ step.tag }}
            </span>

            <strong>
              {{ step.title }}
            </strong>

            <span class="step-arrow">
              ↗
            </span>

          </button>

        </div>


        <!-- ACTIVE DETAIL -->
        <div class="journey-detail">

          <div class="detail-number">
            {{ steps[activeStep].number }}
          </div>

          <div class="detail-content">

            <span>
              STEP {{ steps[activeStep].number }}
            </span>

            <h3>
              {{ steps[activeStep].title }}
            </h3>

            <p>
              {{ steps[activeStep].body }}
            </p>

          </div>

          <div class="detail-action">

            <span>01APP</span>

            <div class="detail-circle">
              →
            </div>

          </div>

        </div>

      </div>


      <!-- BOTTOM STATEMENT -->
      <div class="how-bottom" v-reveal>

        <span>THE JOURNEY</span>

        <p>
          Simple enough to start.
          <strong>Powerful enough to stay.</strong>
        </p>

        <span>03 / 03</span>

      </div>

    </div>

  </section>
</template>


<style scoped>

/* =========================================================
   SECTION
   ========================================================= */

.how-premium {
  padding-top: clamp(7rem, 12vw, 11rem);
  padding-bottom: clamp(7rem, 12vw, 11rem);

  background: #faf8fa;
}


/* =========================================================
   INTRO
   ========================================================= */

.how-intro {
  display: grid;

  grid-template-columns: 1.1fr .65fr;

  gap: 5rem;

  align-items: end;

  margin-bottom: 4rem;
}


.how-intro h2 {
  max-width: 700px;

  margin-top: .8rem;

  font-family:
    var(--font-display, "Fraunces", Georgia, serif);

  font-size:
    clamp(3.5rem, 6.5vw, 7rem);

  line-height: .88;

  letter-spacing: -.06em;

  font-weight: 600;
}


.how-intro h2 span {
  display: block;

  color:
    var(--brand, #e01e7a);

  font-style: italic;
}


.how-intro > p {
  max-width: 390px;

  color:
    var(--ink-soft, #6b6875);

  font-size: 1rem;

  line-height: 1.75;
}


/* =========================================================
   JOURNEY
   ========================================================= */

.journey {
  position: relative;

  overflow: hidden;

  border-radius: 32px;

  background: #fff;

  border:
    1px solid rgba(27,22,64,.08);

  box-shadow:
    0 25px 70px rgba(27,22,64,.07);
}


.journey-line {
  position: absolute;

  left: 11%;

  right: 11%;

  top: 91px;

  height: 1px;

  background:
    rgba(27,22,64,.10);

  z-index: 0;
}


.journey-progress {
  height: 100%;

  background:
    #e01e7a;

  transition:
    width .5s cubic-bezier(.2,.8,.2,1);
}


/* =========================================================
   STEP BUTTONS
   ========================================================= */

.journey-steps {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);
}


.journey-step {
  position: relative;

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  min-height: 185px;

  padding: 2rem;

  border: 0;

  border-right:
    1px solid rgba(27,22,64,.08);

  background: transparent;

  color: #1b1640;

  text-align: left;

  cursor: pointer;

  transition:
    background .3s ease;
}


.journey-step:last-child {
  border-right: 0;
}


.journey-step:hover {
  background: #fdf7fa;
}


.journey-step.active {
  background: #fff7fa;
}


/* NUMBER */

.step-number {
  color: #aaa5af;

  font-family:
    var(--font-mono, monospace);

  font-size: .58rem;

  transition:
    color .25s ease;
}


.journey-step.active .step-number {
  color: #e01e7a;
}


/* DOT */

.step-dot {
  position: relative;
  z-index: 3;

  width: 13px;
  height: 13px;

  margin-top: 38px;

  border:
    3px solid #fff;

  border-radius: 50%;

  background: #aaa5af;

  box-shadow:
    0 0 0 1px rgba(27,22,64,.14);

  transition:
    background .3s ease,
    transform .3s ease,
    box-shadow .3s ease;
}


.journey-step.active .step-dot {
  background: #e01e7a;

  transform: scale(1.15);

  box-shadow:
    0 0 0 5px rgba(224,30,122,.10),
    0 0 0 1px rgba(224,30,122,.25);
}


/* TAG */

.step-tag {
  margin-top: 25px;

  color: #aaa5af;

  font-family:
    var(--font-mono, monospace);

  font-size: .50rem;

  letter-spacing: .12em;

  transition:
    color .25s ease;
}


.journey-step.active .step-tag {
  color: #e01e7a;
}


/* TITLE */

.journey-step strong {
  max-width: 220px;

  margin-top: .5rem;

  font-size: 1rem;

  letter-spacing: -.02em;
}


/* ARROW */

.step-arrow {
  position: absolute;

  right: 1.7rem;

  bottom: 1.7rem;

  color: #aaa5af;

  transition:
    color .25s ease,
    transform .25s ease;
}


.journey-step:hover .step-arrow,
.journey-step.active .step-arrow {
  color: #e01e7a;

  transform:
    translate(3px, -3px);
}


/* =========================================================
   DETAIL PANEL
   ========================================================= */

.journey-detail {
  display: grid;

  grid-template-columns: auto 1fr auto;

  align-items: center;

  gap: 2rem;

  margin: 0 2rem;

  padding: 2rem 0;

  border-top:
    1px solid rgba(27,22,64,.09);
}


.detail-number {
  display: grid;

  place-items: center;

  width: 56px;
  height: 56px;

  border-radius: 17px;

  background: #1b1640;

  color: #fff;

  font-family:
    var(--font-display, Georgia, serif);

  font-size: 1.2rem;
}


.detail-content > span {
  color: #e01e7a;

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  letter-spacing: .13em;
}


.detail-content h3 {
  margin-top: .35rem;

  font-family:
    var(--font-display, "Fraunces", Georgia, serif);

  font-size: 1.8rem;

  letter-spacing: -.035em;
}


.detail-content p {
  max-width: 600px;

  margin-top: .4rem;

  color:
    var(--ink-soft, #6b6875);

  font-size: .78rem;

  line-height: 1.65;
}


.detail-action {
  display: flex;

  align-items: center;

  gap: 1rem;
}


.detail-action > span {
  color: #aaa5af;

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  letter-spacing: .12em;
}


.detail-circle {
  display: grid;

  place-items: center;

  width: 42px;
  height: 42px;

  border:
    1px solid rgba(27,22,64,.12);

  border-radius: 50%;

  color: #1b1640;

  transition:
    background .25s ease,
    color .25s ease,
    transform .25s ease;
}


.journey:hover .detail-circle {
  background: #e01e7a;

  color: #fff;

  transform: translateX(3px);
}


/* =========================================================
   BOTTOM
   ========================================================= */

.how-bottom {
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


.how-bottom span {
  color: #aaa5af;

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  letter-spacing: .12em;
}


.how-bottom p {
  justify-self: center;

  color:
    var(--ink-soft, #6b6875);

  font-size: .8rem;

  text-align: center;
}


.how-bottom strong {
  color: #1b1640;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 850px) {

  .how-intro {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .journey-steps {
    grid-template-columns: 1fr;
  }

  .journey-line {
    left: 37px;
    right: auto;

    top: 8%;
    bottom: 8%;

    width: 1px;
    height: auto;
  }

  .journey-progress {
    width: 1px !important;

    height: 0;
  }

  .journey-step {
    min-height: 125px;

    padding:
      1.5rem 1.5rem 1.5rem 4.5rem;

    border-right: 0;

    border-bottom:
      1px solid rgba(27,22,64,.08);
  }

  .journey-step:last-child {
    border-bottom: 0;
  }

  .step-number {
    position: absolute;

    left: 1.5rem;

    top: 1.5rem;
  }

  .step-dot {
    position: absolute;

    left: 31px;

    top: 48px;

    margin: 0;
  }

  .step-tag {
    margin-top: 0;
  }

  .journey-detail {
    grid-template-columns: auto 1fr;

    margin: 0 1.5rem;
  }

  .detail-action {
    display: none;
  }

}


@media (max-width: 600px) {

  .how-intro h2 {
    font-size: 3.4rem;
  }

  .journey {
    border-radius: 25px;
  }

  .journey-step {
    padding-left: 4rem;
  }

  .step-dot {
    left: 26px;
  }

  .journey-detail {
    gap: 1rem;

    padding: 1.5rem 0;
  }

  .detail-number {
    width: 46px;
    height: 46px;

    border-radius: 14px;
  }

  .detail-content h3 {
    font-size: 1.45rem;
  }

  .how-bottom {
    grid-template-columns: 1fr;

    gap: .6rem;
  }

  .how-bottom p {
    justify-self: start;

    text-align: left;
  }

}
</style>