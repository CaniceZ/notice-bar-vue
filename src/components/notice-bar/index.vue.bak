<template>
  <div class="scroll" :style="{width: width}">
    <div class="bar-wrap" ref="barWrapRef">
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NoticeBar"
  }
</script>

<script setup type="ts">
import { onMounted, ref } from "vue";
  let isPause = ref(false)
  let pos = ref(0) // 初始化位置
  const barWrapRef = ref()
  defineProps({ 
    width: {
      type: String,
      default: '100%'
    }
  })
  onMounted(()=>{
    startAnimation()
  })
  const startAnimation = ()=> {
    const wrapWidth = barWrapRef.value.offsetWidth
    // 使用requestAnimationFrame实现动画循环
    function animate() {
      if(!isPause.value) pos.value-=0.5
      // 移动元素
      barWrapRef.value.style.transform = 'translateX(' + pos.value + 'px)';
      // 检查是否到达目标位置
      if (Math.abs(pos.value) < Math.abs(wrapWidth/2)) {
        requestAnimationFrame(animate); // 继续请求下一帧动画
      }else{
        pos.value = 0
        requestAnimationFrame(animate); // 继续请求下一帧动画
      }
    }
    // 首次调用动画函数
    requestAnimationFrame(animate);
  }
  const pause = ()=>{
    isPause.value = true
  }
  const play = ()=>{
    isPause.value = false
  }
  defineExpose({ pause , play})
</script>

<style scoped>
  .scroll{
    width: 100%;
    overflow: hidden;
  }
  .bar-wrap{
    display: flex;
    overflow: hidden;
    width: max-content;
    transition: all 0ms ease-in 0s
  }
</style>