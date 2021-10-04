<template>
  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  height: 49px;
  background: #f6f6f6;
  text-align: center;
  font-size: 13px;
  box-shadow: 0px -1px 10px #BFBFBF;
}
</style>