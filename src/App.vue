<template>
  <div class="app">

    <!-- Navigation -->
    <NavBar />

    <main>

      <!-- 01 — First impression -->
      <Hero />

      <!-- 02 — The problem -->
      <ProblemSection />

      <!-- 03 — The 1app idea -->
      <SolutionSection />

      <!-- 04 — Product experience -->
      <HowItWorks />

      <!-- 05 — Global movement -->
      <LiveTicker />

      <!-- 06 — Card / banking -->
      <CardFeature />

      <!-- 07 — Transfers -->
      <InteractiveDemo />

      <!-- 08 — Control + trust -->
      <SecuritySection />

      <!-- 09 — Business / API -->
      <DeveloperSection />

      <!-- 10 — Social proof -->
      <Testimonials />

      <!-- 11 — Final action -->
      <CTASection />

    </main>

    <SiteFooter />

  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import ProblemSection from './components/ProblemSection.vue'
import SolutionSection from './components/SolutionSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import LiveTicker from './components/LiveTicker.vue'
import CardFeature from './components/CardFeature.vue'
import InteractiveDemo from './components/InteractiveDemo.vue'
import SecuritySection from './components/SecuritySection.vue'
import DeveloperSection from './components/DeveloperSection.vue'
import Testimonials from './components/Testimonials.vue'
import CTASection from './components/CTASection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.app {
  width: 100%;
  min-height: 100vh;
  overflow-x: clip;
}

main {
  width: 100%;
}

/*
  Global section rhythm.
  Individual components can override this where
  they need tighter or more spacious composition.
*/

main > section {
  position: relative;
  width: 100%;
}
</style>