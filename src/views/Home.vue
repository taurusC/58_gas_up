<template>
  <div class="home">
    <div class="swipeBox">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerImages" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="flexBox middleBtn">
      <div>
        <span @click="$router.push({name: 'packageList'})"><van-icon name="notes-o"/></span>
        <p class="text">优惠套餐</p>
      </div>
      <div>
        <span><van-icon name="balance-pay"/></span>
        <p class="text">油卡优惠充值</p>
      </div>
      <div>
        <span><van-icon name="card"/></span>
        <p class="text">领取油卡</p>
      </div>
    </div>
    
    <!-- 新人模块 -->
    <div>
      <h2 class="blockTitle">新用户专享</h2>
      <newBlock></newBlock>
    </div>

    <h2 class="blockTitle">优惠套餐</h2>
    <offerList @select-package="selecPackageHandler"></offerList>
  </div>
</template>

<script>
import newBlock from '@/components/newPerf'
import offerList from '@/components/offerList'
export default {
  name: 'Home',
  data(){
    return{
      bannerImages: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ], 
      
    }
  },
  components: {
    newBlock,
    offerList
  },
  created(){
    // setInterval(()=>{
    //   // this.currentRate++
    //   console.log(this.percent)
    // }, 2000)
  },
  methods: {
    selecPackageHandler(){
      console.log(123213123)
      this.$router.push({name: 'packageList'});
    }
  }
}
</script>

<style lang="less" scoped>
  @mainColor: #333333;
  @subColor: #666666;
  .home{
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    color: @mainColor;
    padding: 0 0.2rem;
    box-sizing: border-box;
    text-align: left;
    padding-bottom: 100px;
    &::after{
      content: '';
      position: absolute;
      width: 120%;
      height: 160px;
      left: -10%;     //椭圆左边隐藏10%，右边隐藏10%
      top: 0;
      border-radius: 0 0 50% 50%;  //左上角，右上角，右下角，左下角
      background: linear-gradient(310deg, #FD4C12 0%, #F20300 100%);  
    }
  }
  .swipeBox{
    width: 100%;
    height: 1.57rem;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    margin-top: 70px;
    max-height: 260px;
    .van-swipe{
      width: 100%;
      height: 100%;
      box-shadow: 0 0 6px 0px rgba(0,0,0,.2);
      border-radius: 10px;
    }
    img{
      height: 100%;
      width: 100%;
    }
  }
  .flexBox{
    display: flex;
  }
  .middleBtn{
    justify-content: space-around;
    margin: 0.33rem 0;
    >div{
      flex: 1;
    }
    .van-icon{
      color: #ffffff;
      font-size: 0.26rem;
      vertical-align: middle;
    }
    .text{
      text-align: center;
      font-size: 0.13rem;
      color: @mainColor;
      margin-top: 10px;
    }
    span{
      display: block;
      margin: 0 auto;
      width: 0.49rem;
      height: 0.49rem;
      line-height: 0.49rem;
      border-radius: 50%;
      text-align: center;
      background: linear-gradient(132deg, #FD4C12 0%, #F20300 100%);
    }
  }
  .blockTitle{
    font-size: 0.21rem;
    margin-top: 0.34rem;
    margin-bottom: 0.15rem;
  }
  .red{
    color: #F20300;
  }
  .grayRed{
    color: #924E2B;
  }
  
</style>
