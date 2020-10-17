<template>
    <div class="promptBox">
        <headerBar></headerBar>
        <toast></toast>
    </div>
</template>

<script>
import toast from '@/components/toastPage'
import headerBar from '@/components/headerBar'
export default {
    data(){
        return {
            
        }
    },
    components: {
        toast,
        headerBar
    }
}
</script>

<style lang="less" scoped>
.promptBox{
    min-height: 100vh;
}
</style>