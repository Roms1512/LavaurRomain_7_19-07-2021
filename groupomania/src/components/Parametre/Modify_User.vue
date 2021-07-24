<template>
  <div id="modify">
    <div class="modify">
      <p><router-link to="/modify" class='navigation modification'>Modifier Profil</router-link></p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'modify'
}
</script>

<style lang="scss">
$border-secondaire:1px solid rgb(231, 231, 231);
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);

#modify {
  border-bottom: $border-secondaire;
  .modify {
    padding-bottom: 1vh;
    height: 48px;
    p .modification{
      color: black;
      font-size: larger;
      margin: 0 auto;
    }
  &:hover {
    height: 48px;
    cursor: pointer;
    background: $couleur-bg-2;
    border-left: $if-hover;
  }
  }
  .modify-active {
    background: $couleur-bg-2;
    border: $if-active;
  }
}
</style>