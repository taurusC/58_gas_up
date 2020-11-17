<template>
    <div>
        <oliCards></oliCards>
        <div class="amountBlock">
            <p class="title">充值面额</p>
            <ul class="amount">
                <li :class="{active: selectAmount == item}" v-for="(item) in amounts" :key="item" @click="selectAmount=item">
                    {{item}} <small>元</small>
                </li>
            </ul>
        </div>
        <payBar label="价格：" suffixLabel="优惠币" @success="paySuccess" :price="selectAmount ? (selectAmount*100) : 0" buttonText="立即抢购"></payBar>
    </div>
</template>

<script>
import oliCards from '@/components/oilCards'
import payBar from '@/components/payBar_footer'
export default {
    data(){
        return {
            amounts: [50, 100, 150, 200, 300],
            selectAmount: null
        }
    },
    methods: {
        paySuccess(){
            
        }
    },
    components: {
        oliCards,
        payBar
    }
}
</script>

<style lang="less" scoped>
    .amountBlock{
        padding: 24px 16px;
        margin-top: 8px;
        background: #fff;
        overflow: hidden;
        .title{
            font-size: 0.18rem;
            color: #333;
            margin-bottom: 16px;
        }
    }
    .amount{
        display: flex;
        flex-wrap: wrap;
        margin-left: -12px;
        padding: 0 12px;
        margin-right: -24px;
        li{
            min-width: 1.05rem;
            padding: 0.13rem 0;
            text-align: center;
            font-size: 0.24rem;
            color: #333;
            border: 1px solid rgba(151, 151, 151, 0.32);
            border-radius: 4px;
            box-sizing: border-box;
            margin-bottom: 12px;
            margin-right: 12px;
            &.active{
                color: #F20300;
                background: rgba(242, 3, 0, 0.06);
                border: 1px solid #F20300;
            }
        }
    }
</style>

<style lang="less">
    html{
        background: #fff;
    }
</style>