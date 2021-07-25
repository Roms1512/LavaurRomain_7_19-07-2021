<template>
  <div id="inscription">
    <div class="menu-inscription">
      <router-link to="/login" class='navigation'>Connexion</router-link>
      <p class='navigation'>Inscription</p>
    </div>
    <div class="inscription">
      <h3>Veuillez vous Inscrire</h3>
      <!-- Formulaire -->
      <form action="" method="get" class="form-connect">
          <!-- Adresse mail -->
          <div class="pseudo">
            <label for="pseudo">Nom d'Utilisateur</label>
            <input type="text" name="pseudo" aria-label="pseudo" required>
          </div>

          <!-- Adresse mail -->
          <div class="mail">
            <label for="mail">Adresse Mail</label>
            <input type="mail" name="mail" aria-label="mail" required>
          </div>

          <!-- Mots de passe -->
          <div class="password">
            <label for="password">Mots de Passe</label>
            <input type="password" name="password" aria-label="password" required>
          </div>
          <button>Inscription</button>
      </form>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'inscription',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-lien: rgb(17,150,246);

#inscription {
  .menu-inscription {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
    margin: auto;
  }
  .inscription {
    position: relative;
    margin: 3vh auto 40vh;
    width: 500px;
    height: 310px;
    border: $border;
    background: $couleur-bg-1;
    h3 {
      margin-top: 3vh;
    }
    .form-connect {
      margin: auto;
      width: 340px;
      height: 192px;
      padding-top: 2vh;
      .mail, .password, .pseudo {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vh;
        input {
          height: 2vh;
          width: 50%;
          border-radius: 5px;
          border: $border;
        }
      }
      button {
        position: relative;
        top: 2.1vh;
        width: 120px;
        height: 40px;
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
}
</style>