<template>
  <div>
    <div v-for='video in videos' :key='video.id'>
      <iframe width="100%" height="400px" :src='video.source' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      videos: [
        {id: 0, source: "https://www.youtube.com/embed/6q6fAruTYRQ"}
      ]
    }
  }
}
</script>

<style>

</style>
