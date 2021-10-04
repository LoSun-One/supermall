<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isPath" class="icon">
      <slot name="icon"></slot>
    </div>
    <div v-else class="icon">
      <slot name="icon-active"></slot>
    </div>
    <div :style="getStyle" class="txt">
      <slot name="txt"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data: function () {
    return {}
  },
  props: {
    path: {
      type: String,
      default: ''
    },
    fontcolor: {
      type: String,
      default: '#C82519'
    }
  },
  computed: {
    isPath() {
      return this.$route.path.indexOf(this.path) == -1
    },
    getStyle() {
      return !this.isPath ? {color: this.fontcolor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  padding-top: 5px;
  flex: 1;
}
.icon {
  margin:0 auto;
  width: 23px;
  height: 23px;
}
</style>