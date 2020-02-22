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
            {{ open ? 'keyboard_arrow_down' : 'keyboard_arrow_right' }}
          </v-icon>
          <v-icon v-if="!item.file">
            {{ open ? 'folder_open' : 'folder' }}
          </v-icon>
          {{item.name}}
        </div>
        <div v-else>
          <v-icon>
            music_video
          </v-icon>
          {{item.name}}
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
  props: {
    folder: Array,
    titleList: String
  }
};
</script>

<style scoped>

</style>