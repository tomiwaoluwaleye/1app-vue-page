<script setup>
import { ref } from 'vue'

const testimonials = [
  {
    number: '01',
    quote:
      'A simpler way to keep track of the different ways I use money.',
    name: 'Adaeze N.',
    role: 'Freelance designer',
    tag: 'EVERYDAY MONEY',
  },
  {
    number: '02',
    quote:
      'Having payments, transfers and spending tools together makes the experience feel much more connected.',
    name: 'Tunde B.',
    role: 'Business owner',
    tag: 'BUSINESS',
  },
  {
    number: '03',
    quote:
      'The product feels designed around the way people actually move money today.',
    name: 'Ifeoma R.',
    role: '1app customer',
    tag: 'GLOBAL SPENDING',
  },
]

const active = ref(0)

function selectTestimonial(index) {
  active.value = index
}
</script>

<template>
  <section id="contact" class="section testimonials-premium">

    <div class="wrap">

      <!-- INTRO -->
      <div class="testimonials-intro" v-reveal>

        <div>
          <p class="eyebrow">The experience</p>

          <h2>
            Built around
            <span>real life.</span>
          </h2>
        </div>

        <p>
          The best financial products don't make money feel more complicated.
          They fit naturally into the way people already live, work and move.
        </p>

      </div>


      <!-- FEATURED TESTIMONIAL -->
      <div class="testimonial-stage" v-reveal>

        <div class="testimonial-mark">
          “
        </div>

        <div class="testimonial-main">

          <Transition name="quote" mode="out-in">

            <blockquote :key="active">

              {{ testimonials[active].quote }}

            </blockquote>

          </Transition>


          <Transition name="person" mode="out-in">

            <div
              :key="testimonials[active].name"
              class="testimonial-person"
            >

              <div class="avatar">
                {{ testimonials[active].name[0] }}
              </div>

              <div>
                <strong>
                  {{ testimonials[active].name }}
                </strong>

                <span>
                  {{ testimonials[active].role }}
                </span>
              </div>

            </div>

          </Transition>

        </div>


        <!-- RIGHT INFO -->
        <div class="testimonial-meta">

          <span class="meta-label">
            {{ testimonials[active].tag }}
          </span>

          <div class="meta-number">
            {{ testimonials[active].number }}
          </div>

          <p>
            What matters is not adding more financial tools.
            It's making the ones you use feel connected.
          </p>

        </div>

      </div>


      <!-- TESTIMONIAL NAVIGATION -->
      <div class="testimonial-nav" v-reveal>

        <button
          v-for="(item, index) in testimonials"
          :key="item.number"
          class="testimonial-nav-item"
          :class="{ active: index === active }"
          @click="selectTestimonial(index)"
        >

          <span class="nav-number">
            {{ item.number }}
          </span>

          <span class="nav-name">
            {{ item.name }}
          </span>

          <span class="nav-role">
            {{ item.role }}
          </span>

          <span class="nav-arrow">
            ↗
          </span>

        </button>

      </div>


      <!-- BOTTOM -->
      <div class="testimonials-bottom" v-reveal>

        <span>PEOPLE / 1APP</span>

        <p>
          Less friction.
          <strong>More room for life.</strong>
        </p>

        <span>03</span>

      </div>

    </div>

  </section>
</template>


<style scoped>

.testimonials-premium {
  position: relative;

  padding: clamp(5rem, 10vw, 9rem) 0;

  background: var(--paper);

  overflow: hidden;
}


/* INTRO */

.testimonials-intro {
  display: grid;

  grid-template-columns: minmax(280px, 1fr) minmax(280px, 0.7fr);

  gap: clamp(3rem, 8vw, 9rem);

  align-items: end;

  margin-bottom: 4rem;
}

.testimonials-intro h2 {
  margin: 0;

  max-width: 650px;

  font-family: var(--font-display);

  font-size: clamp(3rem, 5.5vw, 6rem);

  line-height: 0.92;

  letter-spacing: -0.06em;

  font-weight: 500;
}

.testimonials-intro h2 span {
  display: block;

  color: var(--brand);

  font-style: italic;
}

.testimonials-intro > p {
  max-width: 420px;

  margin: 0;

  color: var(--ink-soft);

  font-size: 0.96rem;

  line-height: 1.85;
}


/* STAGE */

.testimonial-stage {
  position: relative;

  display: grid;

  grid-template-columns: 90px minmax(0, 1.3fr) minmax(220px, 0.7fr);

  gap: 2rem;

  min-height: 400px;

  padding: clamp(2rem, 5vw, 4rem);

  overflow: hidden;

  border-radius: var(--radius-lg);

  background: var(--ink);

  color: white;

  box-shadow:
    0 30px 80px rgba(27, 22, 64, 0.12);
}


/* BIG QUOTE */

.testimonial-mark {
  font-family: var(--font-display);

  font-size: 8rem;

  line-height: 0.7;

  color: var(--brand);

  opacity: 0.9;
}


/* MAIN */

.testimonial-main {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: center;
}

.testimonial-main blockquote {
  max-width: 720px;

  margin: 0;

  font-family: var(--font-display);

  font-size: clamp(2rem, 4vw, 4rem);

  line-height: 1.03;

  letter-spacing: -0.045em;

  font-weight: 400;

  color: white;
}


/* PERSON */

.testimonial-person {
  display: flex;

  align-items: center;

  gap: 0.8rem;

  margin-top: 2.5rem;
}

.avatar {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--brand);

  color: white;

  font-family: var(--font-display);

  font-weight: 600;
}

.testimonial-person strong {
  display: block;

  font-size: 0.8rem;

  font-weight: 600;
}

.testimonial-person span {
  display: block;

  margin-top: 0.2rem;

  color: rgba(255,255,255,0.4);

  font-size: 0.68rem;
}


/* META */

.testimonial-meta {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding-left: 2rem;

  border-left: 1px solid rgba(255,255,255,0.1);
}

.meta-label {
  font-family: var(--font-mono);

  font-size: 0.6rem;

  letter-spacing: 0.12em;

  color: rgba(255,255,255,0.4);
}

.meta-number {
  font-family: var(--font-mono);

  font-size: clamp(4rem, 7vw, 7rem);

  line-height: 1;

  color: rgba(255,255,255,0.08);
}

.testimonial-meta p {
  max-width: 220px;

  margin: 0;

  color: rgba(255,255,255,0.45);

  font-size: 0.72rem;

  line-height: 1.7;
}


/* TRANSITIONS */

.quote-enter-active,
.quote-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.quote-enter-from {
  opacity: 0;

  transform: translateY(15px);
}

.quote-leave-to {
  opacity: 0;

  transform: translateY(-15px);
}

.person-enter-active,
.person-leave-active {
  transition: opacity 0.3s ease;
}

.person-enter-from,
.person-leave-to {
  opacity: 0;
}


/* NAVIGATION */

.testimonial-nav {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  margin-top: 1.5rem;

  border-top: 1px solid var(--line);

  border-bottom: 1px solid var(--line);
}

.testimonial-nav-item {
  display: grid;

  grid-template-columns: 35px 1fr auto 25px;

  align-items: center;

  gap: 0.7rem;

  padding: 1.2rem 1rem;

  border: none;

  border-right: 1px solid var(--line);

  background: transparent;

  color: var(--ink-faint);

  text-align: left;

  cursor: pointer;

  transition:
    color 0.3s ease,
    background 0.3s ease;
}

.testimonial-nav-item:last-child {
  border-right: none;
}

.testimonial-nav-item:hover,
.testimonial-nav-item.active {
  background: var(--pink-pale);

  color: var(--ink);
}

.nav-number {
  font-family: var(--font-mono);

  font-size: 0.6rem;
}

.testimonial-nav-item.active .nav-number {
  color: var(--brand);
}

.nav-name {
  font-size: 0.78rem;

  font-weight: 600;
}

.nav-role {
  font-size: 0.65rem;

  color: var(--ink-faint);
}

.nav-arrow {
  color: var(--brand);

  opacity: 0;

  transform: translate(-4px, 4px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.testimonial-nav-item:hover .nav-arrow,
.testimonial-nav-item.active .nav-arrow {
  opacity: 1;

  transform: translate(0, 0);
}


/* BOTTOM */

.testimonials-bottom {
  display: flex;

  justify-content: space-between;

  padding-top: 1rem;

  font-family: var(--font-mono);

  font-size: 0.58rem;

  letter-spacing: 0.12em;

  color: var(--ink-faint);
}

.testimonials-bottom p {
  margin: 0;

  font-family: var(--font-body);

  font-size: 0.78rem;

  letter-spacing: 0;

  color: var(--ink-soft);
}

.testimonials-bottom strong {
  color: var(--ink);

  font-weight: 600;
}


/* RESPONSIVE */

@media (max-width: 900px) {

  .testimonials-intro {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .testimonial-stage {
    grid-template-columns: 60px 1fr;
  }

  .testimonial-meta {
    grid-column: 2;

    padding-left: 0;

    padding-top: 1.5rem;

    border-left: none;

    border-top: 1px solid rgba(255,255,255,0.1);

    flex-direction: row;

    gap: 2rem;
  }

  .meta-number {
    display: none;
  }

  .testimonial-nav {
    grid-template-columns: 1fr;
  }

  .testimonial-nav-item {
    border-right: none;

    border-bottom: 1px solid var(--line);
  }

  .testimonial-nav-item:last-child {
    border-bottom: none;
  }

}

@media (max-width: 640px) {

  .testimonials-premium {
    padding: 4.5rem 0;
  }

  .testimonials-intro h2 {
    font-size: 3rem;
  }

  .testimonial-stage {
    grid-template-columns: 1fr;

    min-height: 430px;

    padding: 2rem;
  }

  .testimonial-mark {
    position: absolute;

    top: 1.5rem;
    right: 1.5rem;

    font-size: 6rem;
  }

  .testimonial-main {
    padding-top: 3rem;
  }

  .testimonial-main blockquote {
    font-size: 2rem;
  }

  .testimonial-meta {
    grid-column: auto;

    flex-direction: column;

    gap: 1rem;

    padding-top: 1.5rem;
  }

  .testimonial-meta p {
    max-width: 100%;
  }

  .testimonials-bottom p {
    display: none;
  }

}

</style>