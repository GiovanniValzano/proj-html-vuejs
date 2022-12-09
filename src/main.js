import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLeaf, faUserSecret, faWheatAwn, faGlassWater, faDrumstickBite,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';

library.add(faUserSecret);
library.add(faLeaf);
library.add(faWheatAwn);
library.add(faGlassWater);
library.add(faDrumstickBite);
library.add(faApple);
library.add(faGooglePlay);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
