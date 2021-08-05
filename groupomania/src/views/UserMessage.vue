<template>
  <div id="userMessage">
    <div class="userMessage">
      <div class="utilisateur">
        <h4>{{ perso.utilisateur }}</h4>
        <i class="far fa-edit"></i>
      </div>
      <div class="all-message">
        <div class="utilisateur-friends">
          <!-- amis 1 -->
            <Friend/>
          <!-- amis 2 -->
            <Friend/>
          <!-- amis 3 -->
            <Friend/>
        </div>
        <div class="contenue-message">
          <h1>contenue message</h1>
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
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);

#userMessage {
  .userMessage {
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
      .contenue-message {
        width:70%;
      }
    }
  }
}
@media screen and(max-width:1366px) {
  #userMessage {
    .userMessage {
      width: 80vw;
    }
  }
}
</style>