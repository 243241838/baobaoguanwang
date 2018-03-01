<template>
    <div id='body'>
        <div class="banner">
            <div v-bind:style="{background: 'url(' + bannerUrl + ') no-repeat center', backgroundSize: 'cover'}"></div>
            <div></div>
            <div>幸福的回忆是旅行的意义</div>
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
                 // 第一个
                {url: require('./images/dl1.jpg'), name: '平安畅游九州境内旅行计划', age: '18-65周岁', illness_text: '意外伤害住院津贴', illness: '10万元', accident_text: '行李物品损失保障', accident: '3000元', money: '1', productId: 'travelInsurance_product1'},
                 // 第二个
                {url: require('./images/dl2.jpg'), name: '安联国际旅行保险（除尊享计划外）', age: '出生满60天至90周岁', illness_text: '意外伤害住院津贴', illness: '30万元', accident_text: '公共交通意外身故及伤残', accident: '10万元', money: '60', productId: 'travelInsurance_product2'},
                // 第三个
                {url: require('./images/dl3.jpg'), name: '安联国际旅行保险（尊享计划）', age: '出生满60天至90周岁', illness_text: '意外身故及伤残', illness: '60万元', accident_text: '公共交通意外身故及伤残', accident: '60万元', money: '210', productId: 'travelInsurance_product3'},
                // 第4个
                {url: require('./images/dl4.jpg'), name: '延乐保（境外版）-安联境外航延险计划', age: '18-90周岁', illness_text: '航空意外身故及伤残', illness: '10万元', accident_text: '航空意外身故及伤残(超过4小时延误)', accident: '300元', money: '20', productId: 'special_list3_product4'},
                 // 第5个
                {url: require('./images/dl5.jpg'), name: '延乐保（国内版）-安联境内航延险计划', age: '18-90周岁', illness_text: '航空意外身故及伤残', illness: '5万元', accident_text: '航空意外身故及伤残(超过4小时延误)', accident: '300元', money: '20', productId: 'special_list3_product5'}
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
            // window.location.href = 'productDetail.html?index=6&productId=' + id;
        }
    }
}
</script>