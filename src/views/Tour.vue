<template>
  <div class="tour">
    <v-list class='tour-wrapper'>
      <v-list-tile v-for='event in events' :key='event.date' class='tile'>
        <div class="tour-dates">
          <span class='date'>{{event.date}}</span>
          <span class='location'>{{event.location}}</span>
          <span class='time'>{{event.time}}</span>
          <span class='cover'>{{event.cover}}</span>
        </div>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>

// TODO: add firebase id info to main 
import { db } from '../main'
export default {
  name: 'tour',
  data () {
    return {
      events: []
    }
  },
  firestore () {
    return {
      events: db.collection('events').orderBy('timestamp')
    }
  },
  mounted(){
    console.log(this.events)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.tour-wrapper
  display: flex
  flex-flow: column
  align-items: center
  min-height: 100vh
  margin-top: 30px
.tile
  box-shadow: 4px 2px 6px 2px rgba(56,47,48,.5)
  padding: 20px
  width: 90vw
  margin: 8px
  border-radius: 3px
.tour-dates
  width: 100%
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  background-color: rgba(255,255,255,.3)
  border-radius: 3px
  span
    color: #333
    font-size: 1.4em
    padding: 15px
  .date
    font-family: 'Sorts Mill Goudy',sans-serif
    font-weight: 600
    color: #333
    font-size: 1.6em
  .location
    font-family: 'Sorts Mill Goudy', sans-serif
  .time
    font-family: 'Sorts Mill Goudy', sans-serif
@media (max-width: 680px)
  span
    font-size: .9em !important
  .date
    font-size: 1.1em !important

@media (max-width: 800px)
  .tile
    height: 80px
    padding: 6px 0
  .tour-dates
    margin-top: 20px
</style>


