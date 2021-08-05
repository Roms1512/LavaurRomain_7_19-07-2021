<template>
  <div id="setting">
    <div class="setting">
      <div class="parametre">
        <!-- Modifier Profile -->
        <div class="modify active ">
          <p><router-link to="/setting" class='navigation modification'>Modifier Profil</router-link></p>
        </div>
        <!-- Modifier Password -->
        <div class="modify">
          <p><router-link to="/modifyPassword" class='navigation modification'>Changer de Mots de Passe</router-link></p>
        </div>
        <!-- Supprimer Profile -->
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
    <router-view/>
  </div>
</template>

<script>
import ContentModify from '@/components/Parametre/Content_Modify.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'setting',
  components: {
    Footer,
    ContentModify
  } 
}
</script>

<style lang="scss">
$couleur-suppression: rgb(255, 31, 31);
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$border-secondaire:1px solid rgb(231, 231, 231);
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);

#setting {
  .setting {
    display: flex;
    margin: 5vh auto;
    width: 65vw;
    height: 100vh;
    border: $border;
    background: $couleur-bg-1;
    .parametre {
      position: relative;
      width: 45%;
      height: 100%;
      border-right: $border;
      .modify {
        padding-top: 0.1vh;
        padding-bottom: 1vh;
        height: 48px;
        border-bottom: $border-secondaire;
        .modification{
          color: black;
          font-size: larger;
          margin: auto;
        }
        &:hover {
          cursor: pointer;
          background: $couleur-bg-2;
          border-left: $if-hover;
        }
      }
      .active {
          background: $couleur-bg-2;
          border-left: $if-active;
        }
      .supr{ 
        position: absolute;
        text-align: left;
        bottom: 0vh;
        width: 100%;
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
@media screen and(max-width:1366px) {
  #setting {
    .setting {
      width: 80vw;
      .parametre {
        width: 59%;
        .modify {
          .modification {
            font-size: medium;
          }
        }
      }
    }
  }
}
</style>