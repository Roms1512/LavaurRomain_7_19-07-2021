<template>
  <div id="nav">
    <div class="logo">
      <router-link to="/" class='navigation'><img alt="Logo Groupomania" id="logo" src="./assets/Logos/logo-3.png"></router-link>
      
    </div>
    <div class="search-bar">
      <input type="text" aria-label="search barre" placeholder="&#xF002; Rechercher" id="search" />
    </div>
    <div class="nav-bar">
      <router-link to="/login" class='navigation'>Co</router-link>
      <router-link to="/" class='navigation'><i class="fas fa-home"></i></router-link>
      <router-link to="/post" class='navigation'><i class="far fa-plus-square"></i></router-link>
      <router-link to="/message" class='navigation'><i class="fas fa-comment-dots"></i></router-link>
      <router-link to="/like" class='navigation'><i class="fas fa-heart"></i></router-link>
      <router-link to="/user" class="navigation"><i class="fas fa-user-circle"></i></router-link>
    </div>
  </div>
  <router-view/>
</template>


<style lang="scss">
$couleur-lien: rgb(17,150,246);
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$border-secondaire:1px solid rgb(231, 231, 231);

input {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  border-bottom: $border;
  background: $couleur-bg-1; 
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
      border: $border;
      border-radius: 15px;
      background: $couleur-bg-2;
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

    .fa-plus-square, .fa-comment-dots, .fa-heart, .fa-user-circle{
      font-weight: normal;
    }

    &.router-link-exact-active {
      color: #000000;
      .fa-comment-dots, .fa-heart, .fa-user-circle {
        font-weight: bold;
      }
    }
  }
}
</style>
