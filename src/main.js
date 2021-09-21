import Vue from 'vue'
import App from './App.vue'
import router from './router'
import marked from 'marked'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

  data: {
    content: ''
  },

  computed: {
    rawPosts() {
      return this.content.split('---')
    },
    posts() {
      return this.rawPosts.map(md => {
        let id = md.match(/(?!<!-- *id: *)\d+(?= *-->)/)[0]
        return { id, html: marked(md) }
      })
    }
  },

  created() {
    fetch('content.md')
      .then(response => response.text())
      .then(text => this.content = text)
  }
}).$mount('#app')
