import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes'
import './styles/variables.scss'
import './styles/global.scss'

export const createApp = ViteSSG(App, { routes })
