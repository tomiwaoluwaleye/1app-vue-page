<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const darkMode = ref(false)

const links = [
  { name: 'Features', id: 'features' },
  { name: 'Developer', id: 'developer' },
  { name: 'Company', id: 'company' },
  { name: 'Contact', id: 'contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const toggleTheme = () => {
  darkMode.value = !darkMode.value

  if (darkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="announce-bar">
    💳 Introducing 1App USD Virtual Cards. Get yours instantly.
    <a href="#features">Learn more →</a>
  </div>

  <header class="nav" :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#top" class="logo" @click="closeMenu">
        <img src="/assets/logo.png" alt="1App" class="logo-full" />
      </a>

      <nav class="navlinks">
        <a
          v-for="link in links"
          :key="link.id"
          :href="'#' + link.id"
        >
          {{ link.name }}
        </a>
      </nav>

      <div class="navright">
        <button
          class="theme-toggle"
          type="button"
          @click="toggleTheme"
          :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          {{ darkMode ? '☀' : '☾' }}
        </button>

        <a href="#login" class="nav-login">
          Log in
        </a>

        <a href="#wallet" class="btn btn-pink">
          Open Your Wallet
        </a>
      </div>

      <button
        class="hamburger-btn"
        :class="{ open: menuOpen }"
        type="button"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div v-if="menuOpen" class="mobile-menu">
      <div class="mobile-menu-links">
        <a
          v-for="link in links"
          :key="link.id"
          :href="'#' + link.id"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>
      </div>

      <div class="mobile-menu-actions">
        <button
          class="theme-toggle mobile-theme-btn"
          type="button"
          @click="toggleTheme"
        >
          {{ darkMode ? '☀ Light mode' : '☾ Dark mode' }}
        </button>

        <a href="#login" class="btn btn-outline" @click="closeMenu">
          Log in
        </a>

        <a href="#wallet" class="btn btn-pink" @click="closeMenu">
          Open Your Wallet
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.announce-bar {
  background: var(--ink);
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  padding: 9px 16px;
  position: relative;
  z-index: 250;
}

.announce-bar a {
  color: #ff9ec8;
  font-weight: 600;
  margin-left: 4px;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 200;
  transition: all 0.3s ease;
  padding: 18px 0;
}

.nav.scrolled {
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
  padding: 12px 0;
  box-shadow: 0 12px 40px -24px rgba(224, 30, 122, 0.35);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 32px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-full {
  height: 30px;
  width: auto;
  display: block;
}

.navlinks {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  font-weight: 500;
}

.navlinks a {
  position: relative;
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.2s ease;
}

.navlinks a:hover {
  color: var(--pink);
}

.navright {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-login {
  font-size: 14.5px;
  font-weight: 500;
}

.nav-login:hover {
  color: var(--pink);
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid var(--line);
  background: var(--surface);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: transform 0.3s ease;
}

.theme-toggle:hover {
  transform: rotate(20deg);
}

.btn-pink {
  background: linear-gradient(
    115deg,
    var(--pink),
    var(--pink-2),
    var(--pink)
  );
  background-size: 220% 100%;
  color: #fff;
  box-shadow: var(--shadow-pink-sm);
  animation: gradientShift 5s ease infinite;
}

.btn-pink:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-pink-md);
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.btn-outline {
  background: transparent;
  border: 1.5px solid var(--line);
  color: var(--text);
}

.btn-outline:hover {
  border-color: var(--pink);
  color: var(--pink);
  transform: translateY(-3px);
}

.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border: 1.5px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
  padding: 0;
}

.hamburger-btn span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text);
  margin: 0 auto;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hamburger-btn.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  border-top: 1px solid var(--line);
  background: var(--bg);
  overflow: hidden;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}

.mobile-menu-links a {
  padding: 13px 4px;
  font-size: 15.5px;
  font-weight: 500;
  color: var(--text);
  border-bottom: 1px solid var(--line);
}

.mobile-menu-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 20px 20px;
}

.mobile-theme-btn {
  width: 100%;
  border-radius: 9px;
}

.mobile-menu-actions .btn {
  width: 100%;
}

@media (max-width: 960px) {
  .navlinks,
  .navright {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }
}

@media (max-width: 640px) {
  .nav-inner {
    padding: 0 20px;
  }

  .logo-full {
    height: 27px;
  }

  .announce-bar {
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>