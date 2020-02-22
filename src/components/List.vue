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
    >
      <template v-slot:append>

      </template>
      <template v-slot:label="{ item, leaf, selected, indeterminate, active, open }">
        {{item.name}}
        {{leaf}}
        {{selected}}
        {{indeterminate}}
        {{active}}
        {{open }}
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