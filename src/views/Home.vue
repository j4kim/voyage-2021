<template>
  <div class="home">
    <main>
      <a :href="url" target="_blank" rel="noopener noreferrer">
        <img :src="url" @load="imageLoaded" v-show="ready">
      </a>
      <small v-if="!ready">Chargement</small>
    </main>
  </div>
</template>

<script>
const min = 9
const max = 29

function navigationGuard (to, from, next) {
  let day = to.params.day
  if (isNaN(day) || day > max) {
    next(`/${min}`)
  } else if (day < min) {
    next(`/${max}`)
  } else {
    next()
  }
}

export default {
  name: 'Home',

  data: () => ({
    ready: false
  }),

  beforeRouteEnter: navigationGuard,
  beforeRouteUpdate: navigationGuard,

  computed: {
    url () {
      let day = this.$route.params.day
      return `${process.env.BASE_URL}assets/${day}.jpg`
    }
  },

  watch: {
    "url" () {
      this.ready = false
    }
  },
  
  methods: {
    imageLoaded () {
      this.ready = true
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 80vw;
  max-height: 80vh;
}
</style>