// 导入组件，组件必须声明 name
import FoxButton from './src'


// 为组件提供 install 安装方法，供按需引入
FoxButton.install = function (Vue) {
  Vue.component(FoxButton.name, FoxButton)
}

// 默认导出组件
export default FoxButton