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
      <form method="post" action="" class="formulaire">
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
        <h6>Informations personnelles</h6>
          <p class="info">Fournissez vos informations personnelles, même si le compte est utilisé pour une entreprise, un animal ou autre chose. Elles n’apparaîtront pas sur votre profil public.</p>
        <!-- Genre -->
        <div class="genre">
          <label for="genre">Genre</label>
          <input type="text" maxlength="5" name="genre" placeholder="Femme"/>
        </div>
        <!-- Téléphone -->
        <div class="telephone">
          <label for="tel">Numéro de Téléphone</label>
          <input type="tel" name="tel" placeholder="0612345678"/>
        </div>

        <!-- Boutton Envoyer -->
        <button class="envoyer-formulaire">Envoyer</button>
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
$couleur-lien: rgb(17,150,246);
$couleur-icon-utilisateur: rgba(189, 189, 189);

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
        color: $couleur-icon-utilisateur;
        font-size: xxx-large;
        padding-right: 1vw;
      }
      p {
        font-weight: bold;
      }
    }
    .modification-photo {
      margin: 0;
      padding-top: 1.5vh;
      font-size: smaller;
      font-weight: bold;
      color: $couleur-lien;
      text-align: left;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .formulaire {
    display: flex;
    flex-direction: column;
    width: 80%;
    .pseudo, .biographie, .genre, .telephone {
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
    .telephone {
      label {
        text-align: left;
        width: 28%;
      }
    }
    h6 {
      margin-bottom: 1vh;
    }
    // Boutton Envoyer
    .envoyer-formulaire {
      position: relative;
      left: 8vw;
      top: 10vh;
      width: 7vw;
      height: 5vh;
      border: none;
      border-radius: 10px;
      font-size: medium;
      font-weight: bold;
      color: white;
      background: $couleur-lien;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>