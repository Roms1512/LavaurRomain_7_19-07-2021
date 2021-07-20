<template>
  <div class="friends">
    <div class="friend">
          <i class="fas fa-user-circle"></i>
          <div class="name">
              <p>{{ user }}</p>
              <p class="status">{{ status }}</p>
          </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'friend',
  computed: {
    ...mapState(['status', 'user'])
  }
}
</script>

<style lang="scss">
.friends {
  .friend {
      padding-top: 1.2vh;
      padding-bottom: 1.2vh;
      padding-left: 2vh;
      height: 5vh;
      display: flex;
      align-items: center;
        i {
          font-size: xxx-large;
        }
        .name {
            height: 5vh;
          p {
            height: 2vh;
            margin: 2px;
          }
          .status {
            color: rgb(192, 192, 192);
          }
        }
    &:hover{
      cursor: pointer;
    }
  }
  .friend-active {
    background: rgba(194, 194, 194, 0.555);
  }
}
</style>