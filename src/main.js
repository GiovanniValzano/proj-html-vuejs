import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLeaf, faUserSecret, faWheatAwn, faGlassWater, faDrumstickBite, faRss, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple, faGooglePlay, faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';

library.add(faUserSecret);
library.add(faLeaf);
library.add(faWheatAwn);
library.add(faGlassWater);
library.add(faDrumstickBite);
library.add(faApple);
library.add(faGooglePlay);
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);
library.add(faYoutube, faLinkedin, faRss, faEnvelope);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
