<template>
    <div id='body'>
       <div class="banner">
            <div v-bind:style="{background: 'url(' + bannerUrl + ') no-repeat center', backgroundSize: 'cover'}"></div>
            <div></div>
            <div>“爱家有约”家庭幸福才是真的幸福</div>
        </div>
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
            bannerUrl: require('./images/banner1.jpg'),
            dl_img: [ // 产品
                  // 第1个
                 {url: require('./images/dl1.jpg'), name: '家财综合保障卡', age: '无限制', illness_text: '房屋主体损失保险', illness: '50万元', accident_text: '室内装修损失保险', accident: '10万元', money: '200', productId: 'propertyInsurance_product1'},
                 // 第2个
                 {url: require('./images/dl2.jpg'), name: '平安个人银行卡盗刷保险', age: '18-80周岁的用卡人群', illness_text: '个人银行卡盗刷保险', illness: '10万元', accident_text: '个人银行卡盗刷保险', accident: '20万', money: '60', productId: 'propertyInsurance_product2'},
                 // 第3个
                 {url: require('./images/dl3.jpg'), name: '利宝个人资金账户安全险', age: '18-65周岁', illness_text: '', illness: '', accident_text: '', accident: '', money: '30', productId: 'propertyInsurance_product3'},
                 // 第4个
                 {url: require('./images/dl4.jpg'), name: '利宝“福满家”家庭水电气综合保险', age: '无限制', illness_text: '燃气事故意外伤害身故及伤残', illness: '5万元', accident_text: '燃气事故第三者财产损失', accident: '5万元', money: '40', productId: 'propertyInsurance_product4'}
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
            // window.location.href = 'productDetail.html?index=4&productId=' + id;
        }
    }
}
</script>