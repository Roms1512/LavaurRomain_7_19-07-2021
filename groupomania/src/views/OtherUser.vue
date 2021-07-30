<template>
  <div id="otherUser">
    <User2/>
    <UserPublication/>
    <Footer/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import User2 from '@/components/OtherUser/User2.vue'
import UserPublication from '@/components/OtherUser/UserPublication.vue'
import Footer from '@/components/Footer.vue'

export default {
name: 'otherUser',
components: {
  User2,
  UserPublication,
  Footer
},
computed: {
    ...mapState(['utilisateur', 'bio', 'publication', 'abonnés', 'abonnements'])
  }
}
</script>