<template>
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

</template>
<script>
export default {
    data(){
        
    }
}
</script>

<style lang="less" scoped>
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
</style>

    