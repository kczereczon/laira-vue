import { createApp, h } from 'vue'
import './assets/tailwind.css'
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import './registerServiceWorker'

const NotFoundComponent = { template: '<p>Page not found</p>' }
const AboutComponent = { template: '<p>About page</p>' }

const routes = {
  '/': HomePage,
  '/about': AboutComponent,
  '/login': LoginPage
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')
