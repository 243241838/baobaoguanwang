<template>
    <div id='body'>
       <div class="banner">
            <div v-bind:style="{background: 'url(' + bannerUrl + ') no-repeat center', backgroundSize: 'cover'}"></div>
            <div></div>
            <div>筑起你健康的“铜墙铁壁”</div>
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
            bannerUrl: require('./images/banner.jpg'),
            dl_img: [ // 产品
                // 第1个
                {url: require('./images/dl1.jpg'), name: '平安E生保（2017版）', age: '18周岁以上具有完全民事行为能力的自然人', illness_text: '一般医疗保险金', illness: '300万元', accident_text: '恶性肿瘤医疗保险金', accident: '300万元', money: '174', productId: 'healthInsurance_product1'},
                // 第2个
                {url: require('./images/dl2.jpg'), name: '海外特定疾病', age: '出生满28天至64周岁，可续保至74周岁', illness_text: '归国后治疗补贴', illness: '12元', accident_text: '归国后药品费', accident: '30万元', money: '351', productId: 'healthInsurance_product2'},
                 // 第3个
                 {url: require('./images/dl3.jpg'), name: '安联臻爱医疗保险', age: '30天-60周岁', illness_text: '意外身故及伤残', illness: '30万元', accident_text: '恶性肿瘤医疗保险金', accident: '30万元', money: '152', productId: 'healthInsurance_product3'},
                  // 第4个
                 {url: require('./images/dl4.jpg'), name: '泰康住院保', age: '30天-65周岁', illness_text: '意外伤害身故保险', illness: '10万元', accident_text: '意外伤害伤残保险', accident: '10万元', money: '180', productId: 'healthInsurance_product4'}
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
            // window.location.href = 'productDetail.html?index=5&productId=' + id;
        }
    }
}
</script>