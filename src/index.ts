import PrIcon from './components/PrIcon/PrIcon.vue' // 引入封装好的组件

// 按需引入
export { PrIcon }

const component = [PrIcon]

export default {
  install(App: any) {
    component.forEach((item) => {
      App.component(item.__name, item)
    })
  },
}
