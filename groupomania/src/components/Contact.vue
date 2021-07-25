<template>
  <div id="contact">
    <div class="contact">
          <i class="fas fa-user-circle"></i>
          <div class="name">
              <p>{{ user }}</p>
              <p class="status">{{ status }}</p>
          </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'friend',
  computed: {
    ...mapState(['status', 'user'])
  }
}
</script>

<style lang="scss">
$couleur-titre-secondaire: rgb(192, 192, 192);
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);
$couleur-icon-utilisateur: rgba(189, 189, 189);

#contact {
  .contact {
      padding: 1.2vh;
      width: 14.5vw;
      height: 4.5vh;
      display: flex;
      align-items: center;
        i {
          font-size: xxx-large;
          color: $couleur-icon-utilisateur;
        }
        .name {
            height: 5vh;
          p {
            height: 2vh;
            margin: 2px;
          }
          .status {
            color: $couleur-titre-secondaire;
          }
        }
    &:hover{
      cursor: pointer;
      background: $couleur-bg-2;
      border-radius: 10px;
    }
  }
}
</style>