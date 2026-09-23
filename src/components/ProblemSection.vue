<script setup>
import { ref } from "vue";

const problems = [
  {
    number: "01",
    title: "Too many places",
    body: "Your money can end up scattered across bank accounts, cards, currencies and different financial apps.",
    detail: "SCATTERED",
  },
  {
    number: "02",
    title: "Too much friction",
    body: "Moving money should feel straightforward. Instead, the journey can involve unnecessary steps and uncertainty.",
    detail: "FRICTION",
  },
  {
    number: "03",
    title: "Not enough visibility",
    body: "When money moves across currencies and accounts, understanding what you have and where it is should be simple.",
    detail: "VISIBILITY",
  },
];

const active = ref(0);

function selectProblem(index) {
  active.value = index;
}
</script>

<template>
  <section id="features" class="section problem-premium">
    <div class="wrap">
      <!-- INTRO -->
      <div class="problem-intro" v-reveal>
        <div>
          <p class="eyebrow">The problem</p>

          <h2>
            Money has become
            <span>too complicated.</span>
          </h2>
        </div>

        <div class="problem-intro-side">
          <span class="intro-line"></span>

          <p>
            Different accounts. Different currencies. Different places to manage
            them.
            <strong>It shouldn't feel this fragmented.</strong>
          </p>
        </div>
      </div>

      <!-- INTERACTIVE PROBLEM -->
      <div class="problem-experience" v-reveal>
        <!-- NAV -->
        <div class="problem-nav">
          <button
            v-for="(problem, index) in problems"
            :key="problem.number"
            class="problem-nav-item"
            :class="{ active: index === active }"
            @click="selectProblem(index)"
          >
            <span class="nav-number">{{ problem.number }}</span>

            <span class="nav-title">
              {{ problem.title }}
            </span>

            <span class="nav-arrow">↗</span>
          </button>
        </div>

        <!-- DISPLAY -->
        <div class="problem-display">
          <div class="display-grid"></div>

          <div class="display-top">
            <span>THE MONEY EXPERIENCE</span>
            <span>{{ problems[active].detail }}</span>
          </div>

          <Transition name="problem-fade" mode="out-in">
            <div :key="active" class="problem-content">
              <span class="big-number">
                {{ problems[active].number }}
              </span>

              <h3>
                {{ problems[active].title }}
              </h3>

              <p>
                {{ problems[active].body }}
              </p>

              <div class="problem-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Transition>

          <div class="display-bottom">
            <span>01 — 03</span>

            <div class="progress">
              <span
                v-for="(item, index) in problems"
                :key="item.number"
                :class="{ active: index === active }"
              ></span>
            </div>

            <span>1APP</span>
          </div>
        </div>
      </div>

      <!-- TRANSITION -->
      <div class="problem-transition" v-reveal>
        <span class="transition-number">01</span>

        <p>
          So we started with a simple idea:
          <strong>put more of your money experience in one place.</strong>
        </p>

        <span class="transition-arrow">↓</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-premium {
  overflow: hidden;
  background: var(--bg);
}

/* =========================
   INTRO
========================= */

.problem-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
  align-items: end;
  gap: 4rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.problem-intro h2 {
  max-width: 700px;
  margin: 0.8rem 0 0;
  color: var(--ink);
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 500;
  line-height: 0.94;
  letter-spacing: -0.055em;
}

.problem-intro h2 span {
  display: block;
  color: var(--pink);
}

.problem-intro-side {
  display: flex;
  gap: 1rem;
  padding-bottom: 0.4rem;
}

.intro-line {
  width: 1px;
  min-height: 65px;
  background: var(--pink);
}

.problem-intro-side p {
  max-width: 30ch;
  margin: 0;
  color: var(--grey);
  font-size: 0.88rem;
  line-height: 1.75;
}

.problem-intro-side strong {
  color: var(--ink);
  font-weight: 600;
}

/* =========================
   EXPERIENCE
========================= */

.problem-experience {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  min-height: 510px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--paper);
}

/* =========================
   NAV
========================= */

.problem-nav {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--line);
  background: var(--paper-dim);
}

.problem-nav-item {
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 45px 1fr 20px;
  align-items: center;
  gap: 0.7rem;
  padding: 1.2rem 1.4rem;
  border: 0;
  border-bottom: 1px solid var(--line);
  background: transparent;
  color: var(--grey);
  text-align: left;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.problem-nav-item:last-child {
  border-bottom: 0;
}

.problem-nav-item:hover {
  color: var(--ink);
  background: rgba(255, 255, 255, 0.6);
}

.problem-nav-item.active {
  color: var(--ink);
  background: #fff;
}

.problem-nav-item.active::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 3px;
  background: var(--pink);
}

.nav-number {
  color: var(--pink);
  font-family: var(--font-mono);
  font-size: 0.58rem;
}

.nav-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.nav-arrow {
  font-size: 0.8rem;
  opacity: 0;
  transform: translate(-5px, 5px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.problem-nav-item.active .nav-arrow,
.problem-nav-item:hover .nav-arrow {
  opacity: 1;
  transform: translate(0, 0);
}

/* =========================
   DISPLAY
========================= */

.problem-display {
  position: relative;
  min-height: 510px;
  overflow: hidden;
  padding: 1.4rem;
  color: #fff;
  background: #19153c;
}

.display-grid {
  position: absolute;
  inset: 0;
  opacity: 0.09;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 45px 45px;
}

.problem-display::after {
  content: "";
  position: absolute;
  right: -120px;
  bottom: -160px;
  width: 390px;
  height: 390px;
  border-radius: 50%;
  background: rgba(224, 30, 122, 0.2);
  filter: blur(65px);
}

.display-top,
.display-bottom {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.38);
  font-family: var(--font-mono);
  font-size: 0.53rem;
  letter-spacing: 0.08em;
}

.problem-content {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: clamp(2rem, 6vw, 5rem);
  max-width: 570px;
  transform: translateY(-50%);
}

.big-number {
  display: block;
  margin-bottom: 1.3rem;
  color: rgba(255, 255, 255, 0.16);
  font-family: var(--font-mono);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
}

.problem-content h3 {
  margin: 0;
  color: #fff;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 4.2rem);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.problem-content p {
  max-width: 43ch;
  margin: 1.4rem 0 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  line-height: 1.75;
}

.problem-indicator {
  display: flex;
  gap: 0.35rem;
  margin-top: 2rem;
}

.problem-indicator span {
  width: 24px;
  height: 3px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.18);
}

.problem-indicator span:first-child {
  background: var(--pink);
}

/* =========================
   BOTTOM
========================= */

.display-bottom {
  position: absolute;
  right: 1.4rem;
  bottom: 1.4rem;
  left: 1.4rem;
  align-items: center;
}

.progress {
  display: flex;
  gap: 0.3rem;
}

.progress span {
  width: 28px;
  height: 2px;
  background: rgba(255, 255, 255, 0.16);
}

.progress span.active {
  background: var(--pink);
}

/* =========================
   TRANSITIONS
========================= */

.problem-fade-enter-active,
.problem-fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.problem-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.problem-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* =========================
   FINAL TRANSITION
========================= */

.problem-transition {
  display: grid;
  grid-template-columns: 60px minmax(0, 1fr) 40px;
  align-items: center;
  gap: 1.5rem;
  max-width: 850px;
  margin: clamp(4rem, 8vw, 7rem) auto 0;
}

.transition-number {
  color: var(--pink);
  font-family: var(--font-mono);
  font-size: 0.6rem;
}

.problem-transition p {
  margin: 0;
  color: var(--grey);
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.problem-transition strong {
  color: var(--ink);
  font-weight: 500;
}

.transition-arrow {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--ink);
}

/* =========================
   TABLET
========================= */

@media (max-width: 850px) {
  .problem-intro {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .problem-experience {
    grid-template-columns: 1fr;
  }

  .problem-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .problem-nav-item {
    min-height: 90px;
    border-right: 1px solid var(--line);
    border-bottom: 0;
  }

  .problem-nav-item:last-child {
    border-right: 0;
  }

  .problem-nav-item.active::before {
    top: auto;
    right: 0;
    bottom: 0;
    width: auto;
    height: 3px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {
  .problem-intro h2 {
    font-size: clamp(2.8rem, 13vw, 4rem);
  }

  .problem-nav {
    display: flex;
  }

  .problem-nav-item {
    min-height: 72px;
    grid-template-columns: 35px 1fr 20px;
  }

  .nav-title {
    font-size: 1rem;
  }

  .problem-display {
    min-height: 440px;
  }

  .problem-content {
    left: 1.5rem;
    right: 1.5rem;
  }

  .problem-content h3 {
    font-size: 2.4rem;
  }

  .problem-transition {
    grid-template-columns: 35px 1fr;
    gap: 1rem;
  }

  .transition-arrow {
    display: none;
  }
}

/* =========================================================
   PREMIUM PROBLEM MOTION
   ========================================================= */

.problem-display {
  isolation: isolate;
}

/* Moving technical grid */

.display-grid {
  animation: problemGridMove 18s linear infinite;
  transform: scale(1.05);
}

@keyframes problemGridMove {
  from {
    transform: translate3d(0, 0, 0) scale(1.05);
  }

  to {
    transform: translate3d(45px, 45px, 0) scale(1.05);
  }
}

/* Ambient pink light */

.problem-display::before {
  content: '';
  position: absolute;
  z-index: 1;

  width: 280px;
  height: 280px;

  left: 50%;
  top: 50%;

  border-radius: 50%;

  background: rgba(224, 30, 122, .10);

  filter: blur(70px);

  transform: translate(-50%, -50%);

  animation: problemGlow 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes problemGlow {
  0%,
  100% {
    opacity: .45;
    transform: translate(-50%, -50%) scale(.85);
  }

  50% {
    opacity: 1;
    transform: translate(-45%, -55%) scale(1.15);
  }
}

/* Active navigation */

.problem-nav-item {
  transition:
    background .35s ease,
    color .35s ease,
    padding-left .35s cubic-bezier(.2, .75, .2, 1);
}

.problem-nav-item:hover {
  padding-left: 1.7rem;
}

.problem-nav-item.active {
  padding-left: 1.7rem;
}

/* Active indicator becomes alive */

.problem-nav-item.active::before {
  animation: activeIndicator .8s cubic-bezier(.2, .75, .2, 1);
}

@keyframes activeIndicator {
  from {
    transform: scaleY(0);
    transform-origin: top;
  }

  to {
    transform: scaleY(1);
    transform-origin: top;
  }
}

/* Main content */

.problem-content {
  will-change: transform, opacity;
}

/* Number has subtle depth */

.big-number {
  animation: numberFloat 5s ease-in-out infinite;
}

@keyframes numberFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

/* Indicator */

.problem-indicator span {
  transition:
    width .4s cubic-bezier(.2, .75, .2, 1),
    background .3s ease;
}

.problem-indicator span:first-child {
  width: 42px;
}

/* Bottom progress */

.progress span {
  transition:
    width .45s cubic-bezier(.2, .75, .2, 1),
    background .3s ease;
}

.progress span.active {
  width: 44px;
}

/* Final transition arrow */

.transition-arrow {
  transition:
    transform .35s ease,
    background .35s ease,
    border-color .35s ease;
}

.transition-arrow:hover {
  transform: translateY(4px);
  border-color: rgba(224, 30, 122, .35);
  background: rgba(224, 30, 122, .06);
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {

  .display-grid,
  .problem-display::before,
  .big-number {
    animation: none;
  }

}

</style>
