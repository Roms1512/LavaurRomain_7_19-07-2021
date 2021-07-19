<template>
  <div class="home">
    <Forum msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Forum from '@/components/Forum.vue'

export default {
  name: 'Home',
  components: {
    Forum
  }
}
</script>
