<template>
  <div id="app">
    <!-- <div>
      <fox-button type="default">默认按钮</fox-button>
      <fox-button type="primary">主要按钮</fox-button>
      <fox-button type="danger">危险按钮</fox-button>
      <fox-button type="warning">警告按钮</fox-button>
    </div> -->
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    this.$foxMessage({
      content: "这是一个success",
      time: 300000,
      type: "success",
      hasClose: true,
    });
  },
};
</script>
<style>
#app {
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
