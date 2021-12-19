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
## 查询镜像
```
查询当前镜像地址：
	npm get registry
设置淘宝镜像：
	npm config set registry http://registry.npm.taobao.org/
设置官方npm镜像:
	npm config set registry https://registry.npmjs.org/
```
## git命令
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:foxscalliom/fox-design-vue.git
git push -u origin main
```