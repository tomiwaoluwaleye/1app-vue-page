<script setup>
import { ref } from 'vue'

const reasons = [
  {
    number: '01',
    title: 'One money workspace',
    body: 'Bring everyday payments, cards, currencies and transfers into one experience instead of jumping between different tools.',
  },
  {
    number: '02',
    title: 'Built for global spending',
    body: 'Move beyond a local-only banking experience with tools designed around international payments and digital spending.',
  },
  {
    number: '03',
    title: 'See before you move',
    body: 'Understand the amount, destination and transfer details before you commit to a transaction.',
  },
  {
    number: '04',
    title: 'Designed around control',
    body: 'Keep a clearer view of your money while moving between the ways you receive, hold, exchange and spend.',
  },
  {
    number: '05',
    title: 'A product, not a patchwork',
    body: '1app brings multiple money experiences together instead of making you manage each one separately.',
  },
  {
    number: '06',
    title: 'Made for movement',
    body: 'Whether the destination is next door or across the world, the experience is designed around moving money simply.',
  },
]

const activeReason = ref(0)

function selectReason(index) {
  activeReason.value = index
}
</script>


<template>
  <section id="company" class="section why-premium">

    <div class="wrap">

      <!-- INTRO -->
      <div class="why-intro" v-reveal>

        <div>
          <p class="eyebrow">
            Why 1app
          </p>

          <h2>
            Money should feel
            <span>less complicated.</span>
          </h2>
        </div>

        <p>
          The difference isn't another feature list.
          It's bringing the important parts of your money life
          into one coherent experience.
        </p>

      </div>


      <!-- DIFFERENCE EXPERIENCE -->
      <div class="difference" v-reveal>

        <div class="difference-background"></div>


        <!-- LEFT -->
        <div class="difference-copy">

          <span class="difference-kicker">
            THE 1APP APPROACH
          </span>

          <div class="difference-number">
            {{ reasons[activeReason].number }}
          </div>

          <h3>
            {{ reasons[activeReason].title }}
          </h3>

          <p>
            {{ reasons[activeReason].body }}
          </p>

          <div class="difference-meta">
            <span>
              {{ String(activeReason + 1).padStart(2, '0') }}
            </span>

            <div class="meta-line">
              <div
                :style="{
                  width: `${((activeReason + 1) / reasons.length) * 100}%`
                }"
              ></div>
            </div>

            <span>
              {{ String(reasons.length).padStart(2, '0') }}
            </span>
          </div>

        </div>


        <!-- RIGHT -->
        <div class="reason-list">

          <button
            v-for="(reason, index) in reasons"
            :key="reason.number"
            class="reason-item"
            :class="{ active: index === activeReason }"
            @click="selectReason(index)"
          >

            <span class="reason-number">
              {{ reason.number }}
            </span>

            <span class="reason-title">
              {{ reason.title }}
            </span>

            <span class="reason-arrow">
              ↗
            </span>

          </button>

        </div>

      </div>


      <!-- STATEMENT -->
      <div class="why-bottom" v-reveal>

        <span>
          1APP / PHILOSOPHY
        </span>

        <p>
          Less switching.
          <strong>More control.</strong>
        </p>

        <span>
          06
        </span>

      </div>

    </div>

  </section>
</template>


<style scoped>

/* =========================================================
   SECTION
   ========================================================= */

.why-premium {
  padding-top: clamp(7rem, 12vw, 11rem);
  padding-bottom: clamp(7rem, 12vw, 11rem);

  background: #fff;
}


/* =========================================================
   INTRO
   ========================================================= */

.why-intro {
  display: grid;

  grid-template-columns: 1.1fr .65fr;

  gap: 5rem;

  align-items: end;

  margin-bottom: 4rem;
}


.why-intro h2 {
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


.why-intro h2 span {
  display: block;

  color:
    var(--brand, #e01e7a);

  font-style: italic;
}


.why-intro > p {
  max-width: 390px;

  color:
    var(--ink-soft, #6b6875);

  font-size: 1rem;

  line-height: 1.75;
}


/* =========================================================
   DIFFERENCE
   ========================================================= */

.difference {
  position: relative;

  display: grid;

  grid-template-columns: .9fr 1.1fr;

  min-height: 560px;

  overflow: hidden;

  border-radius: 34px;

  background: #19153d;

  color: #fff;

  box-shadow:
    0 35px 90px rgba(27,22,64,.16);
}


.difference-background {
  position: absolute;

  inset: 0;

  background:
    radial-gradient(
      circle at 22% 50%,
      rgba(224,30,122,.25),
      transparent 32%
    ),
    radial-gradient(
      circle at 85% 20%,
      rgba(100,86,180,.15),
      transparent 30%
    );

  pointer-events: none;
}


.difference-background::after {
  content: "";

  position: absolute;

  inset: 0;

  opacity: .08;

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
      circle at 25% 50%,
      black,
      transparent 65%
    );
}


/* =========================================================
   COPY
   ========================================================= */

.difference-copy {
  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding:
    clamp(2rem, 5vw, 4.5rem);
}


.difference-kicker {
  color:
    rgba(255,255,255,.38);

  font-family:
    var(--font-mono, monospace);

  font-size: .56rem;

  letter-spacing: .15em;
}


.difference-number {
  margin-top: 3.5rem;

  color:
    rgba(255,255,255,.18);

  font-family:
    var(--font-mono, monospace);

  font-size: .65rem;
}


.difference-copy h3 {
  max-width: 470px;

  margin-top: .7rem;

  font-family:
    var(--font-display, "Fraunces", Georgia, serif);

  font-size:
    clamp(2.7rem, 5vw, 5.2rem);

  line-height: .9;

  letter-spacing: -.055em;
}


.difference-copy p {
  max-width: 400px;

  margin-top: 1.2rem;

  color:
    rgba(255,255,255,.55);

  font-size: .9rem;

  line-height: 1.75;
}


/* META */

.difference-meta {
  display: flex;

  align-items: center;

  gap: .7rem;

  margin-top: 3rem;

  color:
    rgba(255,255,255,.30);

  font-family:
    var(--font-mono, monospace);

  font-size: .5rem;
}


.meta-line {
  width: 100px;

  height: 1px;

  background:
    rgba(255,255,255,.12);
}


.meta-line div {
  height: 100%;

  background: #e01e7a;

  transition:
    width .4s ease;
}


/* =========================================================
   REASON LIST
   ========================================================= */

.reason-list {
  position: relative;

  z-index: 3;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding:
    2rem clamp(1.5rem, 4vw, 4rem);

  border-left:
    1px solid rgba(255,255,255,.08);
}


.reason-item {
  display: grid;

  grid-template-columns: 45px 1fr auto;

  align-items: center;

  gap: 1rem;

  width: 100%;

  padding: 1.25rem .8rem;

  border: 0;

  border-bottom:
    1px solid rgba(255,255,255,.08);

  background: transparent;

  color:
    rgba(255,255,255,.42);

  text-align: left;

  cursor: pointer;

  transition:
    color .3s ease,
    padding .3s ease,
    background .3s ease;
}


.reason-item:first-child {
  border-top:
    1px solid rgba(255,255,255,.08);
}


.reason-item:hover {
  padding-left: 1.2rem;

  color: #fff;
}


.reason-item.active {
  padding-left: 1.2rem;

  color: #fff;

  background:
    linear-gradient(
      90deg,
      rgba(224,30,122,.12),
      transparent
    );
}


.reason-number {
  color:
    rgba(255,255,255,.20);

  font-family:
    var(--font-mono, monospace);

  font-size: .55rem;
}


.reason-item.active .reason-number {
  color: #e95a9b;
}


.reason-title {
  font-size: .82rem;

  font-weight: 600;

  letter-spacing: -.01em;
}


.reason-arrow {
  color:
    rgba(255,255,255,.20);

  transition:
    color .25s ease,
    transform .25s ease;
}


.reason-item:hover .reason-arrow,
.reason-item.active .reason-arrow {
  color: #e95a9b;

  transform:
    translate(3px, -3px);
}


/* =========================================================
   BOTTOM
   ========================================================= */

.why-bottom {
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


.why-bottom span {
  color: #aaa5af;

  font-family:
    var(--font-mono, monospace);

  font-size: .52rem;

  letter-spacing: .12em;
}


.why-bottom p {
  justify-self: center;

  color:
    var(--ink-soft, #6b6875);

  font-size: .8rem;

  text-align: center;
}


.why-bottom strong {
  color: #1b1640;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 850px) {

  .why-intro {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .difference {
    grid-template-columns: 1fr;
  }

  .reason-list {
    border-left: 0;

    border-top:
      1px solid rgba(255,255,255,.08);
  }

}


@media (max-width: 600px) {

  .why-intro h2 {
    font-size: 3.4rem;
  }

  .difference {
    border-radius: 25px;
  }

  .difference-copy {
    padding: 2rem 1.5rem;
  }

  .difference-number {
    margin-top: 2.5rem;
  }

  .difference-copy h3 {
    font-size: 2.8rem;
  }

  .reason-list {
    padding: 1rem;
  }

  .reason-item {
    grid-template-columns: 35px 1fr auto;

    padding: 1rem .5rem;
  }

  .why-bottom {
    grid-template-columns: 1fr;

    gap: .6rem;
  }

  .why-bottom p {
    justify-self: start;

    text-align: left;
  }

}
</style>