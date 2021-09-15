import Vue from 'vue'
import App from './App.vue'

import {Rate, Carousel, Image} from 'buefy'
import 'buefy/dist/buefy.css'

const pjson = require('../package.json');

Vue.use(Rate)
Vue.use(Carousel)
Vue.use(Image)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount(`#${pjson.name}`)
