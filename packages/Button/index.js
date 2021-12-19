// 导入组件，组件必须声明 name
import FButton from './src'


// 为组件提供 install 安装方法，供按需引入
FButton.install = function (Vue) {
  Vue.component(FButton.name, FButton)
}

// 默认导出组件
export default FButton