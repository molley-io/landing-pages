<template>
  <div class="layout-public">
    <!-- Header -->
    <header class="public-header">
      <div class="header-content">
        <a href="/" class="header-left">
          <img src="../assets/logo-icon.png" height="32" width="32" alt="Molley" />
          <img src="../assets/logo-text.png" alt="Molley" class="logo-text" />
        </a>
        <div class="header-right">
          <button class="theme-toggle" @click="toggleTheme" :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <Sun v-if="theme === 'dark'" :size="18" />
            <Moon v-else :size="18" />
          </button>
          <a :href="`${appUrl}/auth/login`" class="btn btn--primary">
            Sign In
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="public-main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="public-footer">
      <div class="footer-content">
        <div class="footer-top">
          <div class="footer-left">
            <span class="copyright">&copy; {{ currentYear }} Molley. All rights reserved.</span>
          </div>
          <div class="footer-right">
            <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
            <span class="divider--vertical"></span>
            <router-link to="/terms-and-use" class="footer-link">Terms of Use</router-link>
          </div>
        </div>
        <div class="footer-company">
          <span class="company-info">
            Molley Ltd &middot; Company No.
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/17143035"
              target="_blank"
              rel="noopener"
              class="company-link"
            >17143035</a>
            &middot; Registered in England &amp; Wales
          </span>
          <span class="payment-info">
            <CreditCard :size="14" />
            Payments securely processed by
            <a href="https://stripe.com" target="_blank" rel="noopener" class="company-link">Stripe</a>
            &middot; Visa, Mastercard, Amex accepted
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Sun, Moon, CreditCard } from 'lucide-vue-next'

const appUrl = import.meta.env.VITE_APP_URL || ''

const theme = ref<'light' | 'dark'>('light')
const currentYear = computed(() => new Date().getFullYear())

const applyTheme = (t: 'light' | 'dark') => {
  theme.value = t
  document.documentElement.setAttribute('data-theme', t)
}

const toggleTheme = () => {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('molley-theme', next)
  }
}

onMounted(() => {
  const stored = localStorage.getItem('molley-theme')
  if (stored === 'dark' || stored === 'light') {
    applyTheme(stored)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark')
  } else {
    applyTheme('light')
  }
})
</script>

<style lang="scss" scoped>
.layout-public {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .public-header {
    background-color: #121212;
    border-bottom: 1px solid var(--el-border-color);
    box-shadow: var(--el-box-shadow-lighter);
    height: 60px;

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      height: 100%;

      .header-left {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 8px;

        .logo-text {
          height: 30px;
          width: auto;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 16px;
      }
    }
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
    background: transparent;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    transition: all var(--el-transition-duration-fast);

    &:hover {
      color: var(--el-color-primary);
      border-color: var(--el-color-primary);
    }
  }

  .public-main {
    flex: 1;
    background-color: var(--el-bg-color);
  }

  .public-footer {
    background-color: var(--el-bg-color-page);
    border-top: 1px solid var(--el-border-color);
    padding: 20px 0;

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .footer-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .copyright {
        color: var(--el-text-color-secondary);
        font-size: var(--el-font-size-base);
      }

      .footer-right {
        display: flex;
        align-items: center;
        gap: 0;

        .footer-link {
          font-size: var(--el-font-size-base);
          text-decoration: none;
          color: var(--el-text-color-secondary);

          &:hover {
            color: var(--el-color-primary);
          }
        }
      }

      .footer-company {
        text-align: center;
        border-top: 1px solid var(--el-border-color-lighter);
        padding-top: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;

        .company-info {
          color: var(--el-text-color-secondary);
          font-size: var(--el-font-size-small);
        }

        .payment-info {
          color: var(--el-text-color-secondary);
          font-size: var(--el-font-size-small);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .company-link {
          font-size: var(--el-font-size-small);
          color: var(--el-color-primary);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .layout-public {
    .public-header .header-content {
      padding: 0 15px;
    }

    .public-footer .footer-content {
      padding: 0 15px;
      text-align: center;

      .footer-top {
        flex-direction: column;
        gap: 15px;
      }
    }
  }
}

@media (max-width: 480px) {
  .layout-public {
    .public-footer .footer-content .footer-right {
      flex-direction: column;
      gap: 10px;

      .divider--vertical {
        display: none;
      }
    }
  }
}
</style>
