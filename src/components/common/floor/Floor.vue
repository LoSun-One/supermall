<template>
<div class="floor">
  <div class="floor-item">
      <div class="floor-item-content">
        <img src="~assets/img/item.png" alt="">
        <div class="floor-info">
          坚果斤斤计较经济界经济2将将解决将将将将将经济将将坚经济2将将解决将将将将将经济将将
        </div>
        <div class="floor-tag">
          <a href="">坚果斤斤计</a><a href="">坚果斤斤计</a><a href="">坚果斤斤计</a>
        </div>
      </div>
  </div>
  <div class="floor-item">
    <div class="floor-item-content">
      <img src="~assets/img/item.png" alt="">
      <div class="floor-info">
        坚果斤斤计较经济界经济2将将解决将将将将将经济将将坚经济2将将解决将将将将将经济将将
      </div>
      <div class="floor-tag">
        <a href="">坚果斤斤计</a><a href="">坚果斤斤计</a><a href="">坚果斤斤计</a>
      </div>
    </div>
  </div>
  <div class="floor-item">
    <div class="floor-item-content">
      <img src="~assets/img/item.png" alt="">
      <div class="floor-info">
        坚果斤斤计较经济界经济2将将解决将将将将将经济将将坚经济2将将解决将将将将将经济将将
      </div>
      <div class="floor-tag">
        <a href="">坚果斤斤计</a><a href="">坚果斤斤计</a><a href="">坚果斤斤计</a>
      </div>
    </div>
  </div>
  <div class="floor-item">

  </div>
  <div class="floor-item">

  </div>
</div>
</template>

<script>
export default {
  name: "Floor"
}
</script>

<style scoped>
.floor {
  width: 100%;
  padding:30px 5px 80px;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  font-size: 13px;
}

.floor-item {
  width: 50%;
  height: 250px;
  box-sizing: border-box;
  background: #f6f6f6;
  padding: 5px;
}

.floor-item-content {
  height: 100%;
  background: #ffffff;
  border-radius: 5px;

}

.floor-item-content img{
  width: 100%;
  overflow:hidden;
}
.floor-info{
  box-sizing: border-box;
  margin-top: 5px;
  padding: 0 5px;
  width: 100%;
  height: 30px;
  display: -webkit-box;

  overflow:hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
}

.floor-tag {
  box-sizing: border-box;
  margin-top: 5px;
  padding: 0 8px;
  width: 90%;
  height: 15px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
  font-size: 6px;

}

.floor-tag a {
  background: #f6f6f6;
  margin: 3px;
  border-radius: 5px;
  line-height: 15px;
}






</style>