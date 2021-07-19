<template>
  <div class="footer">
    <div class="nav-footer">
      <router-link to="/about" class="about">À Propos <i class="fas fa-info-circle"></i></router-link> |
      <p>Condition</p> |
      <p>Confidentialité</p>
    </div>  
    <div class="copyright">
      <i class="far fa-copyright"></i>
      <p>2021 Groupomania</p>
    </div>

    <router-view/>  
  </div>
</template>

<style lang="scss">
  .footer {
    margin: auto;
    width: 40vw;
    font-size: small;
    color: gray;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .nav-footer {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .copyright {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  i {
    margin-right: 5px;
    margin-left: 5px;
  }

  a {
    color: gray;
    text-decoration: none;
  }
</style>

<script>
export default {
  name: 'footer'
}
</script>