<template>
    <ul class="oilCards">
        <van-radio-group v-model="cardSelect">
            <li>
                <div class="top">
                    <i class="oilIcon"></i>
                    <div class="cardName">
                        <p>中国石化</p>
                        <p class="sub">加油卡</p>
                    </div>
                    <van-radio name="petrochemical">选择</van-radio>
                </div>
                <div class="bottom">6220 0666 5825 5721 123</div>
            </li>
            <li>
                <div class="top">
                    <i class="oilIcon"></i>
                    <div class="cardName">
                        <p>中国石油</p>
                        <p class="sub">加油卡</p>
                    </div>
                    <van-radio name="oil">选择</van-radio>
                </div>
                <div class="bottom">6220 0666 5825 5721 123</div>
            </li>
            <li class="addCard" @click="bindShow=true">
                <van-icon name="plus" />绑定新油卡
            </li>
        </van-radio-group>
        <van-dialog v-model:show="bindShow" title="绑定油卡" show-cancel-button>
            <div class="dialogContent">
                <p class="cardType">
                    <span :class="{active: addCardsSelect == 'petrochemical'}" @click="addCardsSelect = 'petrochemical'">
                        <i></i>
                        中石化
                    </span>
                    <span :class="{active: addCardsSelect == 'oil'}" @click="addCardsSelect = 'oil'">
                        <i></i>
                        中石油
                    </span>
                </p>
                <p class="fieldtitle">请加油卡卡号</p>
                <input type="text" class="numberInput" placeholder="请输入油卡卡号">
            </div>
            
        </van-dialog>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            cardSelect: '',
            bindShow: false,
            addCardsSelect: 'petrochemical'
        }
    }
}
</script>

<style lang="less" scoped>
    .oilCards{
        padding: 16px;
        background: #fff;
        li{
            padding: 16px;
            border-radius: 6px;
            background: #FD2F3D;
            margin-bottom: 12px;
            /deep/ .van-radio__label{
                color: #FD2F3D;
                font-size: 0.16rem;
            }
            /deep/ .van-radio .van-icon{
                border-color: #FD2F3D;;
            }
            /deep/ .van-radio__icon--checked .van-icon{
                background: #FD2F3D;
                border-color: #FD2F3D;
            }
            &:nth-child(2){
                background: #FFB024;
                /deep/ .van-radio__icon--checked .van-icon{
                    background: #FFB024;
                    border-color: #FFB024;
                }
                /deep/ .van-radio__label{
                    color: #FFB024;
                }
                /deep/ .van-radio .van-icon{
                    border-color: #FFB024;;
                }
            }
        }
        .addCard{
            background: #FAFAFA;
            font-size: 0.18rem;
            .van-icon{
                font-size: 0.18rem;
                margin-right: 6px;
            }
        }
        .top{
            display: flex;
            align-items: center;
            .oilIcon{
                width: 30px;
                height: 30px;
                background: #fff;
                border-radius: 50%;
                margin-right: 8px;
            }
            .cardName{
                color: #fff;
                p:nth-child(1){
                    font-size: 0.16rem;
                }
                .sub{
                    font-size: 0.14rem;
                }
            }
            .van-radio{
                margin-left: auto;
                background: #ffffff;
                padding: 4px 12px;
                border-radius: 20px;
            }
        }
        .bottom{
            margin-top: 0.23rem;
            text-align: center;
            color: #fff;
            font-size: 0.2rem;
            letter-spacing: 1px;
        }
    }
    .cardType{
        text-align: center;
        span{
            color: #999999;
            font-size: 0.16rem;
            &:nth-child(1){
                margin-right: 40px;
            }
             &.active{
                i{
                    border-color: #FD2F3D;
                    &::after{
                        content: '';
                        display: inline-block;
                        width: 11px;
                        height: 11px;
                        background: #FD2F3D;
                        border-radius: 50%;
                    }
                }
            }
        }
        i{
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 1px solid #999999;
            vertical-align: middle;
            position: relative;
            line-height: 14px;
            text-align: center;
           
        }
    }
    .dialogContent{
        padding: 0 30px;
    }
    .fieldtitle{
        font-size: 0.16rem;
        color: #333;
        margin-top: 20px;
        margin-bottom: 8px;
    }
    .numberInput{
        width: 100%;
        height: 33px;
        text-indent: 4px;
        border-radius: 6px;
        border: 1px solid #ccc;
        margin-bottom: 12px;
    }
    /deep/ .van-dialog__cancel{
        background: #F8F8F7;
    }
    /deep/ .van-dialog__confirm{
        color: #fff;
        background: linear-gradient(270deg, #FD4C12 0%, #F20300 100%);
    }
    /deep/ .van-dialog__header{
        padding-top: 20px;
        margin-bottom: 10px;
        font-size: 0.16rem;
    }
</style>