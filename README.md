# 版本
只支持Vue3.x
# 安装
```sh
npm install notice-bar-vue
```
# 使用
```js
import NoticeBar from 'notice-bar-vue'

<NoticeBar>
    <div class="item-wrap">
        <span class="item-notice">177****2331已开通</span>
        <span class="item-notice">189****5822已开通</span>
        <span class="item-notice">189****2913已开通</span>
        <span class="item-notice">177****0955已开通</span>
    </div>
</NoticeBar>
```
```css
<style scoped>
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
```
## 主要功能
支持自定义宽度
```js
    <NoticeBar width="500px"/>
```
支持暂停&开始
```js
    const adNotice = ref()
    <NoticeBar ref="adNotice">
      <div class="item-wrap" @mouseover="()=>{adNotice.pause()}" @mouseleave="()=>{adNotice.play()}">
        <span class="item-notice">177****2331已开通</span>
        <span class="item-notice">189****5822已开通</span>
        <span class="item-notice">189****2913已开通</span>
        <span class="item-notice">177****0955已开通</span>
      </div>
    </NoticeBar>
```
纵向&自定义高度（默认200px）
```js
    <NoticeBar direction="column" height="170px">
      <div class="item-column-wrap">
        <span class="item-column-notice">177****2331已开通</span>
        <span class="item-column-notice">189****5822已开通</span>
        <span class="item-column-notice">189****2913已开通</span>
        <span class="item-column-notice">177****0955已开通</span>
      </div>
    </NoticeBar>
```
```css
<style scoped>
    .item-column-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        flex-wrap: nowrap;
        color: #fff;
    }
    .item-column-notice{
        padding: 0 20px;
        background: rgba(0,0,0,.5);
        border-radius: 15px;
        margin-bottom: 15px;
    }
</style>
```
## 示例
![示例gif](https://github.com/CaniceZ/notice-bar-vue/blob/main/src/assets/demo.gif)