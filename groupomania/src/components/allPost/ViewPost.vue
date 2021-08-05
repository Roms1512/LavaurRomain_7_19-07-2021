<template>
  <div id="OtherPost">
    <div class="OtherPost">
      <div class="utilisateur">
        <i class="fas fa-user-circle"></i>
        <p>{{ otherUser.user }}</p>
      </div>
      <div class="contenue-post">
        <img src="../../assets/Publication/Moi2.jpeg" alt="">
        <!-- {{ contentPost }} -->
      </div>
      <div class="info-post">
        <div class="like">
          <i class="fas fa-heart active" @click="publi.nb_like ++"><p>{{ publi.nb_like }}</p></i>
          <i class="fas fa-comment"><p>{{ publi.nb_comment }}</p></i>
        </div>
        <div class="commentaire">
          <h2>commentaire</h2>
        </div>
        <div class="commenter">
          <i class="fas fa-user-circle"></i>
          <input type="text" placeholder="Écrivez un commetaire..." aria-label="Pour commenter" @change="publi.nb_comment ++">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'OtherPost',
  computed: {
    ...mapState(['perso', 'utilisateur', 'otherUser', 'user', 'publi', 'nb_comment', 'nb_like'])
  }
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-icon-utilisateur: rgba(189, 189, 189);
$couleur-suppression: rgb(255, 31, 31);

#OtherPost {
  margin-top: 2vh;
  .OtherPost {
    width: 30vw;
    height: 100%;
    border: $border;
    border-radius: 10px;
    margin: 0 auto 1vh;
    background: $couleur-bg-1;
    .utilisateur {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 1vw;
      height: 7vh;
      border-bottom: $border;
      p {
        font-size: large;
        font-weight: bold;
      }
      i {
        font-size: xxx-large;
        padding-right: 10px;
        color: $couleur-icon-utilisateur;
      }
    }
    img {
      object-fit: cover;
      width: 30vw;
      height: 50vh;
      padding: 0;
    }
    .info-post {
      height: 100%;
      .like, .commenter {
        height: 5vh;
      }
      .like {
        margin: auto;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: $border;
        i {
          cursor: pointer;
          font-weight: normal;
          font-size: x-large;
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: normal;
            font-size: large;
          }
        }
        .fa-heart.active {
          color: $couleur-suppression;
          font-weight: bold;
          p {
            color: black;
          }
        }
      }
      .commentaire {
        height: 10vh;
        h2 {
          margin-top: 0;
          margin-bottom: 2vh;
        }
      }
      .commenter {
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: xx-large;
          color: $couleur-icon-utilisateur;
        }
        input {
          width: 85%;
          height: 2.8vh;
          border-radius: 15px;
          border: none;
          background: rgb(240, 240, 240);
          padding-left: 10px;
        }
        }
    }
  }
}
@media screen and(max-width:1366px) {
  #OtherPost {
    .OtherPost {
      width: 60vw;
    }
    .contenue-post {
      img {
        width: 60vw;
      }
    }
  }
}
</style>