<template>
 <div class="flex">
   <h3>{{ getName }}</h3>
 </div>
</template>

<script>
export default {
  name: "ListName",
  props: {
    path: String
  },
  computed: {
    getName() {
      return this.path.substring(this.path.lastIndexOf("/")+1, this.path.length);
    }
  }
};
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
}
</style>
