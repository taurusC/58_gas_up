<template>
    <van-submit-bar :price="price" :label="label" :loading="loading" currency="" :suffix-label="suffixLabel" :button-text="buttonText" @submit="onSubmit" />
</template>

<script>
export default {
    props: {
        price: {
            default: 0,
            type: Number
        },
        label: {
            default: '价格',
            type: String
        },
        suffixLabel: {
            default: '',
            type: String
        },
        buttonText: {
            default: '确认支付',
            type: String
        }
    },
    data(){
        return {
            loading: false
        }
    },
    methods: {
        onSubmit(){
            this.loading = true
            setTimeout(()=>{
                this.$toast('购买成功')
                this.loading = false
                this.$emit('success')
            }, 1500)
        }
    }
}
</script>