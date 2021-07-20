<template>
  <div id="message">
    <div class="message">
      <div class="utilisateur">
        <p>{{ utilisateur }}</p>
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
#message {
  .message {
    margin: 5vh auto;
    width: 60vw;
    height: 81vh;
    border: 1px solid rgb(192, 192, 192);
    background: rgb(255, 255, 255);
    .utilisateur {
      position: relative;
      width: 100%;
      height: 7vh;
      border-bottom: 1px solid rgb(192, 192, 192);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: x-large;
      p {
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
      border-right: 1px solid black;
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