<template>
  <div>
    <div>
      <video id="videoPlayer" controls>
        <source src="http://localhost:3000/video" type="video/mp4">
      </video>
      {{actualVideo}}
    </div>
    <div v-for="(video,i) in videoList" :key="i">{{video}}</div>
  </div>
</template>

<script>

export default {
  name: "Player",
  data() {
    return {
      actualVideo: null
    };
  },
  props: {
    videoList: Array
  },
  mounted() {
    this.actualVideo = this.videoList[0].children[0].children[0].children[0].path;
    if (this.videoList[0].children[0].children[0].children[0].path) {
      this.actualVideo = this.videoList[0];
    }

  }
};
</script>

<style scoped>

</style>