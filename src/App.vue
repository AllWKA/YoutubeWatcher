<template>
  <div id="app">
    <ListName></ListName>
  </div>
</template>

<script>
const { Folder } = require("./classes/Folder");
const ListName = require("./components/ListName");
export default {
  components: {
    ListName
  },
  data() {
    return {};
  },
  mounted() {
    const resource = new Folder("/Users/allwka/Desktop/anime");
    console.log(resource);
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
