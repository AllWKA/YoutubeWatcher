import Vue from "vue";
import Vuex from "vuex";
import { writeFileSync } from "fs";

Vue.use(Vuex);

//TODO: every time we save a vuex, we have to write the json backup
const electronStoragePath = "./src/store/electronStorage.json";
export default new Vuex.Store({
  state: {
    folders: []
  },
  mutations: {
    addFolder(state, newFolder) {
      state.folders.push(newFolder);
      writeFileSync(electronStoragePath, JSON.stringify(this.state));
    }
  },
  actions: {},
  modules: {}
});
