<template>
  <div v-show="visible" class="header-detail">
    <div class="detail-wrapper"></div>
    <div class="detail-close" @click="hide">
      <i class="icon-close"></i>
    </div>
  </div>
</template>

<script>
  // import popupMixin from 'common/mixins/popup'

  export default {
    name: 'header-detail',
    // mixins: [popupMixin],
    data () {
      return {
        visible: false
      }
    },
    methods: {
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .header-detail
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $color-background-s;
    padding: 0 36px;
    color: #FFFFFF;
    display: flex
    flex-direction: column
    .detail-wrapper
      width:100%
      margin-top:64px
    .detail-close
      display: flex
      justify-content center
      align-items center
      .icon-close
        font-size: $fontsize-large-xxxx
        color: $color-light-white-ss
</style>
