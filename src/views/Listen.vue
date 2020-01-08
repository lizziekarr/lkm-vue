<template>
  <div class='listen'>
    <iframe src="https://open.spotify.com/embed/track/60kGPAGgjVdHa8aWu1jTLt" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
        { name: 'spotify', path: 'https://open.spotify.com/artist/5uidgwMiGgAsUDZ5UaLXXZ?si=x5B-90xfQjypVUMcQAoaeA'},
        { name: 'iTunes', path: 'https://itunes.apple.com/us/artist/lizzie-karr/598342037'},
        { name: 'amazon', path: 'https://www.amazon.com/s/ref=SOS?rh=i%3Apopular%2Ck%3ALizzie+Karr&keywords=Lizzie+Karr&ie=UTF8&qid=1498671730'},
        { name: 'bandcamp', path: 'http://lizziekarr.bandcamp.com'}
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
.listen
  margin-top: 40px
  display: flex
  flex-flow: row wrap
  justify-content: space-around 
  align-content: center 
  .links
    width: 300px
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


