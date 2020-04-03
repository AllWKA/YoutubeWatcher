<template>
  <div>
    <h3>{{titleList?titleList:"List"}}</h3>
    <v-treeview
        v-model="tree"
        :items="folder"
        activatable
        item-key="name"
        open-on-click
        expand-icon=""
        style="text-align: left"
    >
      <template v-slot:label="{ item, open }">
        <div v-if="item.type==='folder'">
          <v-icon v-if="!item.file">
            {{ open ? 'mdi-arrow-down-drop-circle' : 'mdi-arrow-right-drop-circle' }}
          </v-icon>
          <v-icon v-if="!item.file">
            {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
          </v-icon>
          {{item.name}}
        </div>
        <div v-else>
          <v-icon>mdi-movie-open</v-icon>
          {{item.name}}
          <v-icon @click="sendRequestedVideo(item)">mdi-play-circle-outline</v-icon>
        </div>

      </template>
      <template v-slot:append>
      </template>
      <template v-slot:append></template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tree: [],
      items: []
    };
  },
  methods:{
    sendRequestedVideo(video){
      this.$emit('requestedVideo', video);
    }
  },
  props: {
    folder: Array,
    titleList: String
  }
};
</script>

<style scoped>

</style>