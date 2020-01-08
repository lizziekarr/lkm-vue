<template>
  <div>
    <lizzie-swan-dive></lizzie-swan-dive>
    <band></band>
    <lizzie></lizzie>
    <v-footer class="pa-3">
      <div>Black and white photos by Stephen Pruitt</div>
    </v-footer>
  </div>
</template>

<script>
import Band from '../components/Band.vue'
import Lizzie from '../components/Lizzie.vue'
import LizzieSwanDive from '../components/LizzieSwanDive.vue'
import Videos from '../components/Videos.vue'
// import Parallax from "vue-parallaxy"

export default {
  name: 'Home',
  components: { Band, Lizzie, Videos, LizzieSwanDive }
}
</script>

<style scoped lang='sass'>
iframe
  margin: 0

</style>
