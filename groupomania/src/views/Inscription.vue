<template>
  <div id="inscription">
    <div class="menu-inscription">
      <router-link to="/login" class='navigation'>Connexion</router-link>
      <p class='navigation'>Inscription</p>
    </div>
    <div class="inscription">
      <h3>Veuillez vous Inscrire</h3>

      <!-- Formulaire -->
      <form id="formSignup" @submit.prevent="contentSignup" action="" class="form-connect" >
      
          <!-- Adresse mail -->
          <div class="pseudo">
            <label for="pseudo">Nom d'Utilisateur</label>
            <input type="text" name="pseudo" aria-label="pseudo" id="pseudo" required>
          </div>

          <!-- Adresse mail -->
          <div class="mail">
            <label for="mail">Adresse Mail</label>
            <input type="mail" name="mail" aria-label="mail" id="email" required>
          </div>

          <!-- Mots de passe -->
          <div class="password">
            <label for="password">Mots de Passe</label>
            <input type="password" name="password" aria-label="password" id="password" required>
          </div>

          <!-- Confirmer Mots de passe -->
          <div class="password">
            <label for="confirmPassword">Confirmer le Mots de Passe</label>
            <input type="password" name="confirmPassword" aria-label="confirmPassword" id="confirmPassword" required>
          </div>
          <button id="submit">Inscription</button>
      </form>
    </div>

    <Footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import Footer from '@/components/Footer.vue'

export default {
  name: 'inscription',
  components: {
    Footer
  },
  computed:{
    ...mapState(['errors','error', 'perso', 'utilisateur', 'email'])
  },
  methods: {
    ...mapMutations(['contentSignup'])
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
    margin: 3vh auto 35.9vh;
    width: 500px;
    height: 350px;
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
        label {
          width: 40%;
          text-align: left;
        }
      }
      button {
        position: relative;
        top: 1.2vh;
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
  #inscription {
    .menu-inscription {
      width: 20%;
    }
    .inscription {
      height: 450px;
     
    }
  }
}
</style>