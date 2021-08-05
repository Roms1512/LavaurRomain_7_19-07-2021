<template>
  <div id="publication">
    <div class="publication">
      <div class="sous-partie">
        <i class="fas fa-th"></i>
        <h3>Publications</h3>
      </div>
      <h4 v-if="MyPost = false">Il n'y a aucune publication !</h4>
      <div class="MyPublication">
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <Footer class="footer"/>
      </div>
    </div>
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
  display: flex;
  flex-direction: column;
  width: 60vw;
    margin: 0 auto 0 auto;
  .publication {
    position: relative;
    height: 100%;
    width: 60vw;
    .sous-partie {
      margin: -3px auto 1vh auto;
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
      .footer {
        margin-top: 5vh;
        width: 50vw;
        height: 7vh;
      }
    }
  }  
}
</style>