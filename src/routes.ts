import type { RouteRecordRaw } from 'vue-router'
import DomainReservedPage from './pages/DomainReservedPage.vue'

// Temporary placeholder: the full site (SiteLayout, HomePage, PrivacyPolicyPage,
// TermsOfUsePage) is kept in src/ but unrouted. Restore the previous routes here
// and in vite.config.ts `includedRoutes` to bring it back.
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'domain-reserved',
    component: DomainReservedPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
