<template>
  <div id="user">
    <Utilisateur/>
    <Publication/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Utilisateur from '@/components/Profile/Utilisateur.vue'
import Publication from '@/components/Profile/Publication.vue'


export default {
  name: 'like',
  components: {
    Utilisateur,
    Publication
  },
  computed: {
    ...mapState(['utilisateur', 'bio', 'publication', 'abonnés', 'abonnements'])
  } 
}
</script>