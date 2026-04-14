import type { RouteRecordRaw } from 'vue-router'
import SiteLayout from './components/SiteLayout.vue'
import HomePage from './pages/HomePage.vue'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.vue'
import TermsOfUsePage from './pages/TermsOfUsePage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: SiteLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: 'privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicyPage,
      },
      {
        path: 'terms-and-use',
        name: 'terms-of-use',
        component: TermsOfUsePage,
      },
    ],
  },
]
