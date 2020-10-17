<template>
    <div class="banlanceBox">
        <div class="top">
            <headerBar title="优惠余额"></headerBar>
        </div>
        
    </div>
</template>

<script>
import headerBar from '@/components/headerBar'
export default {
    data(){
        return {
            
        }
    },
    components: {
        headerBar
    }
}
</script>

<style lang="less" scoped>
    .banlanceBox{
        .top{
            width: 100%;
            height: 2.5rem;
        }
    }
</style>