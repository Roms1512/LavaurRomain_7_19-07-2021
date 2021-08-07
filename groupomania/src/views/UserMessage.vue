<template>
  <div id="userMessage">
    <div class="userMessage">
      <div class="utilisateur">
        <div class="utilisateur-perso">
          <h4>{{ perso.utilisateur }}</h4>
          <i class="far fa-edit"></i>
        </div>
        <div class="user-title">
          <i class="fas fa-user-circle"></i>
          <h5>{{ otherUser.user }}</h5>
        </div>
      </div>
      <div class="all-message">
        <div class="utilisateur-friends">
          <!-- amis 1 -->
          <Friend />
          <!-- amis 2 -->
          <Friend />
          <!-- amis 3 -->
          <Friend />
        </div>
        <div class="contenue-message">
          <h1>contenue message</h1>
          <div class="barre-envois">
            <input type="text" placeholder="Votre message..." />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Friend from "@/components/Friend.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "like",
  components: {
    Friend,
    Footer,
  },
  computed: {
    ...mapState(["perso", "utilisateur", "otherUser", "user"]),
  },
};
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-bg-2: rgba(224, 224, 224, 0.472);
$if-hover: 3px solid rgba(189, 189, 189, 0.794);
$if-active: 3px solid rgb(97, 97, 97);
$couleur-icon-utilisateur: rgba(189, 189, 189);

#userMessage {
  .userMessage {
    margin: 5vh auto;
    width: 65vw;
    height: 81vh;
    border: $border;
    background: $couleur-bg-1;
    .utilisateur {
      font-size: x-large;
      height: 7vh;
      width: 100%;
      border-bottom: $border;
      .utilisateur-perso {
        width: 30%;
        height: 7vh;
        border-right: $border;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        h4 {
          width: 30%;
        }
        i {
          position: absolute;
          right: 1.5vw;
        }
      }
      .user-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -7vh;
        left: 4vw;
        width: 70%;
        height: 7vh;
        border-bottom: $border;
        i {
          color: $couleur-icon-utilisateur;
          margin-right: 10px;
          font-size: xx-large;
        }
        p {
          font-weight: bold;
        }
      }
    }
    .all-message {
      display: flex;

      .utilisateur-friends {
        width: 30%;
        height: 74vh;
        border-right: $border;
        overflow: scroll;
      }
      .contenue-message {
        width: 70%;
        position: relative;
        .barre-envois {
          width: 100%;
          position: absolute;
          bottom: 5%;
          margin: auto;
          input {
            padding-left: 10px;
            border: $border;
            border-radius: 20px;
            width: 90%;
            height: 3.5vh;
          }
        }
      }
    }
  }
}
@media screen and(max-width:1366px) {
  #userMessage {
    .userMessage {
      width: 80vw;
    }
  }
}
</style>
