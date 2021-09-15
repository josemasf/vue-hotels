<template>
  <div id="vue-hotels">    
    <HotelDetail/>
  </div>
</template>

<script>
import HotelDetail from './components/HotelDetail.vue'

export default {
  name: 'App',
  components: {
    HotelDetail
  }
}
</script>

<style>
#vue-hotels {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
