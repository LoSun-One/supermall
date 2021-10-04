<template>
<div class="box-wrapper">
  <ul>
    <li class="list-item"><img src="~assets/img/wrapper/新品.svg" alt=""><span>新品</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/充值中心.svg" alt=""><span>充值中心</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/服饰.svg" alt=""><span>服饰</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/母婴.svg" alt=""><span>母婴</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/水果.svg" alt=""><span>水果</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/爆款.svg" alt=""><span>爆款</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/生活缴费.svg" alt=""><span>生活缴费</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/电脑平板.svg" alt=""><span>电脑平板</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/美食.svg" alt=""><span>美食</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/酒店.svg" alt=""><span>酒店</span></li>
    <li class="list-item"><img src="~assets/img/wrapper/新品.svg" alt=""><span>新品</span></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "BoxWrapper"
}
</script>

<style scoped>
.box-wrapper {
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  overflow: hidden;
}
.box-wrapper ul{
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-content: center;

}
.box-wrapper ul .list-item {
  width: 20%;
  height: 75px;
  list-style: none;
  text-align: center;
  font-size: 13px;
  /*//border: 1px solid #f6f6f6;*/
}

.box-wrapper ul .list-item img{
  width: 70%;
}

.box-wrapper ul .list-item span{
  display: block;
}




</style>