<template>
    <div id='body'>
        <div class="banner" v-bind:style="{background: 'url(' + bannerUrl + ') no-repeat center', backgroundSize: 'cover'}">
            <div></div>
            <div v-text="bannerText"></div>
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
            bannerUrl: '',
            bannerText: '',
            l1: '不负春光，不负卿',
            l2: '温暖保障，守护全家',
            list: { // 产品
                // 专题一
                l1: [
                  // 第一个
                  {url: require('./images/dl1.jpg'), name: '平安畅游九州境内旅行计划', age: '18-65周岁', illness_text: '意外伤害住院津贴', illness: '10万元', accident_text: '行李物品损失保障', accident: '3000元', money: '1', productId: 'hot1'},
                  // 第二个
                 {url: require('./images/dl2.jpg'), name: '安联国际旅行保险（除尊享计划外）', age: '出生满60天至90周岁', illness_text: '意外伤害住院津贴', illness: '30万元', accident_text: '公共交通意外身故及伤残', accident: '10万元', money: '60', productId: 'special_list3_product2'},
                 // 第3个
                 {url: require('./images/dl3.jpg'), name: '延乐保（境外版）-安联境外航延险计划', age: '18-90周岁', illness_text: '航空意外身故及伤残', illness: '30万元', accident_text: '航空意外身故及伤残(超过4小时延误)', accident: '200元', money: '20', productId: 'special_list3_product3'},
                 // 第4个
                 {url: require('./images/dl4.jpg'), name: '平安车驾意2代', age: '18-65周岁', illness_text: '驾驶机动车辆意外伤害烧烫伤', illness: '10万元', accident_text: '驾驶机动车辆意外伤害医疗', accident: '2万元', money: '100', productId: 'special_list3_product4'},
                 // 第5个
                 {url: require('./images/dl5.jpg'), name: '畅享自驾 - 安联境内自驾旅行保险计划', age: '18-70周岁', illness_text: '自驾车意外身故及伤残', illness: '50万元', accident_text: '自驾车意外伤害节假日补偿', accident: '20万元', money: '10', productId: 'special_list3_product5'},
                 // 第6个
                 {url: require('./images/dl6.jpg'), name: '利宝驾乘无忧', age: '出生满1岁-60周岁', illness_text: '意外身故及伤残保障', illness: '1万元', accident_text: '驾乘时意外身故及伤残保障', accident: '29万元', money: '200', productId: 'special_list3_product6'}
                ],
                // 专题二
                l2: [
                  // 第1个
                  {url: require('./images/j1.jpg'), name: '平安E生保（2017版）', age: '18周岁以上具有完全民事行为能力的自然人', illness_text: '一般医疗保险金', illness: '300万元', accident_text: '恶性肿瘤医疗保险金', accident: '300万元', money: '174', productId: 'special_list2_product1'},
                  // 第2个
                 {url: require('./images/j2.jpg'), name: '安联臻爱医疗保险', age: '30天-60周岁', illness_text: '意外身故及伤残', illness: '30万元', accident_text: '恶性肿瘤医疗保险金', accident: '30万元', money: '152', productId: 'special_list2_product2'},
                 // 第3个
                 {url: require('./images/j3.jpg'), name: '泰康住院保', age: '30天-65周岁', illness_text: '意外伤害身故保险', illness: '10万元', accident_text: '意外伤害伤残保险', accident: '10万元', money: '180', productId: 'special_list2_product3'},
                 // 第4个
                 {url: require('./images/j4.jpg'), name: '平安庆生卡', age: '0-18周岁', illness_text: '意外伤害身故保险', illness: '5万元', accident_text: '个人医疗保险', accident: '5000元', money: '30', productId: 'special_list2_product4'},
                 // 第5个
                 {url: require('./images/j5.jpg'), name: '熊宝保-安联个人保障计划', age: '60天-17周岁', illness_text: '意外身故及伤残', illness: '5万元', accident_text: '公共场所个人责任', accident: '5万元', money: '30', productId: 'special_list2_product5'},
                 // 第6个
                 {url: require('./images/j6.jpg'), name: '安享无忧 - 安联个人意外保障计划', age: '18-65周岁', illness_text: '意外身故及伤残', illness: '50万元', accident_text: '意外医疗（免赔额100,100%赔付）', accident: '8000元', money: '45', productId: 'special_list2_product6'},
                 // 第7个
                 {url: require('./images/j7.jpg'), name: '利宝个人资金账户安全险', age: '18-65周岁', illness_text: '', illness: '', accident_text: '', accident: '', money: '30', productId: 'special_list2_product7'},
                 // 第8个
                 {url: require('./images/j8.jpg'), name: '利宝“福满家”家庭水电气综合保险', age: '无限制', illness_text: '燃气事故意外伤害身故及伤残', illness: '5万元', accident_text: '燃气事故第三者财产损失', accident: '5万元', money: '40', productId: 'special_list2_product8'}
                ]
            }
        }
    },
    created () {
        let list = Common.getQueryString('list');
        this.dl_img = this.list[list];
        this.bannerText = this[list]
        this.bannerUrl = require('./images/banner' + list + '.jpg');
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
        href_url (id) {
            // window.location.href = 'productDetail.html?index=2&productId=' + id;
        }
    }
}
</script>