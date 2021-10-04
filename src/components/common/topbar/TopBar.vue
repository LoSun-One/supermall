<template>
  <div id="top-bar" :style="getStyle">
    <div class="relative">
      <div class="left" >
        <slot name="left"></slot>
      </div>
      <div class="center" >
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    defaultColor: {
      type: String,
      default: '#C82519'
    },
    defaultFontColor: {
      type: String,
      default: '#ffffff'
    },
    border: {
      type: String,
      default: '0px solid #000'
    }
  },
  computed:{
    getStyle:function (){
      return {background:this.defaultColor,color:this.defaultFontColor,borderBottom:this.border}
    },
  }
}
</script>

<style scoped>
#top-bar {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 45px;
  text-align: center;
  line-height: 44px;
}
.relative {
  position: relative;
}
.left {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 40px;
}
.center {
  position: absolute;
  left: 40px;
  top: 0px;
  right:40px;
  display: flex;
}
.right {
  position: absolute;
  right:0px;
  top:0px;
  width: 40px;
}


</style>