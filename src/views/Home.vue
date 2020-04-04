<template>
  <div class="home">
    <div>
      <MenuSettings></MenuSettings>
      <List :folder="allFolders" @requestedVideo="playRequestedVideo"></List>
    </div>
    <div>
      <Player :video="actualVideo"></Player>
    </div>
  </div>
</template>

<script>
import MenuSettings from '../components/MenuSettings';
import Player from '../components/Player';
import List from '../components/List';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    MenuSettings,
    Player,
    List
  },
  computed: mapGetters(['allFolders', 'actualVideo']),
  methods:{
    playRequestedVideo(video){
      this.$store.commit('changeVideo', video)
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: auto auto;
}
</style>