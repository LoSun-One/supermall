<template>
  <div class="sort">
    <div class="sort-main">
      <SortRoot></SortRoot>
    </div>



  <TopBar defaultColor="#fff" defaultFontColor="#000">
    <template v-slot:left >

    </template>
    <template v-slot:center>
        <a>分类</a>
    </template>
    <template v-slot:right >

    </template>
  </TopBar>
</div>
</template>

<script>

import TopBar from "common/topbar/TopBar";
import SortRoot from "views/sort/SortRoot";

export default {
  name: "Sort",
  components:{
    TopBar,
    SortRoot
  }
}
</script>

<style scoped>
.sort a{
  flex: 1;
}
.sort-main {
  margin-top: 44px;
  height: 900px;
  border-top:2px solid #666666;
  background: #fff;
}
</style>