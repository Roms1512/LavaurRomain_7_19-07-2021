<template>
  <div id="content-modify">
    <div class="user-profile">
      <!-- Photo de Profile -->
      <div class="picture">
        <div class="photo-profile">
          <i class="fas fa-user-circle"></i>
          <p>{{ perso.utilisateur }}</p>
        </div>
        <div class="modif">
          <button id="modifyPhoto" title="Modifier photo de profil">
            <p class="modification-photo">Modifier la photo de profile</p>
          </button>
        </div>
      </div>
      <!-- Formulaire de Modification -->
      <form action="" @submit.prevent="modifyForm" class="formulaire">
        <!-- Nom Utilisateur -->
        <div class="pseudo">
          <label for="pseudo">Nom Utilisateur</label>
          <input type="text" name="pseudo" id="pseudo" aria-label="pseudo" placeholder="Jean-dupont-123" v-model="perso.utilisateur" pattern="^[A-Za-z0-9][a-z0-9]{3,20}"/>
        </div>
          <p class="info">Aidez les gens à trouver votre compte à l’aide de votre nom le plus connu, que ce soit votre nom complet, votre surnom ou votre nom d’entreprise.</p>
        <!-- Biographie -->
        <div class="biographie">
          <label for="bio">Bio</label>
          <textarea name="bio" aria-label="bio" id="bio" placeholder="Bonjours à tous je m'appel..." v-model="perso.bio"/>
        </div>
        <h5>Informations personnelles</h5>
          <p class="info">Fournissez vos informations personnelles, même si le compte est utilisé pour une entreprise, un animal ou autre chose. Elles n’apparaîtront pas sur votre profil public.</p>
        <!-- Mail -->
        <div class="mail">
          <label for="mail">Adresse Mail</label>
          <input type="mail" name="mail" aria-label="mail" id="mail" placeholder="Dupont05@outlook.com" v-model="perso.email" pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"/>
        </div>
        <!-- Téléphone -->
        <div class="telephone">
          <label for="tel">Numéro de Téléphone</label>
          <input type="tel" name="tel" aria-label="tel" id="tel" placeholder="0612345678" v-model="perso.telephone"/>
        </div>
        <!-- Genre -->
        <div class="genre">
          <label for="genre">Genre</label>
          <input type="text" maxlength="5" aria-label="genre" id="genre" name="genre" placeholder="Femme, Homme, Autre" v-model="perso.genre"/>
        </div>

        <!-- Boutton Envoyer -->
        <button class="envoyer-formulaire" id="modifyFormSubmit" >Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
// import {mapAction} from 'vuex'

export default {
  name: 'content-modify',
  computed: {
    ...mapState(['perso', 'utilisateur', 'email', 'telephone', 'genre']),
  },
  methods: {
    ...mapMutations(['modifyForm'])
  },
  mounted() {
    if (localStorage.utilisateur) {
      this.utilisateur = localStorage.utilisateur;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  }
}

</script>

<style lang="scss">
$couleur-lien: rgb(17,150,246);
$couleur-icon-utilisateur: rgba(189, 189, 189);
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$border-secondaire:1px solid rgb(231, 231, 231);
$border: 1px solid rgb(192, 192, 192);

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
        width: 68%;
        border-radius: 5px;
        border: $border;
        padding-left: 10px;
        padding-right: 10px;
      }
      textarea {
        padding-top: 5px;
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
@media screen and(max-width:1366px) {
  #content-modify {
    .formulaire {
      .pseudo, .genre, .mail {
        input {
          height:2vh;
        }
      }
      .envoyer-formulaire {
        height: 3vh;
        width:20vw;
      }
    }
  }
}
</style>