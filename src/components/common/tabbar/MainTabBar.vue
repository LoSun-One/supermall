<template>
  <TabBar>
    <tab-bar-item path="/home">
      <template v-slot:icon>
        <img src="~assets/img/首页-线性.svg"/>
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/首页-面性.svg"/>
      </template>
      <template v-slot:txt>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <template v-slot:icon>
        <img src="~assets/img/分类-线性.svg"/>
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/分类-面性.svg"/>
      </template>
      <template v-slot:txt>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:icon>
        <img src="~assets/img/购物车-线性.svg"/>
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/购物车-面性.svg"/>
      </template>
      <template v-slot:txt>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:icon>
        <img src="~assets/img/我的-线性.svg"/>
      </template>
      <template v-slot:icon-active>
        <img src="~assets/img/我的-面性.svg"/>
      </template>
      <template v-slot:txt>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from "common/tabbar/TabBar";
import TabBarItem from "common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
img{
width: 100%;
}

</style>