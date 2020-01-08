<template>
  <div class='follow'>
    <v-list class='links'>
      <v-list-tile
        v-for='link in links'
        :key='link.name'
      >
        <a :href='link.path' class='link' target='_blank'> {{ link.name }} </a>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data(){
    return {
      links: [
        { name: 'instagram', path: 'http://instagram.com/lizziekarr'},
        { name: 'facebook', path: 'http://facebook.com/lizziekarrmusic'},
        { name: 'soundcloud', path: 'http://soundcloud.com/lizziekarrmusic'},
        { name: 'youtube', path: 'http://youtube.com/lizziemoves'},
        { name: 'twitter', path: 'http://twitter.com/lizzie_karr'},
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
.follow
  display: flex
  justify-content: center 
  align-content: center 
  .links
    width: 400px
    height: 300px
    background-color: rgba(255,255,255,.5)
    margin-top: 10vh
    border-radius: 3px
    .link
      color: #382f30
      margin: 50px !important
      width: 100%
      text-decoration: none
      font-size: 30px
      text-align: center
      font-family: 'Sorts Mill Goudy', sans-serif
      letter-spacing: 2px
      &:hover
        color: #cb9c97

</style>

