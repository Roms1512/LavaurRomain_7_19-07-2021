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
      <form class="contenue-post">
        <textarea name="posting" id="posting" class="posting" cols="30" rows="10" placeholder="Que voulez-vous dire ?"></textarea>
        <div class="ajouter">
          <p>Ajouter à votre publication</p>
          <i class="fas fa-images"></i>
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

#post {
  .post {
    margin:0 auto 5vh auto;
    width: 65vw;
    height: 50vh;
    border: $border;
    border-radius: 20px;
    background: $couleur-bg-1;
    .user, .contenue-post {
      margin-left: 10px;
      margin-right: 10px;
    }
    .user {
      height: 5vh;
      margin-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .contenue-post {
      height: 40vh;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      .posting {
        border: none;
        height: 30vh;
      } 
      .ajouter {
        padding: 5px;
        margin-bottom: 2vh;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: $border;
        border-radius: 10px;
      }
      button {
        height: 5vh;
        border-radius: 10px;
        border: none;
        background: rgb(190, 190, 190);
      }
    }
  }
}
</style>