<template>
  <div id="connexion">
    <div class="menu-connexion">
      <p class='navigation'>Connexion</p>
      <router-link to="/signup" class='navigation'>Inscription</router-link>
    </div>
    <div class="connexion">
      <h3>Veuillez vous Connecter</h3>
      <!-- Formulaire -->
      <form @submit.prevent="contentLogin" class="form-connect" id="formLogin">
          <!-- Adresse mail -->
          <div class="mail">
            <label for="mail">Adresse Mail</label>
            <input type="mail" aria-label="mail" name="mail" id="email" required>
          </div>

          <!-- Mots de passe -->
          <div class="password">
            <label for="password">Mots de Passe</label>
            <input type="password" name="password" aria-label="password" id="password" required>
          </div>
          <button>Connexion</button>
      </form>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'connexion',
  components: {
    Footer
  },
  methods: {
    ...mapMutations(['contentLogin']),
  }
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-lien: rgb(17,150,246);

#connexion {
  .menu-connexion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;
    margin: auto;
  }
  .connexion {
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
      .mail, .password {
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
        top: 7vh;
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
@media screen and(max-width:1366px) {
  #connexion {
    .menu-connexion {
      width: 20%;
    }
    .connexion {
      .form-connect {
        button {
          top: 1vh;
        }
      }
    }
  }
}
</style>