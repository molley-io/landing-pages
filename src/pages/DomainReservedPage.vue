<template>
  <main class="reserved">
    <div class="reserved__card">
      <p class="reserved__domain">molley.io</p>
      <h1 class="reserved__title">This domain is reserved.</h1>
      <p class="reserved__text">
        This domain name is registered and being held for future use.
        There is no content available here at this time.
      </p>
    </div>
    <p class="reserved__footer">&copy; {{ currentYear }} Molley Ltd. All rights reserved.</p>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

// Follow the visitor's system colour scheme (the site palette keys off data-theme).
onMounted(() => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const apply = () => document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light')
  apply()
  mq.addEventListener('change', apply)
})
</script>

<style lang="scss" scoped>
.reserved {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  background-color: var(--el-bg-color-page);
  color: var(--el-text-color-primary);
  text-align: center;

  &__card {
    max-width: 480px;
    width: 100%;
    background: var(--el-bg-color);
    border: 1px solid var(--el-border-color-light);
    border-radius: 12px;
    padding: 48px 40px;
    box-shadow: var(--el-box-shadow-base);
  }

  &__domain {
    margin: 0 0 20px;
    font-family: var(--font-family-secondary);
    font-size: var(--el-font-size-small);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--el-color-primary);
  }

  &__title {
    margin: 0 0 14px;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  &__text {
    margin: 0;
    font-size: var(--el-font-size-medium);
    line-height: 1.6;
    color: var(--el-text-color-regular);
  }

  &__footer {
    margin: 28px 0 0;
    font-size: var(--el-font-size-small);
    color: var(--el-text-color-secondary);
  }
}

@media (max-width: 480px) {
  .reserved__card {
    padding: 36px 24px;
  }

  .reserved__title {
    font-size: 1.5rem;
  }
}
</style>
