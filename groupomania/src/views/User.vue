<template>
  <div class="user">
    <h1>This is an User page</h1>
    <router-link to="/setting" class='navigation'><i class="fas fa-cog"></i></router-link>
    <router-view/>
    
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
