<template>
  <Transition name="slide-up">
    <div v-if="visible" class="cookie-banner">
      <div class="cookie-banner__content">
        <p class="cookie-banner__text">
          We use analytics cookies to understand how you use our site and improve your experience.
          <router-link to="/privacy-policy">Privacy Policy</router-link>
        </p>
        <div class="cookie-banner__actions">
          <button class="btn btn--default cookie-btn" @click="decline">Decline</button>
          <button class="btn btn--primary cookie-btn" @click="accept">Accept</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const CONSENT_KEY = 'molley-cookie-consent'
const visible = ref(false)

onMounted(() => {
  const stored = localStorage.getItem(CONSENT_KEY)
  if (stored === 'accepted') {
    grantConsent()
  } else if (!stored) {
    visible.value = true
  }
})

const grantConsent = () => {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push(['setConsentGiven'])
  }
}

const accept = () => {
  localStorage.setItem(CONSENT_KEY, 'accepted')
  grantConsent()
  visible.value = false
}

const decline = () => {
  localStorage.setItem(CONSENT_KEY, 'declined')
  visible.value = false
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--el-bg-color);
  border-top: 1px solid var(--el-border-color);
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.1);
  z-index: 9000;
  padding: 16px 20px;
}

.cookie-banner__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.cookie-banner__text {
  margin: 0;
  font-size: var(--el-font-size-base);
  color: var(--el-text-color-regular);
  line-height: 1.5;
}

.cookie-banner__text a {
  color: var(--el-color-primary);
  text-decoration: underline;
}

.cookie-banner__actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.cookie-btn {
  padding: 8px 20px;
  font-size: var(--el-font-size-small);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all var(--el-transition-duration) ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (max-width: 600px) {
  .cookie-banner__content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}
</style>
