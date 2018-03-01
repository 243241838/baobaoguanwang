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
                        <p><span v-text="item.illness_text"></span><span v-text="item.illness"></span></p>
                        <p ><span v-text="item.accident_text"></span><span v-text="item.accident"></span></p>   
                        <div>
                            <div class="fl">
                                <span>￥ <span v-text="item.money"></span> 起</span>
                            </div>
                            <div v-show="false" class="fr" @click="href_url(item.productId)"><a href="javascript:;">去看看</a></div>
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
                 {url: require('./images/dl1.jpg'), name: '平安驾驶人意外伤害保险ll代', age: '18-65周岁', illness_text: '保险全面，涵盖自驾保障，轻松出行，驾乘无忧', illness: '', accident_text: '', accident: '', money: '100', productId: 'accidentInsurance_product1'},
                 // 第2个
                 {url: require('./images/dl2.jpg'), name: '平安庆生卡', age: '0-18周岁', illness_text: '学生保险卡-专为学生群体设计；价格实惠，馈赠首选', illness: '', accident_text: '', accident: '', money: '88', productId: 'accidentInsurance_product2'},
                 // 第3个
                 {url: require('./images/dl3.jpg'), name: '汇保险住院宝', age: '30天-65周岁', illness_text: '超高保额，超全保障，超广覆盖，超低价格', illness: '', accident_text: '', accident: '', money: '180', productId: 'accidentInsurance_product3'},
                 // 第4个
                 {url: require('./images/dl4.jpg'), name: '平安畅游九州境内旅行保险', age: '不限年龄', illness_text: '国内旅意首选产品，责任涵盖意外伤害、急性病身故、意外伤害医疗、行李损失等', illness: '', accident_text: '', accident: '', money: '1', productId: 'accidentInsurance_product4'},
                 // 第5个
                 {url: require('./images/dl5.jpg'), name: '家财综合保障卡', age: '不限年龄', illness_text: '保费低，保障全，无论自然风险还是意外风险，都可保障', illness: '', accident_text: '', accident: '', money: '200', productId: 'accidentInsurance_product5'},
                 // 第6个
                 {url: require('./images/dl6.jpg'), name: '平安个人银行卡盗刷保险', age: '18-65周岁', illness_text: '适用所有借记卡、信用卡，提供挂失服务，报销挂失费用；全年保障无忧', illness: '', accident_text: '', accident: '', money: '60', productId: 'accidentInsurance_product6'}
            ]
        }
    },
    created () {
        storage.set('prevPage', '2');
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