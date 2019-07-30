<template>
    <div id="app" ref="admin">
        <div class="main">
            <LeftMenu />
            <section class="content">
                <Header />
                <div class="viewer">
                    <router-view class="viewer-detail"/>
                </div>
            </section>
        </div>

    </div>
</template>
<script>
import LeftMenu from './components/LeftMenu'
import Header from './components/Header'
export default {
  components: {
    LeftMenu,
    Header
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/index.scss';
.main{
    @include flex(row);
  .content {
    flex: 1;
    @include flex;
  }
}
.viewer {
    background: #fafafa;
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
    margin-top: 5px;
    position: relative;
    @include flex;
    &-detail {
      padding-top: 15px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      width: 100%;
      position: absolute;
    }
  }
</style>
