<template>
  <div id="app">
    <button @click="openFolder"></button>
    <List
        :folder="items"
        :title-list="folderPath.substring(folderPath.lastIndexOf('/')+1, folderPath.length)"></List>
    <Player
        :video-list="items"></Player>
    <MenuSettings></MenuSettings>
  </div>
</template>

<script>
const {Folder} = require("./classes/Folder");
import List from "./components/List";
import Player from "./components/Player";
import MenuSettings from "./components/MenuSettings";

const {dialog} = require("electron");

export default {
  components: {
    List,
    Player,
    MenuSettings
  },
  data() {
    return {
      items: [],
      folderPath: "/Users/bryanjaramillobaldeon/Documents/my_projects/YoutubeWatcher/src/folderExample/series"
    };
  },
  mounted() {
    const resource = new Folder(this.folderPath);
    this.items = [resource.getContent()];
  },
  methods: {
    openFolder() {
      dialog.showOpenDialog({properties: ["openDirectory"]}, (res => {
        console.log(res);
      }));
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
