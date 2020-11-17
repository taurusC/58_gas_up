<template>
    <div>
        <headerBar title="优惠余额"></headerBar>
        <router-view></router-view>
    </div>
</template>

<script>
import headerBar from '@/components/headerBar'
export default{
    data(){
        return {
            active: "/home"
        }
    },
    components: {
        headerBar
    },
    methods: {
        tabBarChange(index){
            this.$router.push({path: index})
        }
    }
}
</script>