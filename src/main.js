import { createApp } from 'vue'
import './assets/tailwind.css'
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import './registerServiceWorker'
import axios from 'axios'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  }
]

const store = createStore({
  state() {
    return {
      userToken: ""
    }
  },
  mutations: {
    setToken(state, token) {
      state.userToken = token;
    },
    logout(state) {
      state.userToken = null;
    }
  },
  actions: {
    async login(context, { email, password }) {
      try {
        let response = await axios.post('http://192.168.1.67:3333/api/user/login', { email: email, password: password });
        let token = response.data;
        context.commit('setToken', token);
        router.replace('/')

        return true;
      } catch (e) {
        return e.response.data;
      }
    },
    async register(context, { email, password, name }) {
      try {
        await axios.post('http://192.168.1.67:3333/api/user/register', { email: email, password: password, name: name });
        router.replace('/login')
        return true;
      } catch (e) {
        return e.response.data;
      }
    },
    logout(context) {
      context.commit('logout');
      this.$router.replace('/login')
    },
  },
  getters: {
    auth(state) {
      return state.userToken
    }
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.auth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

const app = createApp(App);

app.use(router);
app.use(store);


app.mount('#app');
