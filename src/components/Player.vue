<template>
  <div style="background-color: red; height: 100%; width: 100%">
    {{video.name}}
    {{video.path}}
    {{video}}
    <video id="videoPlayer" controls v-if="video.path">
      <source :src="'http://localhost:3000/video?path='+video.path" type="video/mp4">
    </video>
  </div>
</template>

<script>

export default {
  name: "Player",
  data() {
    return {
    };
  },
  props: {
    video: Object
  },
  mounted() {


  }
};
</script>

<style scoped>

</style>