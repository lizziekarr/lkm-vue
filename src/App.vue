<template>
  <v-app class='app'>
    <v-toolbar
      class='toolbar'
      app
      :clipped-left="clipped"
    >
    <v-list class='nav-wrapper'>
      <v-list-tile 
        v-for='navItem in nav'
        class='nav-item'
        :key='navItem.name'>
        <router-link :to='navItem.path' class='link'> {{ navItem.name }}</router-link>
      </v-list-tile>
    </v-list>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  // background-image: url('https://s3-us-west-2.amazonaws.com/www.lizziekarrmusic.com/images/Shoop-Img-Web-Lg.jpg')


export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      fixed: false,
      nav: [
        { name: 'Home', path: '/' },
        { name: 'Listen', path: '/listen' },
        { name: 'Watch', path: '/watch' },
        { name: 'Tour', path: '/tour' },
        { name: 'Follow', path: '/follow' },
      ]
    }
  }
}



</script>

<style scoped lang='sass'>
.app
  height: 100vh
  margin: 0
  padding: 0
  background-attachment: fixed
  background-position: center center
  background-size: cover
  -webkit-background-size: cover
  -moz-background-size: cover
  background-repeat: no-repeat
v-
.toolbar
  border-bottom: none
  box-shadow: none
  background-color: rgba(255,255,255,.7)
.nav-wrapper
  display: flex
  justify-content: space-around
  background-color: rgba(255,255,255,0)
.link
  color: #382f30
  font-size: 22px
  font-family: 'Sorts Mill Goudy', sans-serif
  text-decoration: none
  letter-spacing: 2px
  &:hover
    color: #cb9c97

@media (max-width: 600px)
  .link
    font-size: 16px !important

@media (max-width: 400px)
  .link
    font-size: 12px !important
</style>

