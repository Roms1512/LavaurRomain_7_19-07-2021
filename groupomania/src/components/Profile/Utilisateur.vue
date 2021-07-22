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
            <p>{{ utilisateur }}</p>
            <router-link to="/setting" class='navigation'><i class="fas fa-cog"></i></router-link>
          </div>
          <div class="nombre-abonner">
            <p><span class="nb-abo">{{ publication }}</span> Publications</p>
            <p><span class="nb-abo">{{ abonnés }}</span> Abonnés</p>
            <p><span class="nb-abo">{{ abonnements }}</span> Abonnements</p>
          </div>
          <div class="description">
            <p>{{ bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'utilisateur',
  computed: {
    ...mapState(['utilisateur', 'publication', 'abonnés', 'abonnements', 'bio'])
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
      display: flex;
      height: 25vh;
      border-bottom: $border;
      .image {
        width: 30%;
        i {
          font-size: 125px;
          color: $couleur-icon-utilisateur;
        }
        button {
          height: 125px;
          border: none;
          cursor: pointer;
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
</style>