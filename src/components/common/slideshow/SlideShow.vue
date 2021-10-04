<template>
  <div class="slide-show">
    <img :src="getUrl"/>
    <ul>
      <li v-for="(n,k) in img.length" :style="{background:getIndex===k ? '#fa2c19':''}" @click="liClick(k)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  data() {
    return {
      indexImg: 0,
      img: [
        {path: '1.jpg'},
        {path: '2.jpg'},
        {path: '3.jpg'},
        {path: '4.jpg'}
      ],
      timer: '',
      time: 3000,
      touch: {},
      currentPlay: 'red',
      percent: 0
    }
  },
  computed: {
    getUrl() {
      return require("assets/img/" + this.img[this.indexImg].path)
    },
    getIndex() {
      return this.indexImg
    }
  },
  mounted() {
    this.timer = setInterval(this.startTimer, this.time);
  },
  methods: {
    liClick(index) {
      this.indexImg = index
    },
    startTimer() {
      this.indexImg++
      if (this.indexImg >= this.img.length) {
        this.indexImg = 0
      }
    },
    stoptimer() {
      clearInterval(this.timer)
    },


  }
}
</script>

<style scoped>

.slide-show {
  position: absolute;
  top: 25px;
  left: 15px;
  right: 15px;
  height: 200px;
}

.slide-show img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.slide-show ul {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 20px;
  margin: 0px;
  padding: 0px;
  display: -webkit-flex;
  justify-content: center;
}

.slide-show ul li {
  display: inline-block;
  width: 8px;
  height: 8px;
  list-style: none;
  border-radius: 50%;
  background: #666;
  margin: 3px;
}

</style>