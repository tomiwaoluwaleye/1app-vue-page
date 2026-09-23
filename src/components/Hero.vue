<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const screens = [
  { key: 'dashboard', name: 'Overview', image: '/assets/dashboard.png' },
  { key: 'card', name: 'Cards', image: '/assets/card.png' },
  { key: 'dollar', name: 'Dollar Card', image: '/assets/dollar-card.png' },
  { key: 'transactions', name: 'Transactions', image: '/assets/transactions.png' },
  { key: 'fx', name: 'Exchange', image: '/assets/currency-swap.png' },
  { key: 'wallet', name: 'Wallet', image: '/assets/wallet.png' },
]

const currencies = [
  { symbol: '$', code: 'USD', angle: 0 },
  { symbol: '€', code: 'EUR', angle: 51 },
  { symbol: '£', code: 'GBP', angle: 102 },
  { symbol: 'KSh', code: 'KES', angle: 153 },
  { symbol: 'GH₵', code: 'GHS', angle: 204 },
  { symbol: 'C$', code: 'CAD', angle: 255 },
  { symbol: '₦', code: 'NGN', angle: 306 },
]

const activeScreen = ref(0)
const frozen = ref(false)
const balance = ref(0)

const tilt = ref({ x: 0, y: 0 })
const targetTilt = ref({ x: 0, y: 0 })

const scene = ref(null)
const hovering = ref(false)

let autoplayTimer
let balanceFrame
let tiltFrame

const active = computed(() => screens[activeScreen.value])

/* -----------------------------
   SCREEN CONTROL
----------------------------- */

function selectScreen(index) {
  activeScreen.value = index
  restartAutoplay()
}

function restartAutoplay() {
  clearTimeout(autoplayTimer)

  autoplayTimer = setTimeout(() => {
    if (!hovering.value) {
      activeScreen.value =
        (activeScreen.value + 1) % screens.length
    }

    restartAutoplay()
  }, 4200)
}

/* -----------------------------
   PREMIUM MOUSE TILT
----------------------------- */

function move(e) {
  if (!scene.value) return

  const rect = scene.value.getBoundingClientRect()

  targetTilt.value = {
    x: ((e.clientX - rect.left) / rect.width - 0.5),
    y: ((e.clientY - rect.top) / rect.height - 0.5),
  }

  startTiltAnimation()
}

function resetTilt() {
  targetTilt.value = { x: 0, y: 0 }
  startTiltAnimation()
}

function startTiltAnimation() {
  if (tiltFrame) return

  const animate = () => {
    tilt.value.x += (targetTilt.value.x - tilt.value.x) * 0.08
    tilt.value.y += (targetTilt.value.y - tilt.value.y) * 0.08

    const finished =
      Math.abs(targetTilt.value.x - tilt.value.x) < 0.001 &&
      Math.abs(targetTilt.value.y - tilt.value.y) < 0.001

    if (finished) {
      tiltFrame = null
      return
    }

    tiltFrame = requestAnimationFrame(animate)
  }

  tiltFrame = requestAnimationFrame(animate)
}

/* -----------------------------
   BALANCE COUNTER
----------------------------- */

function countBalance() {
  const start = performance.now()
  const duration = 1500

  function tick(now) {
    const progress = Math.min(
      (now - start) / duration,
      1
    )

    const eased =
      1 - Math.pow(1 - progress, 3)

    balance.value = Math.round(200000 * eased)

    if (progress < 1) {
      balanceFrame = requestAnimationFrame(tick)
    }
  }

  balanceFrame = requestAnimationFrame(tick)
}

/* -----------------------------
   LIFECYCLE
----------------------------- */

onMounted(() => {
  restartAutoplay()
  countBalance()
})

onUnmounted(() => {
  clearTimeout(autoplayTimer)
  cancelAnimationFrame(balanceFrame)
  cancelAnimationFrame(tiltFrame)
})
</script>

<template>
  <section id="hero" class="hero" v-reveal>

    <div class="hero-glow hero-glow-one"></div>
    <div class="hero-glow hero-glow-two"></div>

    <div class="hero-grid"></div>

    <div class="wrap hero-inner">

      <!-- LEFT -->
      <div class="hero-copy" v-reveal>

        <div class="hero-eyebrow">
          <span class="pulse-dot"></span>
          One app. Your money. Everywhere.
        </div>

        <h1>
          <span>Move money</span>
          <span class="accent">without borders.</span>
        </h1>

        <p class="hero-description">
          One powerful wallet for everyday payments, cards,
          currencies and global transfers — designed to make
          moving your money feel effortless.
        </p>

        <div class="hero-actions">
          <a href="#cta" class="btn btn-pink btn-arrow">
            Get started
            <span>→</span>
          </a>

          <a href="#product" class="btn btn-outline">
            Explore 1app
          </a>
        </div>

        <div class="hero-trust">
          <span>
            <b>01</b>
            One account
          </span>

          <span>
            <b>02</b>
            Multiple currencies
          </span>

          <span>
            <b>03</b>
            Built for movement
          </span>
        </div>

      </div>

      <!-- RIGHT -->
      <div
      class="hero-visual"
      ref="scene"
      @mousemove="move"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false; resetTilt()"
      >

        <div class="currency-orbit" aria-hidden="true">

          <div class="orbit-ring orbit-ring-one"></div>
          <div class="orbit-ring orbit-ring-two"></div>

          <div
            v-for="c in currencies"
            :key="c.code"
            class="currency-item"
            :style="{
              '--angle': c.angle + 'deg',
              '--delay': (-c.angle / 360 * 14) + 's'
            }"
          >
            <div class="currency-badge">
              <strong>{{ c.symbol }}</strong>
              <span>{{ c.code }}</span>
            </div>
          </div>

        </div>

        <div class="scene-blob"></div>

        <div
          class="phone-3d"
          :style="{
            transform: `
              translate(${tilt.x * 18}px, ${tilt.y * 14}px)
              rotateY(${tilt.x * 8}deg)
              rotateX(${tilt.y * -5}deg)
            `
          }"
        >

          <div class="phone-shell">

            <span class="phone-side-btn phone-power-btn"></span>
            <span class="phone-side-btn phone-mute-btn"></span>
            <span class="phone-side-btn phone-vol-up"></span>
            <span class="phone-side-btn phone-vol-down"></span>

            <div class="phone-inner">

              <div class="phone-notch"></div>

              <div class="phone-screen">

                <div class="phone-tabs">
                  <span
                    v-for="(s, i) in screens"
                    :key="s.key"
                    class="phone-tab-dot"
                    :class="{ active: i === activeScreen }"
                  ></span>
                </div>

                <Transition
                  name="phone-screen"
                  mode="out-in"
                >
                  <img
                    :key="active.key"
                    :src="active.image"
                    :alt="`1app ${active.name}`"
                  />
                </Transition>

                <button
                  v-if="active.key === 'card'"
                  class="phone-freeze"
                  :class="{ on: frozen }"
                  @click="frozen = !frozen"
                >
                  {{ frozen ? 'Frozen' : 'Freeze' }}
                </button>

                <div class="phone-balance-overlay">
                  ₦{{ balance.toLocaleString() }}
                  <small>Available balance</small>
                </div>

              </div>

              <div class="phone-home-indicator"></div>

            </div>

          </div>

        </div>

        <!-- PRODUCT LABEL -->
        <div class="hero-product-label">
          <span class="label-dot"></span>

          <div>
            <strong>{{ active.name }}</strong>
            <small>Product preview</small>
          </div>

          <span class="label-arrow">↗</span>
        </div>

        <!-- SCREEN NAVIGATION -->
        <div class="screen-selector">

          <button
            v-for="(s, i) in screens"
            :key="s.key"
            class="screen-item"
            :class="{ active: i === activeScreen }"
            @click="selectScreen(i)"
          >
            <small>0{{ i + 1 }}</small>
            {{ s.name }}
          </button>

        </div>

      </div>

    </div>

    <!-- MOBILE PRODUCT CONTROLS -->
    <div class="phone-tab-buttons wrap">

      <button
        v-for="(s, i) in screens"
        :key="s.key"
        class="phone-tab-btn"
        :class="{ active: i === activeScreen }"
        @click="selectScreen(i)"
      >
        {{ s.name }}
      </button>

    </div>

    <div class="hero-scroll">
      <span>Scroll to explore</span>
      <i></i>
    </div>

  </section>
</template>