/*
 * Nintendo Switch Illustration
 *
 * TODO: Make it possible to change the lighting and controller colors using slide rules.
 */

import Vue from 'vue';
import SwitchIllustration from './components/Switch.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faExternalLink);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#switch-illustration',
  components: { SwitchIllustration },
  data: {},
});
