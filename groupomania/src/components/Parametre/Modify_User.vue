<template>
  <div id="modify">
    <div class="modify">
      <p>Modifier Profil</p>
    </div>
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
    padding-top:1.4vh;
    height: 5vh;
    p{
      font-size: larger;
      margin: 0.2vh;
    }
  &:hover {
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