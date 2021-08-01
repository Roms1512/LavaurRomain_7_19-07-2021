<template>
  <div id="contact">
    <router-link to="/friend" class='contact'>
      <i class="fas fa-user-circle"></i>
      <div class="name">
        <p>{{ otherUser.user }}</p>
        <p class="status">{{ otherUser.status }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'friend',
  computed: {
    ...mapState(['otherUser','status', 'user'])
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
      padding: 1.2vh 0;
      width: 14.5vw;
      height: 4.5vh;
      display: flex;
      align-items: center;
      border-radius: 10px;
      cursor: pointer;
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
      background: $couleur-bg-2;
    }
  }
}
</style>