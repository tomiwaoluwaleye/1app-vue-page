<template>
  <header class="navbar" :class="{ scrolled: isScrolled, open: menuOpen }">
    <div class="nav-shell">

      <!-- Logo -->
      <a href="#" class="brand" @click="closeMenu">
        <img src="/assets/logo.png" alt="1app" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <a href="#product">Product</a>
        <a href="#how-it-works">How it works</a>
        <a href="#developers">Developers</a>
        <a href="#security">Security</a>
      </nav>

      <!-- Desktop Actions -->
      <div class="nav-actions">
        <a href="#" class="login-link">Log in</a>
        <a href="#cta" class="nav-cta">
          Get started
          <span>↗</span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-menu">

        <div class="mobile-links">
          <a href="#product" @click="closeMenu">
            <span>01</span>
            Product
            <b>↗</b>
          </a>

          <a href="#how-it-works" @click="closeMenu">
            <span>02</span>
            How it works
            <b>↗</b>
          </a>

          <a href="#developers" @click="closeMenu">
            <span>03</span>
            Developers
            <b>↗</b>
          </a>

          <a href="#security" @click="closeMenu">
            <span>04</span>
            Security
            <b>↗</b>
          </a>
        </div>

        <div class="mobile-actions">
          <a href="#" class="mobile-login" @click="closeMenu">
            Log in
          </a>

          <a href="#cta" class="mobile-cta" @click="closeMenu">
            Get started
            <span>↗</span>
          </a>
        </div>

        <div class="mobile-footer">
          <span>ONE APP</span>
          <span>YOUR MONEY. EVERYWHERE.</span>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value

  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 28px;
  transition:
    padding 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.nav-shell {
  width: min(1240px, 100%);
  margin: 0 auto;

  min-height: 72px;
  padding: 0 12px 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  border: 1px solid transparent;
  border-radius: 999px;

  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.35s ease;
}

.navbar.scrolled {
  padding-top: 12px;
}

.navbar.scrolled .nav-shell {
  background: rgba(255, 255, 255, 0.88);
  border-color: rgba(20, 18, 27, 0.08);
  box-shadow: 0 12px 40px rgba(27, 22, 64, 0.08);
  backdrop-filter: blur(18px);
}

/* Logo */

.brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.brand img {
  width: 94px;
  height: auto;
  display: block;
}

/* Desktop nav */

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-left: auto;
}

.desktop-nav a,
.login-link {
  position: relative;

  color: var(--ink, #14121b);
  text-decoration: none;

  font-family: var(--font-body, Inter, sans-serif);
  font-size: 14px;
  font-weight: 600;

  transition: color 0.25s ease;
}

.desktop-nav a::after {
  content: '';

  position: absolute;
  left: 0;
  bottom: -6px;

  width: 100%;
  height: 1px;

  background: var(--pink, #e01e7a);

  transform: scaleX(0);
  transform-origin: right;

  transition: transform 0.3s ease;
}

.desktop-nav a:hover {
  color: var(--pink, #e01e7a);
}

.desktop-nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Actions */

.nav-actions {
  display: flex;
  align-items: center;
  gap: 22px;
}

.login-link:hover {
  color: var(--pink, #e01e7a);
}

.nav-cta {
  min-height: 48px;
  padding: 0 18px 0 20px;

  display: inline-flex;
  align-items: center;
  gap: 13px;

  border-radius: 999px;

  background: var(--ink, #14121b);
  color: white;

  text-decoration: none;

  font-family: var(--font-body, Inter, sans-serif);
  font-size: 13px;
  font-weight: 700;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.nav-cta span {
  width: 27px;
  height: 27px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--pink, #e01e7a);
  color: white;

  font-size: 14px;

  transition: transform 0.25s ease;
}

.nav-cta:hover {
  transform: translateY(-2px);
  background: var(--navy, #1b1640);
  box-shadow: 0 12px 28px rgba(27, 22, 64, 0.18);
}

.nav-cta:hover span {
  transform: rotate(45deg);
}

/* Mobile toggle */

.menu-toggle {
  width: 48px;
  height: 48px;

  border: 0;
  border-radius: 50%;

  background: var(--ink, #14121b);

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  cursor: pointer;
}

.menu-toggle span {
  width: 17px;
  height: 1.5px;

  background: white;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.navbar.open .menu-toggle span:first-child {
  transform: translateY(3.75px) rotate(45deg);
}

.navbar.open .menu-toggle span:last-child {
  transform: translateY(-3.75px) rotate(-45deg);
}

/* Mobile menu */

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: -1;

  min-height: 100vh;
  padding: 120px 28px 30px;

  display: flex;
  flex-direction: column;

  background: #fff;
}

.mobile-links {
  display: flex;
  flex-direction: column;
}

.mobile-links a {
  min-height: 74px;

  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;

  border-bottom: 1px solid rgba(20, 18, 27, 0.1);

  color: var(--ink, #14121b);
  text-decoration: none;

  font-family: var(--font-display, Fraunces, serif);
  font-size: clamp(27px, 8vw, 42px);
  letter-spacing: -0.04em;
}

.mobile-links a span {
  align-self: start;
  padding-top: 12px;

  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0;
  color: var(--grey, #6b6875);
}

.mobile-links a b {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--pink-light, #fde8f1);
  color: var(--pink, #e01e7a);

  font-family: var(--font-body, Inter, sans-serif);
  font-size: 15px;
  font-weight: 500;
}

.mobile-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  margin-top: auto;
}

.mobile-login,
.mobile-cta {
  min-height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  text-decoration: none;

  font-family: var(--font-body, Inter, sans-serif);
  font-size: 14px;
  font-weight: 700;
}

.mobile-login {
  border: 1px solid rgba(20, 18, 27, 0.12);
  color: var(--ink, #14121b);
}

.mobile-cta {
  gap: 10px;

  background: var(--pink, #e01e7a);
  color: white;
}

.mobile-cta span {
  font-size: 16px;
}

.mobile-footer {
  margin-top: 18px;

  display: flex;
  justify-content: space-between;

  font-family: var(--font-mono, monospace);
  font-size: 8px;
  letter-spacing: 0.08em;

  color: var(--grey, #6b6875);
}

/* Transition */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.35s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Responsive */

@media (max-width: 900px) {
  .desktop-nav,
  .nav-actions {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .navbar {
    padding: 14px 16px;
  }

  .nav-shell {
    min-height: 64px;
    padding-left: 18px;
  }

  .brand img {
    width: 88px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 10px 12px;
  }

  .nav-shell {
    min-height: 60px;
    padding-left: 16px;
    padding-right: 7px;
  }

  .brand img {
    width: 82px;
  }

  .menu-toggle {
    width: 45px;
    height: 45px;
  }

  .mobile-menu {
    padding: 105px 20px 22px;
  }

  .mobile-links a {
    grid-template-columns: 34px 1fr auto;
    min-height: 70px;
  }
}
</style>