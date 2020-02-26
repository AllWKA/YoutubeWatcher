<template>
  <div>
    <div>
      <video controls>
        <source
            :src="actualVideo"
            type="video/ogg">
      </video>
      {{actualVideo}}
    </div>
    <!--    <div v-for="(video,i) in videoList" :key="i">{{video}}</div>-->
  </div>
</template>

<script>
import fs from 'fs';
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
    this.actualVideo = fs.createReadStream("/Users/bryanjaramillobaldeon/Documents/my_projects/YoutubeWatcher/src/folderExample/series/serie1/temp1/cap1-t1.mp4");
    this.actualVideo.pipe();
    // this.actualVideo = this.videoList[0].children[0].children[0].children[0].path;
    // if (this.videoList[0].children[0].children[0].children[0].path) {
    // this.actualVideo = this.videoList[0];
  }

};
</script>

<style scoped>

</style>