<template>
  <div class="home">
    <main>
      <img :src="`/assets/${$route.params.day}.jpg`">
    </main>
  </div>
</template>

<script>
const min = 9
const max = 28

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

  beforeRouteEnter: navigationGuard,
  beforeRouteUpdate: navigationGuard
}
</script>

<style lang="scss" scoped>
img {
  max-width: 80vw;
  max-height: 80vh;
}
</style>