<template>
    <div class="wrap">
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
    .wrap{
        height: 100vh;
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
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
</style>