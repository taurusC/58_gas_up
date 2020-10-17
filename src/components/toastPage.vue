<template>
    <div>
        <van-empty :description="desc">
            <van-button round type="danger" class="bottom-button">
                按钮
            </van-button>
        </van-empty>
    </div>
</template>

<script>
    
    export default {
        props: {
            desc: {
                type: String,
                default: '描述文字'
            },
            image: {
                type: String,
                defalut: 'https://img.yzcdn.cn/vant/custom-empty-image.png'
            }
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style lang="less" scoped>
.bottom-button {
    width: 160px;
    height: 40px;
}
</style>