<template>
  <div id="setting">
    <div class="setting">
      <div class="parametre">
        <ModifyUser/>

        <p class="delete-profile">Supprimer mon Profil</p>
      </div>
      <div class="sous-parametre">
        <ContentModify/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ModifyUser from '@/components/Parametre/Modify_User.vue'
import ContentModify from '@/components/Parametre/Content_Modify.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'setting',
  components: {
    Footer,
    ModifyUser,
    ContentModify
  } 
}
</script>

<style lang="scss">
$couleur-suppression: rgb(255, 31, 31);
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);

#setting {
  .setting {
    display: flex;
    position: relative;
    margin: 5vh auto;
    width: 60vw;
    height: 100vh;
    border: $border;
    background: $couleur-bg-1;
    .parametre {
      position: relative;
      width: 30%;
      height: 100%;
      border-right: $border;
      .delete-profile {
        position: absolute;
        font-weight: bold;
        color: $couleur-suppression;
        top: 92vh;
        left: 0.8vw;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .sous-parametre {
      overflow: scroll;
      position: relative;
      height: 100%;

    }
  }
}
</style>