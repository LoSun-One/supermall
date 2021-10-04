<template>
  <div class="home">
    <div class="slide">
      <SlideShowBackground>
        <SlideShow></SlideShow>
      </SlideShowBackground>
    </div>
<!--菜单-->
    <BoxWrapper></BoxWrapper>
<!--    秒杀-->
    <Seckill></Seckill>
<!--like-->
    <Floor></Floor>
<!--    顶部导航栏-->
    <TopBar>
      <template v-slot:left>sss</template>
      <template v-slot:center>
        <a href="">首页</a>
        <a href="">详情</a>
      </template>
      <template v-slot:right>s</template>
    </TopBar>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "common/topbar/TopBar"
import SlideShow from "common/slideshow/SlideShow"
import SlideShowBackground from 'common/slideshow/SlideShowBackground'
import BoxWrapper from "views/home/BoxWrapper";
import Seckill from "views/home/Seckill";
import Floor from "common/floor/Floor";

export default {
  name: 'Home',
  components: {
    TopBar,
    SlideShow,
    SlideShowBackground,
    BoxWrapper,
    Seckill,
    Floor
  }
}
</script>

<style>
.home {
  margin-top: 45px;
}
.slide {
  height:230px;
  width: 100%;
  position: relative;
}
a {
  margin:0px auto;
}
</style>
