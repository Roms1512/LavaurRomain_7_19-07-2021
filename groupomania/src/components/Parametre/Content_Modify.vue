<template>
  <div id="content-modify">
    <div class="user-profile">
      <!-- Photo de Profile -->
      <div class="picture">
        <div class="photo-profile">
          <i class="fas fa-user-circle"></i>
          <p>{{ utilisateur }}</p>
        </div>
        <p class="modification-photo">Modifier la photo de profile</p>
      </div>
      <!-- Formulaire de Modification -->
      <form action="" class="formulaire">
        <!-- Nom Utilisateur -->
        <div class="pseudo">
          <label for="name">Nom Utilisateur</label>
          <input type="text" name="name" placeholder="Jean-dupont-123">
        </div>
          <p class="info">Aidez les gens à trouver votre compte à l’aide de votre nom le plus connu, que ce soit votre nom complet, votre surnom ou votre nom d’entreprise.</p>
        <!-- Biographie -->
        <div class="biographie">
          <label for="bio">Bio</label>
          <textarea name="bio" placeholder="Bonjours à tous je m'appel..."/>
        </div>
        <!-- Genre -->
        <div class="genre">
          <label for="genre">Genre</label>
          <input type="text" maxlength="5" name="genre" placeholder="Femme"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'content-modify',
  computed: {
    ...mapState(['utilisateur'])
  }
}
</script>

<style lang="scss">
#content-modify {
  .picture, .formulaire {
    margin: 6vh 3vw;
  }
  // Photo de Profile
  .picture {
    .photo-profile {
      display: flex;
      align-items: center;
      height: 3vh;
      margin-bottom: 1vh;
      i, p {
        margin: 0;
      }
      i {
        font-size: xxx-large;
        padding-right: 1vw;
      }
      p {
        font-weight: bold;
      }
    }
    .modification-photo {
      margin: 0;
      font-size: small;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .formulaire {
    display: flex;
    flex-direction: column;
    width: 80%;
    .pseudo, .biographie, .genre {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2vh;
      label {
        font-weight: bold;
      }
      input, textarea {
        width: 70%;
      }
    }
    .info {
      text-align: justify;
      margin: 1vh 5vw 4vh;
      font-size: x-small;
    }
    .pseudo, .genre {
      input {
        height: 3.2vh;
      }
    }
    .biographie {
      textarea {
        height: 12vh;
      }
    }
    
  }
}
</style>