<template>
  <div id="forum">
    <div class="forum">
      <ViewPost/>
      <ViewPost/>
      <ViewPost/>
    </div>
  </div>
</template>

<script>
import ViewPost from '@/components/allPost/ViewPost.vue'

export default {
  name: 'forum',
  components: {
    ViewPost
  }
}
</script>

<style scoped lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);

#forum {
  .forum{
    margin: 5vh 0 5vh 16.5vw;
    width: 80vw;
    height: 81.5vh;
    overflow: scroll;
  }
}
@media screen and(max-width:1366px) {
  #forum {
    .forum {
      margin: 0 10vw 10vh 10vw;
    }
  }
}
</style>
