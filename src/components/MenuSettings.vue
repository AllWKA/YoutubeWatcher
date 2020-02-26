<template>
  <div>
    <input type="button" value="Choose a file" id="select-file"/>
  </div>
</template>

<script>
const {dialog} = require("electron").remote;
// const fs = require("fs");
export default {
  name: "MenuSettings",
  mounted() {
    document.getElementById("select-file").addEventListener("click", function() {
      dialog.showOpenDialog(function(fileNames) {
        if (fileNames === undefined) {
          console.log("No file selected");
        } else {
          console.log(fileNames[0]);
        }
      });
    }, false);
  }
};
</script>

<style scoped>

</style>