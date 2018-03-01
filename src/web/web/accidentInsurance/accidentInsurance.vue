<template>
    <div id='body'>
        <div class="banner">
            <div v-bind:style="{background: 'url(' + bannerUrl + ') no-repeat center', backgroundSize: 'cover'}"></div>
            <div></div>
            <div>杜绝不了意外的话，就请给予我们破晓的勇气</div>
        </div>
        <!--列表-->
        <div class="dl_img">
            <div class="center">
                <dl v-for="item in dl_img">
                    <dt>
                        <img :src="item.url" alt="">
                    </dt>
                    <dd>
                        <p class="ellip" v-text="item.name"></p>
                        <p></p>
                        <p class="ellip">投保年龄：<span v-text="item.age"></span></p>
                        <p><span v-text="item.illness_text"></span>：<span v-text="item.illness"></span></p>
                        <p ><span v-text="item.accident_text"></span>：<span v-text="item.accident"></span></p>   
                        <div>
                            <div class="fl">
                                <span>￥ <span v-text="item.money"></span> 起</span>
                            </div>
                            <div class="fr" @click="href_url(item.productId)"><a href="javascript:;">去看看</a></div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            bannerUrl: require('./images/banner.jpg'),
            dl_img: [ // 产品
                 // 第一个
                 {url: require('./images/dl1.jpg'), name: '平安车驾意2代', age: '18-65周岁', illness_text: '驾驶机动车辆意外伤害烧烫伤', illness: '10万元', accident_text: '驾驶机动车辆意外伤害医疗', accident: '2万元', money: '100', productId: 'accidentInsurance_product1'},
                 // 第2个
                 {url: require('./images/dl2.jpg'), name: '平安庆生卡', age: '0-18周岁', illness_text: '意外伤害身故保险', illness: '5万元', accident_text: '个人医疗保险', accident: '5000元', money: '30', productId: 'accidentInsurance_product2'},
                 // 第3个
                 {url: require('./images/dl3.jpg'), name: '畅享自驾 - 安联境内自驾旅行保险计划', age: '18-70周岁', illness_text: '自驾车意外身故及伤残', illness: '50万元', accident_text: '自驾车意外伤害节假日补偿', accident: '20万元', money: '10', productId: 'accidentInsurance_product3'},
                 // 第4个
                 {url: require('./images/dl4.jpg'), name: '熊宝保-安联个人保障计划', age: '60天-17周岁', illness_text: '意外身故及伤残', illness: '5万元', accident_text: '公共场所个人责任', accident: '5万元', money: '30', productId: 'accidentInsurance_product4'},
                 // 第5个
                 {url: require('./images/dl5.jpg'), name: '安享无忧 - 安联个人意外保障计划', age: '18-65周岁', illness_text: '意外身故及伤残', illness: '50万元', accident_text: '意外医疗（免赔额100,100%赔付）', accident: '8000元', money: '45', productId: 'accidentInsurance_product5'},
                 // 第6个
                 {url: require('./images/dl6.jpg'), name: '利宝驾乘无忧', age: '出生满1岁-60周岁', illness_text: '意外身故及伤残保障', illness: '1万元', accident_text: '驾乘时意外身故及伤残保障', accident: '29万元', money: '200', productId: 'accidentInsurance_product6'}
            ]
        }
    },
    created () {
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
        href_url (id) {
            console.log('a')
            // window.location.href = 'productDetail.html?index=5&productId=' + id;
        }
    }
}
</script>