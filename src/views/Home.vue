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
        <span><van-icon name="notes-o"/></span>
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
      <div class="newBlock">
        <p class="title">新用户专享优惠</p>
        <span class="big">1200</span>
        <small class="red">到账</small>
        <span class="balance grayRed">484.00</span>
        <small class="grayRed">余额</small>
        <i class="btn red">立即充值</i>
        <br/>
        <van-tag color="#F20300" plain>实时到账</van-tag>
        <van-tag color="#F20300" plain>限购1次</van-tag>
        <span class="fixRight">7.5折</span>
      </div>
    </div>

    <h2 class="blockTitle">优惠套餐</h2>
    <ul class="preferentials">
      <li>
        <span class="tag">4.8折</span>
        <span class="preferentialTitle">优惠套餐一</span>
        <div class="preferentialInfo flexBox">
          <div>
            <p>
              <span class="price red">522</span> 
              <small class="red">元</small>
            </p>
            <span class="sub">套餐售价</span>
          </div>
          <div>
            <p><span class="price">600</span></p>
            <span class="sub">套餐余额</span>
          </div>
          <div>
            <van-circle
              v-model:currentRate="currentRate"
              :rate="rate"
              :speed="100"
              :text="text"
              size="0.56rem"
              layer-color="#F20300"
              stroke-width="60"
            />
            <van-checkbox v-model="checkVlaue" icon-size="0.14rem" checked-color="#F20300">选我</van-checkbox>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      bannerImages: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ], 
      currentRate: 80,
      checkVlaue: '',
      rate: 80
    }
  },
  computed: {
    text(){
      return `以抢${this.currentRate}%`
    }
  },
  components: {
    
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
  .newBlock{
    padding: 0.19rem 0.15rem;
    background: #FFF1E7;
    border-radius: 10px;
    margin-top: .2rem;
    position: relative;
    overflow: hidden;
    .van-tag{
      margin-right: 10px;
      margin-top: 10px;
    }
    .title{
      color: #924E2B;
      font-size: 0.16rem;
      font-weight: bold;
      margin-bottom: 0.09rem;
    }
    .big{
      color: #F20300;
      font-size: 0.34rem;
      margin-right: 4px;
      font-weight: bold;
    }
    .balance{
      font-size: 0.18rem;
      margin-left: 10px;
      font-weight: bold;
      margin-right: 4px;
    }
    .btn{
      padding: 0.1rem 0px;
      border-radius: 50px;
      background: #fff;
      cursor: pointer;
      font-style: normal;
      display: inline-block;
      text-align: center;
      width: 0.9rem;
      float: right;
      font-weight: bold;
      font-size: 0.14rem;
    }
    .fixRight{
      background:  #FD4711;
      color: #FFF;
      position: absolute;
      right: -0.4rem;
      top: -0.18rem;
      transform: rotate(45deg);
      width: 1rem;
      line-height: 0.9rem;
      text-align: center;
      height: 0.6rem;
      font-weight: bold;
      font-size: 0.16rem;
    }
  }
  .preferentials{
    li{
      padding: 0.19rem;
      background: #fff;
      border-radius: 10px;
    }
    .tag{
      border-radius: 0.05rem;
      background: linear-gradient(270deg, #FD4C12 0%, #F20300 100%);
      font-size: 0.1rem;
      color: #fff;
      padding: 0.02rem 0.06rem;
      vertical-align: middle;
    }
    .preferentialTitle{
      font-weight: bold;
      margin-left: 10px;
      font-size: 0.16rem;
    }
    .preferentialInfo{
      justify-content: space-around;
      margin-top: 0.2rem;
      >div{
        flex: 1;
        position: relative;
        &:last-child{
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-top: -14px;
        }
      }
      .van-checkbox{
        background: #F20300;
        border-radius: 100px;
        // padding: 2px 0;
        width: 0.82rem;
        justify-content: center;
        position: absolute;
        bottom: -2px;
      }
    }
    .price{
      font-size: 0.26rem;
    }
    .sub{
      font-size: 0.13rem;
      color: #999;
    }
  }
</style>

<style lang="less">
  .preferentialInfo{
    .van-checkbox__icon--round .van-icon{
      border-color: #fff !important;
      background-color: #fff !important;
    }
    .van-checkbox__icon--checked .van-icon{
      color:  #F20300 !important;
    }
    .van-checkbox__label{
      color: #fff;
      font-size: 0.13rem;
    }
  }
</style>
