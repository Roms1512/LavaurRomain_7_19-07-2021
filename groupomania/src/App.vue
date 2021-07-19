<template>
  <div id="nav">
    <div class="logo">
      <img alt="Vue logo" src="./assets/Logos/logo-2.png">
    </div>
    <router-link to="/" class='home'><i class="fas fa-home"></i></router-link> |
    <router-link to="/about"><i class="fas fa-info-circle"></i></router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  align-items: center;
  height: 10vh;
  .logo {
    width: 10vw;
    height: 10vh;
    img {
      width: 5vw;
    }
  }
  .home {
    margin-right: 30px;
    font-size: x-large;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
