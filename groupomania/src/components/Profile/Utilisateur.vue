<template>
  <div id="utilisateur">
    <div class="user">
      <div class="info-perso">
        <div class="image">
          <button title="Modifier la photo de profil">
            <i class="fas fa-user-circle"></i>
          </button>
        </div>
        <div class="info-profil">
          <div class="pseudo">
            <h3>{{ perso.utilisateur }}</h3>
            <router-link to="/setting" class='navigation'><i class="fas fa-cog"></i></router-link>
          </div>
          <div class="nombre-abonner">
            <p><span class="nb-abo">{{ perso.publication }}</span> Publications</p>
            <p><span class="nb-abo">{{ perso.abonnés }}</span> Abonnés</p>
            <p><span class="nb-abo">{{ perso.abonnements }}</span> Abonnements</p>
          </div>
          <div class="description">
            <p>{{ perso.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'utilisateur',
  computed: {
    ...mapState(['perso', 'utilisateur', 'publication', 'abonnés', 'abonnements', 'bio']),
    ...mapGetters({
      
    })
  }
}
</script>

<style lang="scss">
$border: 1px solid rgb(192, 192, 192);
$couleur-bg-1: rgb(255, 255, 255);
$couleur-icon-utilisateur: rgba(189, 189, 189);

#utilisateur {
  .user {
    margin: 5vh auto 0;
    width: 60vw;
    .info-perso {
      height: 25vh;
      display: flex;
      border-bottom: $border;
      .image {
        width: 30%;
        position: relative;
        i {
          font-size: 130px;
          color: $couleur-icon-utilisateur;
        }
        button {
          height: 125px;
          cursor: pointer;
          border: none;
        }
      }
      .info-profil {
        display: flex;
        flex-direction: column;
        padding-top: 1vh;
        .pseudo, .nombre-abonner, .description {
          display: flex;
          align-items: center;
          height: 5vh;
          margin-left: 5vw;
          p {
            margin-right: 2vw;
          }
        }
        .pseudo {
          font-size: x-large;
          h3 {
            margin-right: 2vw;
          }
        }
        .nombre-abonner {
          p {
            .nb-abo {
              font-weight: bold;
            }
          }
        }
        .description {
          margin-top: 3vh;
          p {
            text-align: justify;

          }
        }
      }
    }
  }
}
@media screen and(max-width:1366px) {
  #utilisateur {
    .user {
      .info-perso {
        height: 100% !important;
        margin: 0 auto 0 -10vw;
        width: 80vw;
        .image {
          i {
            font-size: 80px;
          }
        }
        .info-profil {
          .pseudo, .nombre-abonner, .description {
            height: 2vh;
            margin-top: -2vh;
          }
          .description {
            p {
              margin-bottom: 4vh;
            }
          }
        }
      }
    }
  }
}
</style>