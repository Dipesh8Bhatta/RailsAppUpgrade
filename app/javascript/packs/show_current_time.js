import TurbolinksAdaptor from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm';
import Stime from "../hello_vue/show_current_time.vue";

Vue.use(TurbolinksAdaptor)

document.addEventListener('turbolinks:load', () => {
  const el = document.getElementById("show-time");
  const stime = new Vue({
    el,
    data: () => {
      return {
        terrible_message: 'Are you still looking for vue-turbolink changes?'
      }
    },
    components: { Stime }
  });
})

Turbolinks.dispatch('turbolinks:load');
