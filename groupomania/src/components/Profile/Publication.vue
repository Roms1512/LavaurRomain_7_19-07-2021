<template>
  <div id="publication">
    <div class="publication">
      <div class="sous-partie">
        <i class="fas fa-th"></i>
        <h3>Publications</h3>
      </div>
      <h4 v-if="MyPost">Il n'y a aucune publication !</h4>
      <div class="MyPublication">
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import MyPost from '@/components/allPost/MyPost.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'publication',
  components: {
    MyPost,
    Footer
  }
}
</script>

<style lang="scss">
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);

#publication {
  position: relative;
  display: flex;
  .publication {
    margin: 0 auto;
    width: 60vw;
    .sous-partie {
      margin: -3px auto 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: $if-active;
      width: 15%;
      margin-left: 15vw;
      h3 {
        padding-top: 0vh;
      }
      &:hover {
        cursor: pointer;
      }
    }
    .MyPublication {
      height: 100%;
    }
  }
  .footer {
    position: fixed;
    top: 88vh;
    left: 70vw;
    width: 25vw;
  }
}
</style>