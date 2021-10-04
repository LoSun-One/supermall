<template>
  <div id="slide-show-background">
<slot></slot>
  </div>
</template>

<script>
export default {
  name: "SlideShowBackground"
}
</script>

<style scoped>
#slide-show-background {
  height: 100px;
  width: inherit;
  background: #C82519;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 80%;
}


</style>