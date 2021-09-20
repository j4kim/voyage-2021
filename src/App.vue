<template>
  <div id="app">
    <header>
      Le petit voyage de Mimi & Jojo
    </header>
    <div id="nav">
      <router-link :to="`/${+$route.params.day - 1}`">←</router-link>
      {{ $route.params.day }} août 2021
      <router-link :to="`/${+$route.params.day + 1}`">→</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-color: gainsboro;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  margin: 20px 0 10px;
  font-size: .8em;
}

#nav {
  max-width: 80vw;
  width: 300px;
  margin: 0 auto 20px;
  display: flex;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
