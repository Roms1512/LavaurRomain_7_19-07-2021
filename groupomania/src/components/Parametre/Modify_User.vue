<template>
  <div id="modify">
    <p class="modify">Modifier Profil</p>
  </div>
</template>

<script>
export default {
  name: 'modify'
}
</script>

<style lang="scss">
#modify {
  padding-top:1.4vh;
  height: 5vh;
  border-bottom: 1px solid rgb(231, 231, 231);
  .modify {
    font-size: larger;
    margin: 0.2vh;
  }
  &:hover {
    cursor: pointer;
    background: rgba(224, 224, 224, 0.472);
    border-left: 2px solid rgb(167, 167, 167);
  }
}
</style>