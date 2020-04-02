<template>
  <div>
    <input type="button" value="Choose Folder" id="select-file" @click="saveNewFolder"/>
  </div>
</template>

<script>
const {dialog} = require("electron").remote;
import {Folder} from "../Folder/Folder";

export default {
  name: "MenuSettings",
  data() {
    return {
      a: {}
    };
  },
  methods: {
    saveNewFolder() {
      let folder = dialog.showOpenDialogSync({properties: ["openDirectory"]}, (folders) => folders[0]);
      this.$store.commit("addFolder", new Folder(folder[0]));
    }
  }
};
</script>

<style scoped>

</style>