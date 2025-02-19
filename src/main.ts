import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'
import './index.css'
import 'vuetify/styles';
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify();

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.use(
  createAuth0({
    // to hide
    domain: 'dev-qfp23kv6.us.auth0.com',
    // to hide
    clientId: 'Pcl1gwhhsCAHFXabO59OzZQSXaUO9tl1',
    authorizationParams: {
      redirect_uri: window.location.origin + '/dashboard',
    },
  }),
)

app.mount('#app')
