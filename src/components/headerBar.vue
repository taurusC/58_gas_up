<template>
    <div class="headerBar">
        <van-nav-bar :title="title" left-arrow :fixed='true' @click-left="onClickLeft">
            <template #right>
                <slot name="right"></slot>
                <!-- <van-icon name="search" size="18" /> -->
            </template>
        </van-nav-bar>
    </div>
    
</template>

<script>
export default {
    props: {
        title: {
            default: '默认标题',
            type: String
        },
    },
    data(){
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            window.history.back()
        }
    }
}
</script>

<style lang="less" scoped>
    .headerBar{
        height: 46px;
    }
</style>