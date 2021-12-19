<template>
  <button
    class="fox-button"
    :disabled="disabled"
    :autofocus="autofocus"
    :class="[
      type ? 'fox-button--' + type : '',
      size ? 'fox-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "fox-button",
  props: {
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    size: String,
    type: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
*:disabled {
  cursor: not-allowed !important;
}
.fox-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-disabled {
    color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
.fox-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.fox-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.fox-button:hover,
.fox-button:focus {
  opacity: 0.8;
}
.fox-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
</style>
