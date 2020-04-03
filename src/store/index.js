import Vue from "vue";
import Vuex from "vuex";
import {writeFileSync} from "fs";

Vue.use(Vuex);

//TODO: every time we save a vuex, we have to write the json backup
const electronStoragePath = "./src/store/electronStorage.json";
export default new Vuex.Store({
  state: {
    actualVideo:{},
    folders: []
  },
  mutations: {
    addFolder(state, newFolder) {
      const repeatedFolder = state.folders.filter(folder => folder.path === newFolder.path);
      if (repeatedFolder.length !== 0) {
        return;
      }
      state.folders.push(newFolder.children);
      writeFileSync(electronStoragePath, JSON.stringify(this.state));
    },
    changeVideo(state, video){
      state.actualVideo = video;
      writeFileSync(electronStoragePath, JSON.stringify(this.state));
    }
  },
  actions: {},
  getters: {
    allFolders(state){
      return state.folders;
    },
    actualVideo(state){
      return state.actualVideo;
    }
  }
});
