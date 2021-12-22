<template>
  <transition name="fade" appear>
      <div class="message" :class="type" v-if="visible">
        <div class="box">
          <i class="fox fox-icon" :class="['fox-' + type, type]"></i>
          <div class="content">{{ content }}</div>
        </div>
        <i v-if="hasClose" class="fox fox-close" @click="visible = false"></i>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'fox-message',
  data() {
    return {
      content: '默认提示', // 文本内容
      time: 3000, // 默认时间
      visible: false, // 是否显示
      type: 'info', //'success','warning','error', 'info'
      hasClose: false, // 是否显示关闭图标
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
    position: absolute;
    top: 20px;
    left: 50%;
    z-index: 999;
    min-width: 200px;
    transform: translateX(-50%);
    padding: 8px 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    font-size: 14px;
    .box {
      display: flex;
      align-items: center;
      padding: 2px 0;
      text-align: left;
      .content {
        padding-right: 15px;
      }
      .fox-icon {
        padding-right: 10px;
      }
    }
    .fox-close {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #c0c5cf;
    }
  }
  .info {
    background-color: #eef2fb;
    color: #909399;
  }
  .success {
    background-color: #f2f9ec;
    color: #67c23a;
  }
  .warning {
    background-color: #fcf6ed;
    color: #e6a23c;
  }
  .error {
    background-color: #fcf0f0;
    color: #f56c6c;
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
</style>
