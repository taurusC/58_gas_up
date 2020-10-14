<template>
    <div>
        <van-tabbar v-model="active" active-color="#F20300" inactive-color="#999999">
            <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item icon="shop">商场</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default{
    data(){
        return {
            active: '1'
        }
    }
}
</script>