<template>
  <div id="setting">
    <div class="setting">
      <div class="parametre">
        <ModifyUser/>
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
#setting {
  .setting {
    display: flex;
    position: relative;
    margin: 5vh auto;
    width: 60vw;
    height: 100vh;
    border: 1px solid rgb(192, 192, 192);
    background: rgb(255, 255, 255);
    .parametre {
      width: 30%;
      height: 100%;
      border-right: 0.5px solid rgb(192, 192, 192);
    }
    .sous-parametre {
      overflow: scroll;
      position: relative;
      height: 100%;
      
    }
  }
}
</style>