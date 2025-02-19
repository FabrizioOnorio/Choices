import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useAuth0 } from '@auth0/auth0-vue'
import CreateSurvey from '@/views/CreateSurvey.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const { isAuthenticated, isLoading } = useAuth0()

        const waitForAuth = () => {
          if (isLoading.value) {
            setTimeout(waitForAuth, 100)
          } else {
            if (isAuthenticated.value) {
              next('/dashboard')
            } else {
              next()
            }
          }
        }

        waitForAuth()
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: (_to, _from, next) => {
        const { isAuthenticated, isLoading } = useAuth0()

        const waitForAuth = () => {
          if (isLoading.value) {
            setTimeout(waitForAuth, 100)
          } else {
            if (isAuthenticated.value) {
              next()
            } else {
              next('/')
            }
          }
        }

        waitForAuth()
      },
    },
    {
      path: '/create-survey',
      name: 'create-survey',
      component: CreateSurvey,
      beforeEnter: (_to, _from, next) => {
        const { isAuthenticated, isLoading } = useAuth0()

        const waitForAuth = () => {
          if (isLoading.value) {
            setTimeout(waitForAuth, 100)
          } else {
            if (isAuthenticated.value) {
              next()
            } else {
              next('/')
            }
          }
        }

        waitForAuth()
      },
    },
  ],
})

export default router
