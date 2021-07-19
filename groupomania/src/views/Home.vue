<template>
  <div class="home">
    <Forum msg="Forum"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Forum from '@/components/Forum.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Forum,
    Footer
  }
}
</script>
