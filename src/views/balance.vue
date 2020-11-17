<template>
    <div class="banlanceBox">
        <div class="top">
            <!-- <headerBar title="优惠余额"></headerBar> -->
            <p>余额</p>
            <div class="block">
                <span class="number">1288.00</span>优惠币
                <span class="bth">充值油卡</span>
            </div>
        </div>
        <p class="tips"><van-icon name="info-o" />您还没有优惠余额，可立即购买优惠套餐</p>
        <span class="buyBtn">购买优惠套餐</span>
    </div>
</template>

<script>
// import headerBar from '@/components/headerBar'
export default {
    data(){
        return {
            
        }
    },
    components: {
        // headerBar
    }
}
</script>

<style lang="less" scoped>
    .banlanceBox{
        background: #fff;
        .top{
            width: 100%;
            height: 180px;
            background: linear-gradient(315deg, #FD4C12 0%, #F20300 100%);
            color: #fff;
            padding: 20px 17px;
            box-sizing: border-box;
            .block{
                position: relative;
                margin-top: 40px;
            }
            p:nth-child(1){
                font-size: 0.15rem;
            }
            .number{
                font-size: 0.52rem;
                margin-right: 8px;
            }
            .bth{
                font-size: 0.15rem;
                color: #F9310B;
                display: inline-block;
                padding: 8px 14px;
                background: #FFFFFF;
                border-radius: 20px;
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
        .tips{
            font-size: 0.15rem;
            color: #333;
            text-align: center;
            margin-top: 56px;
            .van-icon{
                color: #F20300;
                vertical-align: middle;
                font-size: 0.16rem;
                margin-right: 4px;
                margin-bottom: 2px;
                font-weight: bold;
            }
        }
        .buyBtn{
            font-size: 0.15rem;
            color: #F9310B;
            display: block;
            width: fit-content;
            padding: 8px 14px;
            background: rgba(242, 3, 0, 0.06);
            border-radius: 20px;
            margin: 40px auto;
            margin-bottom: 0px;
            font-weight: bold;
        }
    }
    
</style>
<style lang="less">
    .van-nav-bar{
        background: #F20300;
        .van-icon{
            color: #fff;
        }
        .van-nav-bar__title{
            color: #fff;
        }
    }
</style>