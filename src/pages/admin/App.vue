<template>
    <div id="app" ref="admin">
        <div class="main">
            <LeftMenu />
            <section class="content">
                <Header />
                <div class="viewer">
                    <transition name="fade-move">
                        <router-view class="viewer-detail"></router-view>
                    </transition>
                </div>
            </section>
            <MenuSet />
        </div>

    </div>
</template>
<script>
import LeftMenu from './components/LeftMenu'
import Header from './components/Header'
import MenuSet from './components/MenuSet'
export default {
  components: {
    LeftMenu,
    Header,
    MenuSet
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/index.scss';
// 引入过渡样式
@import '~@/assets/css/animation.scss';
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
