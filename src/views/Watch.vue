<template>
  <div>
    <iframe 
      width="100%" 
      height="430px" 
      src="https://www.youtube.com/embed/fd8x9GMvWQU" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
    <iframe 
      class='margin-up-ten'
      width="100%"
      height="430px"
      src="https://www.youtube.com/embed/1mBWpVLUTgI"
      frameborder="0"
      allow="autoplay;encrypted-media"
      allowfullscreen>
    </iframe> 
    <iframe 
      class='margin-up-ten'
      width="100%"
      height="430px"
      src="https://www.youtube.com/embed/g-pNeF-Q3dk"
      frameborder="0"
      allow="autoplay;encrypted-media"
      allowfullscreen>
    </iframe> 
    <iframe 
      class='margin-up-ten'
      width="100%"
      height="430px"
      src="https://www.youtube.com/embed/H5wqjozn7ok"
      frameborder="0"
      allow="autoplay;encrypted-media"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
import Videos from '../components/Videos.vue'

export default {
  name: 'Watch',
  components: { Videos }
}
</script>

<style scoped lang='sass'>
iframe
  margin: 0
.margin-up-ten
  margin-top: -10px
</style>
