<template>
    <van-list
        v-model:loading="loading"
        v-model:error="error"
        error-text="请求失败，点击重新加载"
        @load="loadPreferents"
        :finished="finished"
        finished-text="没有更多了"
        class="preferentials"
    >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <li v-for="i in vertualIndex" :key="i">
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
                    v-model:currentRate="percent"
                    :text="text"
                    :rate="rate"
                    size="0.56rem"
                    layer-color="#ebedf0"
                    color="#F20300"
                    stroke-width="60"
                />
                <van-checkbox v-model="checkVlaue" icon-size="0.14rem" checked-color="#F20300" @click="selectPackage">选我</van-checkbox>
            </div>
            </div>
        </li>
    </van-list>
</template>

<script>
export default {
    name: 'offerList',
    data(){
        return{
            percent: 0,
            rate: 86,
            checkVlaue: '',
            vertualIndex: 0,
            loading: false,
            finished: false,
            error: false
        }
    },
    computed: {
        text(){
            return `以抢${this.rate}%`
        }
    },
    methods: {
        loadPreferents(){
            if(this.vertualIndex > 10){
                this.finished = true;
                return
            }
            this.loading = true;
            setTimeout(()=>{
                this.vertualIndex+=2;
                this.loading = false;
            }, 2000)
        },
        selectPackage(){
            this.$emit('select-package')
        }
    }
}
</script>

<style lang="less" scoped>
  .preferentials{
    li{
      padding: 0.19rem;
      background: #fff;
      border-radius: 10px;
      margin-bottom: 0.2rem;
      list-style: none;
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
        display: flex;
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