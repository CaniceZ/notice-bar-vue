import './index.css'
import { defineComponent, onMounted, ref } from "vue";
export interface Props {
  width?: string
}
export default defineComponent({
  name: "NoticeBar",
  props: {
    width: {
      type: String,
      default: '100%'
    }
  },
  setup(props:Props, ctx) {
    let isPause = ref(false)
    let pos = ref(0) // 初始化位置
    const barWrapRef = ref()
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
    ctx.expose({ pause , play})
    return () => (
      <>
      <div class="scroll" style={{'width': props.width}}>
        <div class="bar-wrap" ref={barWrapRef}>
          {ctx?.slots['default']?.()}
          {ctx?.slots['default']?.()}
        </div>
      </div>
      </>
    );
  }
});