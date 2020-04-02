import Vue from "vue";
import Vuex from "vuex";
import {writeFileSync} from "fs";

Vue.use(Vuex);

//TODO: every time we save a vuex, we have to write the json backup
const electronStoragePath = "./src/store/electronStorage.json";
export default new Vuex.Store({
  state: {
    folders: []
  },
  mutations: {
    addFolder(state, newFolder) {
      const repeatedFolder = state.folders.filter(folder => folder.path === newFolder.path);
      console.log(repeatedFolder);
      if (repeatedFolder.length !== 0) {
        return;
      }
      state.folders.push(newFolder);
      writeFileSync(electronStoragePath, JSON.stringify(this.state));
    }
  },
  actions: {},
  modules: {}
});
