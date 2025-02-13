import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'
import './index.css'

const app = createApp(App)

app.use(router)

app.use(
  createAuth0({
    // to hide
    domain: 'dev-qfp23kv6.us.auth0.com',
    // to hide
    clientId: 'Pcl1gwhhsCAHFXabO59OzZQSXaUO9tl1',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  }),
)

app.mount('#app')
