<template>
  <div>
    <section class="search">
      <Header title="搜 索" />
      <form class="search_form" action="#">
        <span class="title"><a href="##">网易严选</a></span>
        <input type="search" name="search" placeholder="搜索商品，共123456件商品" class="search_input">
        <input type="submit" name="submit" class="search_submit">
      </form>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .search  //搜索
    width 100%
    .search_form
      clearFix()
      background-color #fff
      padding 12px 8px
      .title
        float: left
        font-size 16px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 70%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 12%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774
</style>
