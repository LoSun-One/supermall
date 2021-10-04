<template>
  <router-view/>
  <MainTabBar></MainTabBar>
</template>

<script>
import MainTabBar from "common/tabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  },
}
</script>

<style>
@import "~normalize.css";
@import "assets/css/base.css";
</style>
