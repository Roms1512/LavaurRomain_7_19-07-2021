<template>
  <div id="post">
    <h1>Créer une Publication</h1>
    <div class="post">
      <!-- user -->
      <div class="user">
        <i class="fas fa-user-circle"></i>
        <p>{{ perso.utilisateur }}</p>
      </div>
      <!-- Message Post -->
      <form @submit="publish" class="contenue-post">
        <textarea name="posting" id="posting" class="posting" cols="30" rows="10" placeholder="Que voulez-vous dire ?"></textarea>
        <div class="ajouter">
          <p>Ajouter à votre publication</p>
          <button @click="newImage" class="newImage"><i class="fas fa-images"></i></button>
          <button @click="newImage" class="newVideo"><i class="fas fa-video"></i></button>
        </div>
        <button>Publier</button>
      </form>
    </div>

    <Footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '@/components/Footer.vue'

export default {
  name: 'like',
  components: {
    Footer
  },
  computed: {
    ...mapState(['perso', 'utilisateur'])
  } 
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-icon-utilisateur: rgba(189, 189, 189);
$couleur-suppression: rgb(255, 31, 31);

#post {
  h1 {
    margin-top: 3vh;
  }
  .post {
    margin: 5vh auto 20vh auto;
    width: 45vw;
    height: 50vh;
    border: $border;
    border-radius: 20px;
    background: $couleur-bg-1;
    .user, .contenue-post {
      margin-left: 10px;
      margin-right: 10px;
    }
    .user {
      height: 6vh;
      margin-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      i {
        font-size: xxx-large;
        color: $couleur-icon-utilisateur;
      }
      p {
        font-size: x-large;
        font-weight: bold;
        padding-left: 10px;
      }
    }
    .contenue-post {
      height: 40vh;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      .posting {
        padding-top: 10px;
        border: none;
        height: 30vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: large;
        outline-style: none;
      } 
      .ajouter {
        padding: 5px 10px;
        margin-bottom: 2vh;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: $border;
        border-radius: 10px;
        .newImage, .newVideo {
          margin-left: 30px;
          background: none;
          cursor: pointer;
          i {
            font-size: xx-large;
          }
        }
        .newImage {
          i {
            color: rgb(64, 173, 64);
          }
        }
        .newVideo {
          i {
            color: $couleur-suppression;
          }
        }
      }
      button {
        cursor: pointer;
        height: 5vh;
        border-radius: 10px;
        border: none;
        background: $couleur-icon-utilisateur;
        font-size: large;
        color: lighten($color: $couleur-icon-utilisateur, $amount: 25);
      }
    }
  }
}
@media screen and(max-width: 1366px) {
  .post {
    margin-bottom: 5vh !important;
    width: 80vw !important;
    height: 65vh !important;
    .contenue-post {
      height: 55vh !important;
      .posting {
        height: 50vh !important;
      }
    }
  }
}
</style>