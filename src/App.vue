<template>
  <div id="app">
    <router-view />
    <tab-bar />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar'
export default {
  components: {
      TabBar
  }
}
</script>


<style lang='scss'>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
