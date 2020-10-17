<template>
    <div class="packageBlock">
        <headerBar title="套餐列表"></headerBar>
        <newBlock></newBlock>
        <offerList></offerList>
        <payBar label="实付款：" suffix-label="实时到账" @success="paySuccess"></payBar>
    </div>
</template>

<script>
    import newBlock from '@/components/newPerf'
    import offerList from '@/components/offerList'
    import headerBar from '@/components/headerBar'
    import payBar from '@/components/payBar_footer'
    export default {
        data(){
            return {
                loading: false
            }
        },
        components: {
            newBlock,
            offerList,
            headerBar,
            payBar
        },
        methods: {
            paySuccess(){
                // alert(123412)
                console.log(1235455)
                this.$router.replace({name: 'prompt'})
            }
        }
    }
</script>

<style lang="less" scoped>
    .packageBlock{
        min-height: 100vh;
        padding: 0 0.2rem;
        padding-bottom: 60px;
    }
    .newBlock{
        margin-top: 60px;
        margin-bottom: .2rem;
    }
    .van-submit-bar{
        border-top: 1px solid #d8d8d8;
    }
</style>