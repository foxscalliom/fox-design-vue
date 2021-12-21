<template>
  <transition name="fade">
    <div class="message" :class="type" v-if="visible">
      <i class="fox" :class="[
      'fox-' + type,type
      ]"></i>
      <div class="content">
        {{ content }}
        <i
          v-if="hasClose"
          class="fox fox-close"
          @click="visible = false"
        ></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "fox-message",
  data() {
    return {
      content: "默认提示",
      time: 3000,
      visible: false,
      type: "info", //'success','warning','error'
      hasClose: false,
    };
  },
  mounted() {
    this.close();
  },
  methods: {
    close() {
      window.setTimeout(() => {
        this.visible = false;
      }, this.time);
    },
  },
};
</script>
<style lang="less" scoped>
.message {
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;
  min-width: 380px;
  font-size: 14px;
}
.fade-enter-active {
  animation: fade-in 0.6s ease;
}
.fade-leave-active {
  animation: fade-out 0.6s ease;
}
@keyframes fade-in {
  0% {
    top: -40px;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 100%;
  }
}
@keyframes fade-out {
  0% {
    top: 20px;
    opacity: 100%;
  }
  100% {
    top: -40px;
    opacity: 0;
  }
}
.message {
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 999;
  min-width: 200px;
  height: 40px;
  transform: translateX(-50%);
  line-height: 40px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.info {
  background-color: #eef2fb;
  color: #909399;
}
.success {
  background-color: #f2f9ec;
  color: #67C23A;
}
.warning {
  background-color: #fcf6ed;
  color: #E6A23C;
}
.error {
  background-color: #fcf0f0;
  color: #F56C6C;
}
</style>