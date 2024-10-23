import './index.css'
import { defineComponent, onMounted, ref } from "vue";
export interface Props {
  width?: string
  height?: string
  direction?: string
}
export default defineComponent({
  name: "NoticeBar",
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    },
    direction: {
      type: String,
      default: 'row'
    }
  },
  setup(props:Props, ctx) {
    let isPause = ref(false)
    let pos = ref(0) // 初始化位置
    const barWrapRef = ref()
    onMounted(()=>{
      if(props.direction == 'row'){
        startAnimation()
      }else{
        startColumnAnimation()
      }
    })
    // 横向滚动动画逻辑
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
    // 纵向滚动动画逻辑
    const startColumnAnimation = ()=> {
      const wrapHeight = barWrapRef.value.offsetHeight
      // 使用requestAnimationFrame实现动画循环
      function animate() {
        if(!isPause.value) pos.value-=0.5
        // 移动元素
        barWrapRef.value.style.transform = 'translateY(' + pos.value + 'px)';
        // 检查是否到达目标位置
        if (Math.abs(pos.value) < Math.abs(wrapHeight/2)) {
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
      <div class="scroll" style={{'height': props.direction == 'column'? props.height:'auto','width': props.width}}>
        <div class="bar-wrap" ref={barWrapRef} 
          style={{ 'flex-direction': props.direction as any}}>
          {ctx?.slots['default']?.()}
          {ctx?.slots['default']?.()}
        </div>
      </div>
      </>
    );
  }
});