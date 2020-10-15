<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="#F20300" inactive-color="#999999" @change="tabBarChange">
            <van-tabbar-item name="/home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item name="/shop" icon="shop">商场</van-tabbar-item>
            <van-tabbar-item name="/mine" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default{
    data(){
        return {
            active: "/home"
        }
    },
    methods: {
        tabBarChange(index){
            this.$router.push({path: index})
        }
    }
}
</script>