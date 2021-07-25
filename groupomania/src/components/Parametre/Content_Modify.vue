<template>
  <div id="content-modify">
    <div class="user-profile">
      <!-- Photo de Profile -->
      <div class="picture">
        <div class="photo-profile">
          <i class="fas fa-user-circle"></i>
          <p>{{ utilisateur }}</p>
        </div>
        <div class="modif">
          <button id="modifyPhoto" title="Modifier photo de profil">
            <p class="modification-photo">Modifier la photo de profile</p>
          </button>
        </div>
      </div>
      <!-- Formulaire de Modification -->
      <form method="get" action="" class="formulaire">
        <!-- Nom Utilisateur -->
        <div class="pseudo">
          <label for="name">Nom Utilisateur</label>
          <input type="text" name="name" aria-label="name" placeholder="Jean-dupont-123">
        </div>
          <p class="info">Aidez les gens à trouver votre compte à l’aide de votre nom le plus connu, que ce soit votre nom complet, votre surnom ou votre nom d’entreprise.</p>
        <!-- Biographie -->
        <div class="biographie">
          <label for="bio">Bio</label>
          <textarea name="bio" aria-label="bio" placeholder="Bonjours à tous je m'appel..."/>
        </div>
        <h5>Informations personnelles</h5>
          <p class="info">Fournissez vos informations personnelles, même si le compte est utilisé pour une entreprise, un animal ou autre chose. Elles n’apparaîtront pas sur votre profil public.</p>
        <!-- Mail -->
        <div class="mail">
          <label for="mail">Adresse Mail</label>
          <input type="mail" name="mail" aria-label="mail" placeholder="Dupont05@outlook.com"/>
        </div>
        <!-- Téléphone -->
        <div class="telephone">
          <label for="tel">Numéro de Téléphone</label>
          <input type="tel" name="tel" aria-label="tel" placeholder="0612345678"/>
        </div>
        <!-- Genre -->
        <div class="genre">
          <label for="genre">Genre</label>
          <input type="text" maxlength="5" aria-label="genre" name="genre" placeholder="Femme, Homme, Autre"/>
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

// const modifyPhoto = document.getElementById('modifyPhoto');

// modifyPhoto.addEventListener('click', event => {
//   modifyPhoto.innerHTML = `Nombre de clics : ${event.detail}`;
// });
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
    .modif {
        width: 100%;
        display: flex;
        justify-content: flex-start;
      button {
        border: none;
        background: none;
        .modification-photo {
          margin: 0;
          padding-top: 1.5vh;
          font-size: smaller;
          font-weight: bold;
          color: $couleur-lien;
          text-align: left;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .formulaire {
    display: flex;
    flex-direction: column;
    width: 80%;
    .pseudo, .biographie, .genre, .telephone, .mail {
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
      font-size: small;
    }
    .pseudo, .genre, .mail {
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
    h5 {
      margin-bottom: 0;
    }
    // Boutton Envoyer
    .envoyer-formulaire {
      position: relative;
      left: 8vw;
      top: 4vh;
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