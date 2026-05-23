import { ViteSSG } from 'vite-ssg'
import VueMatomo from 'vue-matomo'
import App from './App.vue'
import { routes } from './routes'
import './styles/variables.scss'
import './styles/global.scss'

export const createApp = ViteSSG(App, { routes }, ({ app, router, isClient }) => {
  if (isClient && import.meta.env.VITE_MATOMO_ENABLED === 'true') {
    app.use(VueMatomo, {
      host: import.meta.env.VITE_MATOMO_HOST,
      siteId: parseInt(import.meta.env.VITE_MATOMO_SITE_ID) || 1,
      router: router,
      enableLinkTracking: true,
      trackInitialView: true,
    })
  }
})
