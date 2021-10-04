<template>
<div class="seckill">
  <div class="seckill-title">
    <span>限时秒杀</span>
    <span>更多<i></i> </span>
  </div>
  <div class="seckill-list">
    <ul>
      <li><img src="~assets/img/山海经.jpg" alt=""><span>160</span></li>
      <li><img src="~assets/img/山海经.jpg" alt=""><span>160</span></li>
      <li><img src="~assets/img/山海经.jpg" alt=""><span>160</span></li>
      <li><img src="~assets/img/山海经.jpg" alt=""><span>160</span></li>
      <li><img src="~assets/img/山海经.jpg" alt=""><span>160</span></li>
    </ul>

  </div>
</div>
</template>

<script>
export default {
  name: "Seckill"
}
</script>

<style scoped>
.seckill {
  height: 100px;
  box-sizing: border-box;
  margin: 0 10px;
  border-radius: 10px;
  background: rgba(255,255,255,1);
  line-height: 30px;
  overflow: hidden;
}


.seckill .seckill-title span:nth-child(1){
   margin-left: 20px;
}
.seckill .seckill-title span:nth-child(2){
  float: right;
  margin-right: 33px;
  font-size: 10px;
  position: relative;
}
.seckill .seckill-title span:nth-child(2) i {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url("../../assets/img/更多.png") no-repeat;
  background-size: cover;
 position: absolute;
  top:8px;
  right:-16px;
}
.seckill-list {
  height: 65px;
}
.seckill-list li {
  width: 20%;
  float: left;
  text-align: center;
  line-height: 15px;
  color:#C82519;
}
.seckill-list li span::before{
  content: "￥";
  color:#C82519;
  font-size: 8px;
}

.seckill-list li img{
  width: 70%;
}


</style>