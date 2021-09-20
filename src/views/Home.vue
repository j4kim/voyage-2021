<template>
  <div class="home">
    <header>
      {{ $route.params.day }} août 2021
    </header>
    <main>
      <img :src="`/assets/${$route.params.day}.jpg`">
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
img {
  max-width: 80vw;
  max-height: 80vh;
}
</style>