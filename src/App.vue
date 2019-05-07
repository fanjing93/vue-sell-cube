<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
  import { getSeller } from 'api'
  import vHeader from 'components/v-header'

  export default {
    name: 'app',
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this._getSeller()
    },
    methods: {
      async _getSeller () {
        this.seller = await getSeller()
      }
    },
    components: {
      vHeader
    }
  }
</script>
<style lang="stylus">
</style>
