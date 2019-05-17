<template>
  <div>
    <router-view/>
    <FootGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FootGuide from './components/FootGuide/FootGuide.vue'
  export default {
    name: "App",
    components:{
      FootGuide
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>
