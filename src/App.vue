<script setup lang="ts">
  import { ref} from 'vue'
  // import NoticeBar from './components/notice-bar/index.vue'
  import NoticeBar from 'notice-bar-vue'
  // import NoticeBar from '../dist/'
  const adNotice = ref()
</script>

<template>
  <div class="container">
    <h2>基本用法：</h2>
    <NoticeBar>
      <div class="item-wrap">
        <span class="item-notice">177****2331已开通</span>
        <span class="item-notice">189****5822已开通</span>
        <span class="item-notice">189****2913已开通</span>
        <span class="item-notice">177****0955已开通</span>
      </div>
    </NoticeBar>
    <h2>自定义宽度：</h2>
    <NoticeBar ref="adNotice" width="500px">
      <div class="item-wrap">
        <span class="item-notice">177****2331已开通</span>
        <span class="item-notice">189****5822已开通</span>
        <span class="item-notice">189****2913已开通</span>
        <span class="item-notice">177****0955已开通</span>
      </div>
    </NoticeBar>
    <h2>暂停&开始事件：</h2>
    <NoticeBar ref="adNotice">
      <div class="item-wrap" @mouseover="()=>{adNotice.pause()}" @mouseleave="()=>{adNotice.play()}">
        <span class="item-notice">177****2331已开通</span>
        <span class="item-notice">189****5822已开通</span>
        <span class="item-notice">189****2913已开通</span>
        <span class="item-notice">177****0955已开通</span>
      </div>
    </NoticeBar>
  </div>
</template>

<style scoped>
h2{
  margin-top: 0;
}
.container{
  padding: 20px;
  width: 700px;
  min-height: 100vh;
  background-color: rgb(253, 242, 185);
}
.item-wrap{
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-wrap: nowrap;
  color: #fff;
}
.item-notice{
  padding: 0 20px;
  background: rgba(0,0,0,.5);
  border-radius: 15px;
  margin-right: 15px;
}
</style>