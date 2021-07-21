<template>
  <div class="forum">
    <h1>{{ msg }}</h1>
    <p>Bonjours et bien venue dans le forum. vous avez la possibiliter de poster vos photos, vidéo et texte ici</p>
  </div>
</template>

<script>
export default {
  name: 'forum',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
