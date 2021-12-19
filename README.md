# fox-design-vue

## 安装
```
npm install --save fox-design-vue
```
## 使用
main.js
```
import foxDesignVue from 'fox-design-vue'
import 'fox-design-vue/lib/fox.css'
Vue.use(foxDesignVue)
```
页面
```
<fox-button type="default">默认按钮</fox-button>
<fox-button type="primary">主要按钮</fox-button>
<fox-button type="danger">危险按钮</fox-button>
<fox-button type="warning">警告按钮</fox-button>
```
### 测试
```
yarn serve
```

### 构建测试文档
```
yarn run build
```

### 编译组件库
```
yarn lib
```
### 发布
```
npm publish  
```