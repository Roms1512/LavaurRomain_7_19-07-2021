<template>
  <div id="message">
    <div class="message">
      <div class="utilisateur">
        <h4>{{ utilisateur }}</h4>
        <i class="far fa-edit"></i>
      </div>
      <div class="utilisateur-friends">
        <!-- amis 1 -->
        <Friend/>
        <!-- amis 2 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
        <!-- amis 3 -->
        <Friend/>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);

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
    .utilisateur-friends {
      width: 30%;
      height: 74vh;
      border-right: $border;
      overflow: scroll;
    }
  }
}
</style>

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
    ...mapState(['utilisateur', 'status'])
  }
}
</script>