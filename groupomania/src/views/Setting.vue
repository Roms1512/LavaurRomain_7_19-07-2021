<template>
  <div id="setting">
    <div class="setting">
      <div class="parametre">
        <ModifyUser/>
        <div class="supr">
          <button title="Suprimer le profil">
            <p class="delete-profile">Supprimer mon Profil</p>
          </button>
        </div>
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
      .supr{
        
        position: relative;
        top: 85vh;
        display: flex;
        justify-content: center;
        button {
          cursor: pointer;
          border: none;
          background: none;
          .delete-profile {
            font-weight: bold;
            font-size: medium;
            color: $couleur-suppression;
          }
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