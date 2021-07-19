<template>
  <div id="nav">
    <div class="logo">
      <router-link to="/" class='navigation'><img alt="Logo Groupomania" id="logo" src="./assets/Logos/logo-3.png"></router-link>
      
    </div>
    <div class="search-bar">
      <input type="text" placeholder="&#xF002; Rechercher" id="search" />
    </div>
    <div class="nav-bar">
      <router-link to="/" class='navigation'><i class="fas fa-home"></i></router-link>
      <router-link to="/publication" class='navigation'><i class="far fa-plus-square"></i></router-link>
      <router-link to="/message" class='navigation'><i class="fas fa-comment-dots"></i></router-link>
      <router-link to="/like" class='navigation'><i class="fas fa-heart"></i></router-link>
      <router-link to="/user" class="navigation"><i class="fas fa-user-circle"></i></router-link>
      <!-- <router-link to="/about" class="navigation"><i class="fas fa-info-circle"></i></router-link> -->
    </div>
  </div>
  <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222a31;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  border-bottom: 1px solid black;
  .logo {
    width: 30%;
    img {
      width: 8vw;
    }
  }
  .search-bar {
    position: relative;
    width: 40%;
    input {
      height: 3vh;
      width: 12vw;
      text-align: center;
      border: 1px solid rgb(197, 197, 197);
      border-radius: 5px;
      background: rgb(248, 248, 248);
    }
    .search {
      position: absolute ;
      left: 0;
    }
  }
  .nav-bar {
    width: 30%;
    .navigation {
      margin-right: 30px;
      font-size: x-large;
    }
  }

  a {
    font-weight: bold;
    color: #808080;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
