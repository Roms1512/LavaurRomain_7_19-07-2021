<template>
  <div id="home">
    <div class="home">
      <Forum/>
      <div class="contact">
        <h4>Abonnés</h4>
        <div class="abonner">
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Forum from '@/components/Forum.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Forum,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);

#home {
  .home {
    display: flex;
    align-items: flex-start;
    .contact {
      margin: 1vw auto;
      .abonner {
        height: 76vh;
        width: 16vw;
        overflow: scroll;
      }
      h4 {
        text-align: left;
        padding-bottom: 1vh;
        width: 60%;
        border-bottom: $border;
      }
    }
  }
}
</style>
