<template>
  <div id="user">
    <Utilisateur/>
    <Publication/>
    <Footer/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Utilisateur from '@/components/Profile/Utilisateur.vue'
import Publication from '@/components/Profile/Publication.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'like',
  components: {
    Footer,
    Utilisateur,
    Publication
  },
  computed: {
    ...mapState(['utilisateur', 'bio', 'publication', 'abonnés', 'abonnements'])
  } 
}
</script>

<style lang="scss">

</style>
