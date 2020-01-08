<template>
      <div class='band'>
      <v-card class='band-member'>
        <img class='member-photo' src="../assets/MichaelDavids.png" alt="Michael">
        <div class='member-info'>
          <div class="name">Michael Davids</div>
          <div class="instrument">Keyboard</div>
        </div>
      </v-card>
      <v-card class='band-member'>
        <img class='member-photo' src="../assets/KurtRivet.png" alt="Kurt">
        <div class='member-info'>
          <div class="name">Kurt Rivet</div>
          <div class="instrument">Bass</div>
        </div>
      </v-card>
      <v-card class='band-member'>
        <img class='member-photo' src="../assets/EtanSekons2.png" alt="Etan">
        <div class='member-info'>
          <div class="name">Etan Sekons</div>
          <div class="instrument">Lead Guitar</div>
        </div>
      </v-card>
      <v-card class='band-member'>
        <img class='member-photo' src="../assets/ChrisHausler.png" alt="Chris">
        <div class='member-info'>
          <div class="name">Chris Hausler</div>
          <div class="instrument">Drums</div>
        </div>
      </v-card>
    </div>
</template>

<style scoped lang='sass'>
.slide-fade-enter-active
  transition: all .3s ease
.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-enter, .slide-fade-leave-to, .slide-fade-leave-active 
  transform: translateX(10px)
  opacity: 0

.band
  margin-top: -10px;
  background-color: rgba(255,255,255,0)
  padding: 50px
  display: flex
  flex-flow: row wrap
  justify-content: center
  background-repeat: repeat
  .band-member
    display: flex
    flex-flow: row wrap
    background-color: rgba(255,255,255,.5)
    justify-content: flex-between
    align-items: center
    width: 385px
    margin: 20px
    img
      width: 170px
      height: 280px
    .name
      color: #333
      font-size: 1.8em
      font-family: 'Lato', sans-serif
      padding: 20px
    .instrument
      color: #333
      font-size: 1.4em
      font-family: 'Lato', sans-serif
      padding: 20px

@media (max-width: 1000px)
  .band-member
    width: 260px !important
    height: 185px !important
    img
      width: 112px !important
      height: 185px !important
  .name
    font-size: 1.3em !important
    padding: 10px !important
  .instrument
    font-size: 1.1em !important
    padding: 10px !important

@media (max-width: 600px)
  .band-member
    width: 240px !important
    height: 185px !important
    img
      width: 112px !important
      height: 185px !important
  .name
    font-size: 1em !important
    padding: 10px !important
  .instrument
    font-size: .9em !important
    padding: 10px !important
</style>
