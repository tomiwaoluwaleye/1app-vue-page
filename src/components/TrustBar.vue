<script setup>
const backers = [
  "Ventures Africa",
  "Techpoint Africa",
  "Microsoft for Startups",
  "Disrupt Africa",
  "Ingressive Capital",
  "Founders Factory",
];
</script>

<template>
  <section class="trustbar">
    <div class="wrap">
      <p class="trustbar-label">Backed by</p>
    </div>
    <div class="marquee">
      <div class="marquee-track">
        <span v-for="n in backers" :key="n">{{ n }}</span>
        <span v-for="n in backers" :key="n + '-dup'" aria-hidden="true">{{
          n
        }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trustbar {
  padding: 3.75rem 0 4.5rem;
  background: var(--bg);
}

.trustbar-label {
  margin: 0 0 1.75rem;
  text-align: center;
  color: var(--grey);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1;
  text-transform: uppercase;
}

.marquee {
  overflow: hidden;
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 8%,
    #000 92%,
    transparent
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: clamp(2.75rem, 7vw, 5.5rem);
  animation: scroll 32s linear infinite;
}

.marquee-track span {
  white-space: nowrap;
  color: var(--grey);
  font-family: "Fraunces", serif;
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  font-weight: 600;
  letter-spacing: 0.01em;
  opacity: 0.82;
  transition:
    color 0.25s ease,
    opacity 0.25s ease;
}

.marquee-track span:hover {
  color: var(--navy);
  opacity: 1;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 640px) {
  .trustbar {
    padding: 3rem 0 3.5rem;
  }

  .trustbar-label {
    margin-bottom: 1.4rem;
  }

  .marquee-track {
    gap: 2.5rem;
  }
}
</style>
