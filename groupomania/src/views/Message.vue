<template>
  <div id="message">
    <div class="message">
      <div class="utilisateur">
        <h4>{{ perso.utilisateur }}</h4>
        <i class="far fa-edit"></i>
      </div>
      <div class="all-message">
        <!-- Partie Friend -->
        <div class="utilisateur-friends">
          <!-- amis 1 -->
          <div class="friend">
            <Friend/>
          </div>
          <!-- amis 2 -->
          <div class="friend">
            <Friend/>
          </div>
          <!-- amis 3 -->
          <div class="friend">
            <Friend/>
          </div>
        </div>
        <!-- Partie Messages -->
        <div class="contenue-vide">
          <i class="fas fa-comment-dots"></i>
          <h2>Vos Messages</h2>
          <p>Envoyez des photos et des messages privés à un(e) collègue</p>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Friend from '@/components/Friend.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'like',
  components: {
    Friend,
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
$if-active: 3px solid rgb(97, 97, 97);
$couleur-titre-secondaire: rgb(134, 134, 134);

#message {
  .message {
    margin: 5vh auto;
    width: 65vw;
    height: 81vh;
    border: $border;
    background: $couleur-bg-1;
    .utilisateur {
      position: relative;
      width: 100%;
      height: 7vh;
      border-bottom: $border;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: x-large;
      h4 {
        width: 100%;
      }
      i{
        position: absolute;
        right: 1.5vw;
      }
    }
    .all-message {
      display: flex;
      .utilisateur-friends {
        width: 30%;
        height: 74vh;
        border-right: $border;
        overflow: scroll;
      }
      .contenue-vide {
        width: 70%;
        height: 74vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        i {
          font-size: xxx-large;
          border: $if-active;
          padding: 2vh;
          border-radius: 50%;
          color: rgb(97, 97, 97);
          font-weight: normal;
        }
        h2 {
          font-weight: normal;
        }
        p {
          color: $couleur-titre-secondaire;
        }
      }
    }
  }
}
</style>