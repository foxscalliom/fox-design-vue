<template>
  <div id="app">
    <fox-button type="default">默认按钮</fox-button>
    <fox-button type="primary">主要按钮</fox-button>
    <fox-button type="danger">危险按钮</fox-button>
    <fox-button type="warning">警告按钮</fox-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>
<style lang="less" scoped>
#app {
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>