// 导入组件，组件必须声明 name
import NoticeBar from './notice-bar/index.tsx'

// 为组件添加 install 方法，用于按需引入
NoticeBar.install = function (Vue: any) {
    Vue.component(NoticeBar.name, NoticeBar)
}

export default NoticeBar
// declare module "vue" {
//     export interface GlobalComponents {
//         NoticeBar: typeof NoticeBar
//     }
// }