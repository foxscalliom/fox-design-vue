<template>
  <div class="f-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'f-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .f-button {
      display: inline-block;
      padding: 3px 6px;
      background: blue;
      color: #fff;
  }
</style>
