<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const theme = ref('light')
const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('')

const navSections = ['features', 'developer', 'company', 'contact']

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
}

function onScroll() {
  scrolled.value = window.scrollY > 20
  let current = ''
  for (const id of navSections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top < 140) current = id
  }
  activeSection.value = current
}

const phoneScreens = ['wallet', 'card', 'history', 'fx', 'analytics']
const phoneLabels = ['Wallet', 'Card', 'History', 'Exchange', 'Analytics']
const screenIdx = ref(0)
const frozen = ref(false)
const balance = ref(0)
let heroTimer
let balanceFrame

function startCountUp() {
  const start = performance.now()
  const duration = 1800
  function tick(now) {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    balance.value = Math.round(200000 * eased)
    if (p < 1) balanceFrame = requestAnimationFrame(tick)
  }
  balanceFrame = requestAnimationFrame(tick)
}

function selectScreen(i) {
  screenIdx.value = i
  heroAutoplay.value = false
}
const heroAutoplay = ref(true)

const screenData = computed(() => phoneScreens[screenIdx.value])

const amount = ref('500000')
const sent = ref(false)
const receiveGBP = computed(() => {
  const n = parseFloat(String(amount.value).replace(/,/g, '')) || 0
  return n / 2040
})
let sentTimer

function handleTransfer() {
  sent.value = true
  clearTimeout(sentTimer)
  sentTimer = setTimeout(() => { sent.value = false }, 3200)
}

const feed = ref([
  { time:'09:01', label:'Payment received', amt:'+₦30,000', pos:true, status:'Completed' },
  { time:'09:06', label:'Netflix', amt:'-₦5,500', pos:false, status:'Completed' },
  { time:'09:10', label:'Transfer to Ade B.', amt:'-₦20,000', pos:false, status:'Successful' },
])
const pool = [
  { time:'09:14', label:'Salary · TechCorp', amt:'+₦450,000', pos:true, status:'Completed' },
  { time:'09:19', label:'Airtime top-up', amt:'-₦2,000', pos:false, status:'Completed' },
  { time:'09:24', label:'USD card funded', amt:'-$50.00', pos:false, status:'Successful' },
  { time:'09:27', label:'Client invoice paid', amt:'+₦180,000', pos:true, status:'Completed' },
]
let feedIndex = 0
let feedTimer

const email = ref('')
const joined = ref(false)
function joinNewsletter() {
  if (email.value.includes('@')) joined.value = true
}

const productFeatures = [
  { icon:'📥', title:'Receive Payments', body:'Get paid by clients anywhere, straight into your naira or dollar balance.', bg:'var(--pink-light)', color:'var(--pink)' },
  { icon:'💳', title:'Virtual Dollar Card', body:'Spin up a card for subscriptions and online shopping in a minute.', bg:'#EDEBFB', color:'#6C5CE7' },
  { icon:'🌍', title:'International Transfers', body:'Send to family abroad without losing a day to bank processing.', bg:'#E7F7EF', color:'#1FAE62' },
  { icon:'🔁', title:'Currency Conversion', body:'Swap naira, dollars, and pounds at the mid-market rate, instantly.', bg:'#FFF3E0', color:'#E6942C' },
  { icon:'🏢', title:'Business Payments', body:'Pay vendors and run payroll, or issue accounts via our API.', bg:'#E8F1FE', color:'#2D7FF9' },
]

const pains = [
  { icon:'💸', title:'Hidden fees in the rate', body:'Banks quote a "great" rate, then bury the real cost inside the exchange spread.' },
  { icon:'⏳', title:'Days for a simple transfer', body:'A payment to family abroad can sit "processing" for 2–3 business days.' },
  { icon:'📄', title:'Paperwork for a dollar account', body:'Opening a domiciliary account often means a branch visit and a stack of forms.' },
]

const reasons = [
  'Instant virtual dollar cards',
  'Pay internationally, no wire drama',
  'No hidden fees, ever',
  'Bank-level encryption on every transfer',
  'Fast transfers, seconds not days',
  'CBN-licensed partner banks',
]

const testimonials = [
  { name:'Adaeze N.', role:'Frequent user', text:'Sending money abroad now takes seconds, not a whole afternoon at the bank.', color:'#E01E7A' },
  { name:'Tunde B.', role:'Small business owner', text:'I invoice clients abroad and pay my team in Lagos the same day. That alone justified switching.', color:'#6C5CE7' },
  { name:'Ifeoma K.', role:'Verified customer', text:'Support actually responds fast. That shouldn’t feel rare for a payments app, but it does.', color:'#2D7FF9' },
]

const backedNames = ['Tekedia','Techpoint Africa','Microsoft for Startups','Disrupt Africa','Ingressive Capital']

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'light')
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  startCountUp()
  heroTimer = setInterval(() => {
    if (heroAutoplay.value) screenIdx.value = (screenIdx.value + 1) % phoneScreens.length
  }, 3800)
  feedTimer = setInterval(() => {
    const next = pool[feedIndex % pool.length]
    feedIndex += 1
    feed.value = [next, ...feed.value].slice(0, 4)
  }, 2600)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  clearInterval(heroTimer)
  clearInterval(feedTimer)
  cancelAnimationFrame(balanceFrame)
  clearTimeout(sentTimer)
})

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="site">
    <div class="announce-bar">
      💳 Introducing 1App USD Virtual Cards. Get yours instantly.<a href="#features">Learn more →</a>
    </div>

    <header class="nav" :class="{ scrolled }">
      <div class="nav-inner">
        <a href="#hero" class="logo" @click="menuOpen=false"><img src="/logo-full.png" alt="1App" class="logo-full" /></a>
        <nav class="navlinks">
          <a v-for="id in navSections" :key="id" :href="'#'+id" :class="{active: activeSection===id}">{{ id.charAt(0).toUpperCase()+id.slice(1) }}</a>
        </nav>
        <div class="navright">
          <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle dark mode">{{ theme==='dark' ? '☀️' : '🌙' }}</button>
          <a class="btn btn-outline" href="#login">Login</a>
          <a class="btn btn-pink btn-gradient-anim btn-arrow" href="#wallet">Open Your Wallet <span class="arrow">→</span></a>
        </div>
        <button class="hamburger-btn" :class="{open:menuOpen}" @click="menuOpen=!menuOpen" aria-label="Toggle menu" :aria-expanded="menuOpen"><span></span><span></span><span></span></button>
      </div>
      <div v-if="menuOpen" class="mobile-menu">
        <nav class="mobile-menu-links">
          <a v-for="id in navSections" :key="id" :href="'#'+id" :class="{active: activeSection===id}" @click="menuOpen=false">{{ id.charAt(0).toUpperCase()+id.slice(1) }}</a>
        </nav>
        <div class="mobile-menu-actions">
          <button class="btn btn-outline mobile-theme-btn" @click="toggleTheme">{{ theme==='dark' ? '☀️ Light mode' : '🌙 Dark mode' }}</button>
          <a class="btn btn-outline" href="#login" @click="menuOpen=false">Login</a>
          <a class="btn btn-pink btn-gradient-anim btn-arrow" href="#wallet" @click="menuOpen=false">Open Your Wallet <span class="arrow">→</span></a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="glow-blob glow-blob-anim" style="width:520px;height:520px;background:var(--glow-1);top:-170px;left:-170px"></div>
        <div class="glow-blob glow-blob-anim" style="width:420px;height:420px;background:var(--glow-2);top:20%;right:-150px;animation-delay:2s"></div>
        <div class="wrap hero-inner">
          <div class="hero-copy reveal is-visible">
            <span class="eyebrow-pill"><span class="pulse-dot"></span>Live · ₦20B+ processed for Nigerians</span>
            <h1>
              <span class="line">One Wallet.</span>
              <span class="line">Every Currency.</span>
              <span class="line accent">Zero Stress.</span>
            </h1>
            <p class="sub">Hold naira and dollars in one account, spin up a virtual dollar card in minutes, and move money across borders without a branch queue in sight.</p>
            <div class="hero-ctas">
              <a class="btn btn-gradient-anim btn-arrow" href="#wallet">Open Your Wallet <span class="arrow">→</span></a>
              <a class="btn btn-outline" href="#developer">View Documentation</a>
            </div>
            <div class="trust-mini">
              <span>🔒 CBN-licensed</span><span>⚡ Settles in seconds</span><span>🛡️ PCI-DSS certified</span>
            </div>
          </div>

          <div>
            <div class="hero-scene">
              <div class="scene-blob"></div>
              <div class="phone-3d">
                <div class="phone-shell">
                  <span class="phone-side-btn phone-power-btn"></span>
                  <span class="phone-side-btn phone-mute-btn"></span>
                  <span class="phone-side-btn phone-vol-up"></span>
                  <span class="phone-side-btn phone-vol-down"></span>
                  <div class="phone-inner">
                    <div class="phone-notch"></div>
                    <div class="phone-screen">
                      <div class="phone-tabs">
                        <span v-for="(s,i) in phoneScreens" :key="s" class="phone-tab-dot" :class="{active:i===screenIdx}"></span>
                      </div>
                      <div class="phone-screen-inner">
                        <Transition name="phone-screen-fade" mode="out-in">
                          <div :key="screenData" class="phone-content">
                            <template v-if="screenData==='wallet'">
                              <div class="phone-greeting">Good afternoon, there 👋</div>
                              <div class="phone-balance-card"><div class="phone-balance-label">WALLET BALANCE</div><div class="phone-balance-amt">₦{{ balance.toLocaleString() }}.00</div></div>
                              <div class="phone-activity">Recent activity</div>
                              <div class="phone-activity-row"><span>Payment received</span><span class="amt">+₦85,000</span></div>
                              <div class="phone-activity-row"><span>Netflix subscription</span><span style="color:var(--grey)">-$15.00</span></div>
                              <div class="phone-actions"><div class="phone-action"><div class="phone-action-icon">↗</div>Transfer</div><div class="phone-action"><div class="phone-action-icon">◎</div>Bills</div><div class="phone-action"><div class="phone-action-icon">▤</div>Cards</div><div class="phone-action"><div class="phone-action-icon">$</div>Savings</div></div>
                            </template>
                            <template v-else-if="screenData==='card'">
                              <div class="phone-greeting">Your virtual card</div>
                              <div class="mini-visa" :style="{opacity:frozen?0.5:1}"><div class="chip"></div><div class="num">•••• •••• •••• 4801</div><div style="display:flex;justify-content:space-between;margin-top:14px;font-size:9px;opacity:.8"><span>1APP USER</span><span>12/29</span></div></div>
                              <div class="freeze-row"><span>{{ frozen ? 'Card frozen' : 'Freeze card' }}</span><button class="toggle-switch" :class="{on:frozen}" @click="frozen=!frozen"><span class="toggle-knob"></span></button></div>
                              <div class="phone-activity" style="margin-top:10px">Card controls</div>
                              <div class="phone-activity-row"><span>Spend limit</span><span style="font-family:'IBM Plex Mono',monospace">$500 / mo</span></div>
                            </template>
                            <template v-else-if="screenData==='history'">
                              <div class="phone-greeting">Transaction history</div><div class="phone-activity" style="margin-top:10px">Today</div>
                              <div class="phone-activity-row"><span>Transfer to Ade B.</span><span style="color:var(--grey)">-₦20,000</span></div>
                              <div class="phone-activity-row"><span>Salary · TechCorp</span><span class="amt">+₦450,000</span></div>
                              <div class="phone-activity" style="margin-top:8px">Yesterday</div><div class="phone-activity-row"><span>Spotify</span><span style="color:var(--grey)">-$5.99</span></div>
                            </template>
                            <template v-else-if="screenData==='fx'">
                              <div class="phone-greeting">Currency exchange</div><div class="phone-balance-card" style="background:linear-gradient(135deg,#6C5CE7,#4834B0)"><div class="phone-balance-label">1 USD</div><div class="phone-balance-amt">₦1,610.00</div></div>
                              <div class="phone-activity-row"><span>🇬🇧 GBP</span><span style="font-family:'IBM Plex Mono',monospace">₦2,040.00</span></div><div class="phone-activity-row"><span>🇪🇺 EUR</span><span style="font-family:'IBM Plex Mono',monospace">₦1,750.00</span></div>
                            </template>
                            <template v-else>
                              <div class="phone-greeting">Spending analytics</div><div class="bento-chart" style="margin-top:14px;height:80px"><div style="height:30%"></div><div style="height:55%"></div><div style="height:42%"></div><div style="height:72%"></div><div style="height:60%"></div><div style="height:88%"></div><div style="height:50%"></div></div>
                              <div class="phone-activity" style="margin-top:10px">This month</div><div class="phone-activity-row"><span>Total spend</span><span style="font-family:'IBM Plex Mono',monospace">₦312,400</span></div>
                            </template>
                          </div>
                        </Transition>
                      </div>
                    </div>
                    <div class="phone-home-indicator"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="phone-tab-buttons">
              <button v-for="(label,i) in phoneLabels" :key="label" class="phone-tab-btn" :class="{active:i===screenIdx}" @click="selectScreen(i)">{{label}}</button>
            </div>
          </div>
        </div>
      </section>

      <section class="backed" style="border-top:none">
        <div class="wrap"><div class="social-proof-strip">
          <div class="sp-item"><div class="sp-stars">★★★★★</div><div class="sp-label">Rated by thousands</div></div><div class="sp-divider"></div>
          <div class="sp-item"><div class="sp-num">40,000+</div><div class="sp-label">Nigerians trust 1App</div></div><div class="sp-divider"></div>
          <div class="sp-item"><div class="sp-num">₦20M+</div><div class="sp-label">Transferred</div></div><div class="sp-divider"></div>
          <div class="sp-item"><div class="sp-num">99.99%</div><div class="sp-label">Uptime</div></div>
        </div></div>
      </section>

      <section class="backed">
        <div class="wrap"><div class="backed-label">Backed by</div><div class="marquee"><div class="marquee-track">
          <span v-for="n in [...backedNames,...backedNames]" :key="n + Math.random()" class="marquee-item">{{n}}</span>
        </div></div></div>
      </section>

      <section class="pain-section">
        <div class="wrap">
          <span class="section-eyebrow">Why trust us</span>
          <div class="section-head"><h2>Why international payments feel broken.</h2><p>If you've sent money abroad from Nigeria before, this will sound familiar.</p></div>
          <div class="pain-grid">
            <div v-for="p in pains" :key="p.title" class="pain-card reveal"><span class="pain-icon">{{p.icon}}</span><h3>{{p.title}}</h3><p>{{p.body}}</p></div>
          </div>
          <div class="pain-arrow-row">That's exactly what we built 1App <span class="to">to fix ↓</span></div>
        </div>
      </section>

      <section class="product-section" id="features">
        <div class="wrap">
          <span class="section-eyebrow">How 1App solves it</span>
          <div class="section-head"><h2>Everything money-related, in one place.</h2><p>Six products, one login. Built so switching between currencies stops being the hard part of your day.</p></div>
          <div class="product-featured">
            <div class="tilt-wrap product-card-lg">
              <div><div class="product-icon">💸</div><h3>Send Money</h3><p>Move funds locally or across borders in seconds, at a rate you see and confirm before you send, not after.</p></div>
              <div class="mini-visa"><div class="chip"></div><div class="num">Lagos → London</div><div style="margin-top:8px;font-size:13px;font-weight:700">₦450,000 → $290.00</div></div>
            </div>
            <div class="product-rest">
              <div v-for="it in productFeatures" :key="it.title" class="tilt-wrap product-card">
                <div class="product-icon" :style="{background:it.bg,color:it.color}">{{it.icon}}</div><h3>{{it.title}}</h3><p>{{it.body}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <div class="wrap"><div class="demo-panel">
          <div class="demo-copy"><span class="section-eyebrow">Interactive demo</span><h2>See exactly what you'll pay, before you send.</h2><p>This is a live simulation. Try changing the amount below. It's exactly how the real transfer flow works inside 1App: no surprises between quote and confirmation.</p></div>
          <div class="demo-widget">
            <div class="demo-route"><div class="demo-country">🇳🇬 Nigeria</div><span class="demo-arrow-sep">→</span><div class="demo-country">🇬🇧 United Kingdom</div></div>
            <span class="demo-field-label">Amount</span><div class="demo-field"><input v-model="amount" inputmode="decimal" /></div>
            <div class="demo-meta-row"><span>You'll receive</span><b>£{{receiveGBP.toLocaleString('en-US',{maximumFractionDigits:2})}}</b></div>
            <div class="demo-meta-row"><span>Transfer time</span><b>~30 seconds</b></div><div class="demo-meta-row"><span>Fee</span><b>₦0</b></div>
            <button class="demo-transfer-btn" @click="handleTransfer">Transfer →</button>
            <Transition name="fade"><div v-if="sent" class="demo-success">✓ Transfer simulated successfully. That's the whole flow.</div></Transition>
          </div>
        </div></div>
      </section>

      <section class="how-section">
        <div class="wrap"><span class="section-eyebrow">How it works</span><div class="section-head"><h2>Three steps between you and your first transfer.</h2></div>
          <div class="how-grid">
            <div v-for="(s,i) in [
              {n:'01',title:'Create your account',body:'Sign up with your phone number and a valid ID, no branch visit required.'},
              {n:'02',title:'Verify in minutes',body:'Identity checks run automatically in the background while you explore the app.'},
              {n:'03',title:'Send, hold, or spend',body:'Fund your wallet and start moving money across currencies right away.'}
            ]" :key="s.n" class="how-step"><div class="how-num">{{s.n}}</div><h3>{{s.title}}</h3><p>{{s.body}}</p></div>
          </div>
        </div>
      </section>

      <section class="dev-section" id="developer">
        <div class="dev-inner">
          <span class="section-eyebrow">Made for developers, by developers</span><div class="section-head"><h2>A payments API that reads like documentation, not a puzzle.</h2></div>
          <div class="dev-panel">
            <div class="dev-code-window"><div class="dev-code-bar"><span></span><span></span><span></span></div><div class="dev-code-body">
              <span class="dtok-com">// Create a virtual account in one call</span><br>
              <span class="dtok-key">const</span> account = <span class="dtok-key">await</span> oneApp.<span class="dtok-fn">accounts</span>.<span class="dtok-fn">create</span>({<br>
              &nbsp;&nbsp;currency: <span class="dtok-str">"NGN"</span>,<br>
              &nbsp;&nbsp;customer_id: <span class="dtok-str">"cus_48Fk2"</span><br>
              });<br><br>
              <span class="dtok-com">// Send funds cross-currency</span><br>
              <span class="dtok-key">await</span> oneApp.<span class="dtok-fn">transfers</span>.<span class="dtok-fn">create</span>({<br>
              &nbsp;&nbsp;from: account.<span class="dtok-fn">id</span>,<br>
              &nbsp;&nbsp;to_currency: <span class="dtok-str">"GBP"</span>,<br>
              &nbsp;&nbsp;amount: <span class="dtok-fn">500000</span><br>});
            </div></div>
            <div class="dev-points">
              <div class="dev-point"><div class="dev-point-num">01</div><div><h4>Virtual accounts</h4><p>Issue naira or dollar accounts to customers programmatically, with account numbers you can reconcile against.</p></div></div>
              <div class="dev-point"><div class="dev-point-num">02</div><div><h4>Identity verification</h4><p>BVN, NIN, and document checks behind one endpoint, so onboarding doesn't need its own engineering team.</p></div></div>
              <div class="dev-point"><div class="dev-point-num">03</div><div><h4>Payouts and collections</h4><p>Move money in and out at the rate you saw when you called the endpoint, not the rate an hour later.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="bento-section">
        <div class="wrap"><span class="section-eyebrow">Why it's secure</span><div class="section-head"><h2>Built like a dashboard, not a brochure.</h2></div>
          <div class="bento-grid">
            <div class="bento-card b1"><div class="bento-icon-float">📊</div><div><h3>Payments &amp; Analytics</h3><p>Track every transfer, refund, and settlement with a real-time ledger view.</p><div class="bento-chart" style="margin-top:16px"><div style="height:32%"></div><div style="height:55%"></div><div style="height:40%"></div><div style="height:70%"></div><div style="height:58%"></div><div style="height:85%"></div><div style="height:68%"></div></div></div></div>
            <div class="bento-card b2"><div class="bento-icon-float">💳</div><div style="width:100%"><h3>Cards</h3><p>Hover to flip: freeze or issue a new virtual card instantly.</p><div class="flip-card-outer" style="margin-top:10px"><div class="flip-card-inner"><div class="flip-face flip-front"><div class="mini-visa" style="background:transparent;padding:0"><div class="chip"></div><div class="num">•••• •••• •••• 4801</div></div></div><div class="flip-face flip-back">Tap to freeze card</div></div></div></div></div>
            <div class="bento-card b3"><div class="bento-icon-float">⇄</div><div><h3>Transfers</h3><p>Cross-currency payouts that settle in under 4 seconds on average.</p><div class="bento-chart" style="margin-top:12px;height:40px"><div style="height:40%"></div><div style="height:70%"></div><div style="height:50%"></div><div style="height:90%"></div></div></div></div>
            <div class="bento-card b4"><div class="bento-icon-float">🔐</div><div><h3>Security</h3><p>Bank-level encryption and fraud monitoring on every transaction.</p></div></div>
          </div>
        </div>
      </section>

      <section class="why-section" id="company">
        <div class="why-inner"><span class="section-eyebrow">Why Nigerians choose 1App</span><div class="section-head"><h2>Built around what actually frustrates you.</h2></div>
          <div class="why-grid"><div v-for="r in reasons" :key="r" class="why-item"><div class="why-check">✓</div><p>{{r}}</p></div></div>
        </div>
      </section>

      <section class="feed-section">
        <div class="wrap"><span class="section-eyebrow" style="display:block;text-align:center">Always on</span><h2 style="text-align:center;font-size:30px;font-weight:800">Money moving, right now.</h2>
          <div class="feed-panel"><div class="feed-head"><span>Live transaction feed</span><span class="pulse-dot"></span></div><div class="feed-list">
            <TransitionGroup name="feed">
              <div v-for="r in feed" :key="r.time+r.label" class="feed-row"><div><span class="feed-time">{{r.time}}</span>{{r.label}}</div><div style="text-align:right"><div :class="r.pos?'feed-amt-pos':'feed-amt-neg'">{{r.amt}}</div><div class="feed-status">{{r.status}}</div></div></div>
            </TransitionGroup>
          </div></div>
        </div>
      </section>

      <section class="testi-section">
        <div class="wrap"><span class="section-eyebrow" style="display:block">What customers think</span><h2 style="font-size:32px;font-weight:800">What our clients say</h2>
          <div class="testi-grid"><div v-for="t in testimonials" :key="t.name" class="testi-card"><div class="testi-stars">★★★★★</div><p class="quote">"{{t.text}}"</p><div class="testi-person"><div class="testi-avatar" :style="{background:t.color}">{{t.name.split(' ').map(n=>n[0]).join('')}}</div><div><div class="testi-name">{{t.name}}</div><div class="testi-role">{{t.role}}</div></div></div></div></div>
        </div>
      </section>

      <section class="download-section" id="wallet">
        <div class="wrap"><div class="download-banner">
          <div class="glow-blob glow-blob-anim" style="width:300px;height:300px;background:rgba(255,255,255,.15);top:-100px;right:0"></div>
          <div style="position:relative;z-index:1"><span class="section-eyebrow" style="color:rgba(255,255,255,.85)">Get started</span><h2>Download the app.</h2><p>It only takes a few minutes to start enjoying all the benefits. Download 1App on Google Play or the App Store.</p>
            <div class="badge-row"><img src="/googleplay-badge.svg" alt="Get it on Google Play" class="badge-img"><img src="/appstore-badge.svg" alt="Download on the App Store" class="badge-img"></div>
          </div>
          <div style="display:flex;justify-content:center;position:relative;z-index:1"><div class="phone-shell" style="width:180px"><span class="phone-side-btn phone-power-btn"></span><span class="phone-side-btn phone-vol-up"></span><span class="phone-side-btn phone-vol-down"></span><div class="phone-inner"><div class="phone-notch"></div><div class="phone-screen"><div class="phone-balance-card"><div class="phone-balance-label">WALLET BALANCE</div><div class="phone-balance-amt">₦200,000.00</div></div></div><div class="phone-home-indicator"></div></div></div></div>
        </div></div>
      </section>
    </main>

    <footer id="contact">
      <div class="wrap"><div class="foot-top">
        <div class="foot-brand"><img src="/logo-full.png" alt="1App" class="logo-full"><p>Global payments infrastructure for Nigerians. Send, receive, and manage money across currencies from one account.</p>
          <div class="foot-social"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Twitter">𝕏</a><a href="#" aria-label="Instagram">ig</a></div>
          <div class="badge-row" style="margin-top:14px"><img src="/googleplay-badge.svg" alt="Get it on Google Play" class="badge-img" style="height:38px"><img src="/appstore-badge.svg" alt="Download on the App Store" class="badge-img" style="height:38px"></div>
        </div>
        <div class="foot-col"><h4>Product</h4><a href="#">Accounts</a><a href="#">Virtual cards</a><a href="#">Bill payments</a><a href="#">Pricing</a></div>
        <div class="foot-col"><h4>Developer</h4><a href="#">API docs</a><a href="#">Status</a><a href="#">Sandbox</a></div>
        <div class="foot-col"><h4>Company</h4><a href="#">About</a><a href="#">Career</a><a href="#">Sitemap</a></div>
        <div class="foot-col"><h4>Stay updated</h4><p style="font-size:13px;color:var(--grey);margin:0 0 10px">Product news, once a month.</p><form class="newsletter-row" @submit.prevent="joinNewsletter"><input v-model="email" type="email" placeholder="you@email.com" required><button class="btn btn-pink" style="padding:10px 16px">{{joined?'Joined':'Join'}}</button></form></div>
      </div>
      <div class="foot-legal">1App enables individuals and businesses to send, receive, and manage money globally through multi-currency accounts, virtual dollar cards, and seamless payments. 1App acts solely as a financial technology company facilitating its offerings in partnership with licensed transmitters in their respective jurisdictions.</div>
      <div class="foot-bottom"><span>© 2026 1App Technologies, Inc.</span><div class="compliance-badges"><span class="badge-chip">PCI DSS Compliant</span><span class="badge-chip">NDPR Audit 2026</span></div></div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Vue-specific safety fixes + small behavior parity tweaks */
.phone-screen-fade-enter-active,
.phone-screen-fade-leave-active { transition: opacity .35s ease, transform .35s ease; }
.phone-screen-fade-enter-from { opacity:0; transform:translateX(16px); }
.phone-screen-fade-leave-to { opacity:0; transform:translateX(-16px); }
.fade-enter-active,.fade-leave-active{transition:opacity .25s ease,transform .25s ease}
.fade-enter-from,.fade-leave-to{opacity:0;transform:translateY(8px)}
.site { min-height:100vh; }
</style>
