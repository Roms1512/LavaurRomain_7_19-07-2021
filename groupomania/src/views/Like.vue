<template>
  <div id="like">
    <div class="like">
      <h1>This is an like Page</h1>
      <h2>Like de :</h2>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h2>Like de :</h2>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h2>Like de :</h2>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h2>Like de :</h2>
      <h3>Lui</h3>
      <h3>Lui</h3>
      <h3>Lui</h3>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'like',
  components: {
    Footer
  } 
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);

#like {
  .like {
    margin: 5vh auto;
    width: 65vw;
    height: 81vh;
    border: $border;
    background: $couleur-bg-1;
    overflow: scroll;
  }
}
</style>