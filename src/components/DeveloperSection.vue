<script setup>
import { ref, computed } from 'vue'

const endpoints = [
  {
    number: '01',
    method: 'POST',
    name: 'Create account',
    path: '/v1/accounts',
    description: 'Create and manage financial accounts for your customers.',
    code: `const account = await oneapp.accounts.create({
  currency: 'NGN',
  customer_id: 'cus_48fk2',
})`,
  },
  {
    number: '02',
    method: 'POST',
    name: 'Create transfer',
    path: '/v1/transfers',
    description: 'Move funds between supported currencies and destinations.',
    code: `const transfer = await oneapp.transfers.create({
  from: 'acct_8f92',
  to_currency: 'GBP',
  amount: 500000,
})`,
  },
  {
    number: '03',
    method: 'GET',
    name: 'Get balance',
    path: '/v1/balance',
    description: 'Retrieve balances and account information programmatically.',
    code: `const balance = await oneapp.balance.retrieve({
  currency: 'NGN',
})`,
  },
]

const activeEndpoint = ref(0)

const endpoint = computed(
  () => endpoints[activeEndpoint.value]
)

function selectEndpoint(index) {
  activeEndpoint.value = index
}
</script>

<template>
  <section id="developer" class="section developer-premium">

    <div class="wrap">

      <!-- INTRO -->
      <div class="developer-intro" v-reveal>

        <div>
          <p class="eyebrow">For businesses & developers</p>

          <h2>
            Build money
            <span>into your product.</span>
          </h2>
        </div>

        <p>
          Give your product access to financial infrastructure
          through a developer experience designed to stay simple
          as you scale.
        </p>

      </div>


      <!-- API EXPERIENCE -->
      <div class="developer-stage" v-reveal>

        <div class="developer-grid"></div>


        <!-- LEFT -->
        <div class="developer-copy">

          <div class="developer-kicker">
            <span class="api-dot"></span>
            1APP API
          </div>

          <div class="api-number">
            {{ endpoint.number }}
          </div>

          <h3>
            {{ endpoint.name }}
          </h3>

          <p>
            {{ endpoint.description }}
          </p>

          <div class="endpoint-path">

            <span class="method">
              {{ endpoint.method }}
            </span>

            <span>
              {{ endpoint.path }}
            </span>

          </div>

          <div class="developer-meta">

            <span>
              REST API
            </span>

            <span>
              JSON
            </span>

            <span>
              HTTPS
            </span>

          </div>

        </div>


        <!-- RIGHT -->
        <div class="code-area">

          <div class="code-header">

            <div class="window-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span class="code-title">
              example.js
            </span>

            <span class="code-status">
              API
            </span>

          </div>


          <pre class="code-panel"><code><span class="code-comment">// {{ endpoint.name.toLowerCase() }}</span>
<span class="code-keyword">const</span> response =
  <span class="code-keyword">await</span>
  oneapp.<span class="code-function">{{ endpoint.name === 'Get balance' ? 'balance.retrieve' : endpoint.name === 'Create transfer' ? 'transfers.create' : 'accounts.create' }}</span>({

<span class="code-content">{{ endpoint.code.replace(/^.*?\{/, '').replace(/\}$/, '').trim() }}</span>

})</code></pre>


          <div class="code-footer">

            <span>
              <i></i>
              Request ready
            </span>

            <span>
              200 OK
            </span>

          </div>

        </div>

      </div>


      <!-- ENDPOINT NAVIGATION -->
      <div class="endpoint-list" v-reveal>

        <button
          v-for="(item, index) in endpoints"
          :key="item.number"
          class="endpoint-item"
          :class="{ active: index === activeEndpoint }"
          @click="selectEndpoint(index)"
        >

          <span class="endpoint-number">
            {{ item.number }}
          </span>

          <span class="endpoint-name">
            {{ item.name }}
          </span>

          <span class="endpoint-method">
            {{ item.method }}
          </span>

          <span class="endpoint-arrow">
            ↗
          </span>

        </button>

      </div>


      <!-- BOTTOM -->
      <div class="developer-bottom" v-reveal>

        <span>BUILD WITH 1APP</span>

        <p>
          Financial infrastructure,
          <strong>without the unnecessary complexity.</strong>
        </p>

        <span>API</span>

      </div>

    </div>

  </section>
</template>


<style scoped>

.developer-premium {
  position: relative;

  padding: clamp(5rem, 10vw, 9rem) 0;

  background: var(--paper-deep);

  color: var(--paper);

  overflow: hidden;
}


/* INTRO */

.developer-intro {
  display: grid;

  grid-template-columns: minmax(280px, 1fr) minmax(280px, 0.7fr);

  gap: clamp(3rem, 8vw, 9rem);

  align-items: end;

  margin-bottom: 4rem;
}

.developer-intro .eyebrow {
  color: var(--gold);
}

.developer-intro .eyebrow::before {
  background: var(--gold);
}

.developer-intro h2 {
  margin: 0;

  max-width: 650px;

  font-family: var(--font-display);

  font-size: clamp(3rem, 5.5vw, 6rem);

  line-height: 0.92;

  letter-spacing: -0.06em;

  font-weight: 500;

  color: var(--paper);
}

.developer-intro h2 span {
  display: block;

  color: #f2a7cd;

  font-style: italic;
}

.developer-intro > p {
  max-width: 430px;

  margin: 0;

  color: rgba(255,251,252,0.62);

  font-size: 0.96rem;

  line-height: 1.85;
}


/* API STAGE */

.developer-stage {
  position: relative;

  display: grid;

  grid-template-columns: 0.85fr 1.15fr;

  min-height: 500px;

  overflow: hidden;

  border: 1px solid rgba(255,255,255,0.1);

  border-radius: var(--radius-lg);

  background: #15111c;

  box-shadow:
    0 35px 90px rgba(0,0,0,0.2);
}


/* GRID */

.developer-grid {
  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.07;

  background-image:
    linear-gradient(
      rgba(255,255,255,0.5) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.5) 1px,
      transparent 1px
    );

  background-size: 70px 70px;
}


/* COPY */

.developer-copy {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: clamp(2rem, 5vw, 4rem);

  border-right: 1px solid rgba(255,255,255,0.1);
}

.developer-kicker {
  display: flex;

  align-items: center;

  gap: 0.5rem;

  margin-bottom: 2rem;

  font-family: var(--font-mono);

  font-size: 0.62rem;

  letter-spacing: 0.14em;

  color: rgba(255,255,255,0.42);
}

.api-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--gold);
}

.api-number {
  position: absolute;

  top: 2rem;
  right: 2rem;

  font-family: var(--font-mono);

  font-size: 0.65rem;

  color: rgba(255,255,255,0.25);
}

.developer-copy h3 {
  margin: 0;

  font-family: var(--font-display);

  font-size: clamp(2.3rem, 4vw, 4rem);

  line-height: 0.98;

  letter-spacing: -0.045em;

  font-weight: 500;

  color: white;
}

.developer-copy > p {
  max-width: 390px;

  margin: 1.3rem 0 0;

  color: rgba(255,255,255,0.58);

  font-size: 0.9rem;

  line-height: 1.8;
}


/* PATH */

.endpoint-path {
  display: flex;

  align-items: center;

  gap: 0.8rem;

  width: fit-content;

  margin-top: 2rem;

  padding: 0.65rem 0.8rem;

  border: 1px solid rgba(255,255,255,0.1);

  border-radius: var(--radius-sm);

  background: rgba(255,255,255,0.04);

  font-family: var(--font-mono);

  font-size: 0.68rem;
}

.method {
  color: #f2a7cd;

  font-weight: 700;
}

.endpoint-path > span:last-child {
  color: rgba(255,255,255,0.58);
}


/* META */

.developer-meta {
  display: flex;

  gap: 1.2rem;

  margin-top: 2rem;

  font-family: var(--font-mono);

  font-size: 0.57rem;

  letter-spacing: 0.1em;

  color: rgba(255,255,255,0.28);
}


/* CODE */

.code-area {
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: clamp(1.5rem, 4vw, 3rem);
}

.code-header {
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 0.8rem 1rem;

  border: 1px solid rgba(255,255,255,0.1);

  border-bottom: none;

  border-radius: var(--radius-sm) var(--radius-sm) 0 0;

  background: rgba(255,255,255,0.035);
}

.window-controls {
  display: flex;

  gap: 5px;
}

.window-controls span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: rgba(255,255,255,0.3);
}

.code-title {
  flex: 1;

  font-family: var(--font-mono);

  font-size: 0.62rem;

  color: rgba(255,255,255,0.4);
}

.code-status {
  font-family: var(--font-mono);

  font-size: 0.55rem;

  color: #8fd0c1;
}

.code-panel {
  margin: 0;

  min-height: 250px;

  padding: 1.5rem;

  overflow-x: auto;

  border: 1px solid rgba(255,255,255,0.1);

  background: rgba(0,0,0,0.18);

  font-family: var(--font-mono);

  font-size: 0.78rem;

  line-height: 1.8;

  color: rgba(255,255,255,0.72);
}

.code-comment {
  color: rgba(255,255,255,0.25);
}

.code-keyword {
  color: #f2a7cd;
}

.code-function {
  color: #9fd1ff;
}

.code-content {
  color: #e0c27b;
}

.code-footer {
  display: flex;

  justify-content: space-between;

  padding: 0.7rem 1rem;

  border: 1px solid rgba(255,255,255,0.1);

  border-top: none;

  border-radius: 0 0 var(--radius-sm) var(--radius-sm);

  background: rgba(255,255,255,0.025);

  font-family: var(--font-mono);

  font-size: 0.57rem;

  color: rgba(255,255,255,0.3);
}

.code-footer span:first-child {
  display: flex;

  align-items: center;

  gap: 0.45rem;
}

.code-footer i {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #8fd0c1;
}


/* ENDPOINT LIST */

.endpoint-list {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  margin-top: 1.5rem;

  border-top: 1px solid rgba(255,255,255,0.1);

  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.endpoint-item {
  display: grid;

  grid-template-columns: 35px 1fr auto 25px;

  align-items: center;

  gap: 0.6rem;

  min-width: 0;

  padding: 1.2rem 1rem;

  border: none;

  border-right: 1px solid rgba(255,255,255,0.1);

  background: transparent;

  color: rgba(255,255,255,0.45);

  text-align: left;

  cursor: pointer;

  transition:
    color 0.3s ease,
    background 0.3s ease;
}

.endpoint-item:last-child {
  border-right: none;
}

.endpoint-item:hover,
.endpoint-item.active {
  background: rgba(255,255,255,0.035);

  color: white;
}

.endpoint-number {
  font-family: var(--font-mono);

  font-size: 0.58rem;

  color: rgba(255,255,255,0.22);
}

.endpoint-item.active .endpoint-number {
  color: #f2a7cd;
}

.endpoint-name {
  font-size: 0.76rem;

  font-weight: 500;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
}

.endpoint-method {
  font-family: var(--font-mono);

  font-size: 0.5rem;

  color: rgba(255,255,255,0.25);
}

.endpoint-arrow {
  color: #f2a7cd;

  opacity: 0;

  transition: opacity 0.25s ease;
}

.endpoint-item:hover .endpoint-arrow,
.endpoint-item.active .endpoint-arrow {
  opacity: 1;
}


/* BOTTOM */

.developer-bottom {
  display: flex;

  justify-content: space-between;

  padding-top: 1rem;

  font-family: var(--font-mono);

  font-size: 0.58rem;

  letter-spacing: 0.12em;

  color: rgba(255,255,255,0.28);
}

.developer-bottom p {
  margin: 0;

  font-family: var(--font-body);

  font-size: 0.78rem;

  letter-spacing: 0;

  color: rgba(255,255,255,0.45);
}

.developer-bottom strong {
  color: rgba(255,255,255,0.75);
}


/* RESPONSIVE */

@media (max-width: 900px) {

  .developer-intro {
    grid-template-columns: 1fr;

    gap: 1.5rem;
  }

  .developer-stage {
    grid-template-columns: 1fr;
  }

  .developer-copy {
    border-right: none;

    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .endpoint-list {
    grid-template-columns: 1fr;
  }

  .endpoint-item {
    border-right: none;

    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .endpoint-item:last-child {
    border-bottom: none;
  }

}

@media (max-width: 640px) {

  .developer-premium {
    padding: 4.5rem 0;
  }

  .developer-intro h2 {
    font-size: 3rem;
  }

  .developer-copy {
    padding: 2rem;
  }

  .code-area {
    padding: 1.2rem;
  }

  .code-panel {
    font-size: 0.68rem;
  }

  .developer-bottom p {
    display: none;
  }

}

</style>