<template>
  <div id="app">
    <List
        :folder="items"
        :title-list="folderPath.substring(folderPath.lastIndexOf('/')+1, folderPath.length)"></List>
  </div>
</template>

<script>
const {Folder} = require("./classes/Folder");
import List from "./components/List";

export default {
  components: {
    List
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
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
