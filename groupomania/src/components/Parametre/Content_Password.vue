<template>
  <div id="contentPassword">
    <div class="user-profile">
      <!-- Photo de Profile -->
      <div class="picture">
        <div class="photo-profile">
          <i class="fas fa-user-circle"></i>
          <p>{{ utilisateur }}</p>
        </div>
      </div>
      <!-- Formulaire de Modification -->
      <form method="get" action="" class="formulaire">
        <!-- OldPassword -->
        <div class="oldPassword">
          <label for="oldPassword">Ancien Mots de Passe</label>
          <input type="password" name="oldPassword" aria-label="oldPassword">
        </div>
        <!-- NewPassword -->
        <div class="newPassword">
          <label for="newPassword">Nouveaux Mots de Passe</label>
          <input type="password" name="newPassword1" aria-label="newPassword"/>
        </div>
        <!-- ConfirmPassword -->
        <div class="confirmPassword">
          <label for="confirmPassword">Confirmer le Nouveau Mots de Passe</label>
          <input type="password" aria-label="confirmPassword" name="confirmPassword"/>
        </div>

        <!-- Boutton Envoyer -->
        <button class="envoyer-formulaire">Modifier le Mots de Passe</button>
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

#contentPassword{
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
  }
  .formulaire {
    display: flex;
    flex-direction: column;
    width: 80%;
    .oldPassword, .newPassword, .confirmPassword {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2vh;
      label {
        font-weight: bold;
        text-align: left;
        width: 28%;
      }
      input {
        width: 65%;
        height: 3.2vh;
      }
    }
    // Boutton Envoyer
    .envoyer-formulaire {
      position: relative;
      left: 28%;
      width: 12vw;
      height: 4vh;
      border: none;
      border-radius: 5px;
      font-size: small;
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