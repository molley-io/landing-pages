/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_URL: string
  readonly VITE_MATOMO_ENABLED: string
  readonly VITE_MATOMO_HOST: string
  readonly VITE_MATOMO_SITE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue-matomo' {
  import { Plugin } from 'vue'
  import { Router } from 'vue-router'

  interface MatomoOptions {
    host: string
    siteId: number
    router?: Router
    enableLinkTracking?: boolean
    trackInitialView?: boolean
    debug?: boolean
    requireConsent?: boolean
    requireCookieConsent?: boolean
    enableHeartBeatTimer?: boolean
    heartBeatTimerInterval?: number
    disableCookies?: boolean
    cookieDomain?: string
    domains?: string[]
    preInitActions?: Array<[string, ...any[]]>
  }

  const VueMatomo: Plugin
  export default VueMatomo
}
