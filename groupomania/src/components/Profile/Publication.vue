<template>
  <div id="publication">
    <div class="publication">
      <div class="sous-partie">
        <i class="fas fa-th"></i>
        <h3>Publications</h3>
      </div>
      <h4>Il n'y a aucune publication !</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'publication'
}
</script>

<style lang="scss">
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);

#publication {
  .publication {
    margin: 0 auto 1vh ;
    width: 60vw;
    height: 55vh;
    .sous-partie {
      margin: -3px auto 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: $if-active;
      width: 15%;
      h3 {
        padding-top: 0vh;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>