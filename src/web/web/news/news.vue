<template>
    <div id='body'>
         <div class="banner">
            <!--
             <div class="center">
                   <p>聚焦保险行业最新资讯</p>
             </div>
             -->
             <img src="./images/banner.jpg" alt="">
         </div>
         <div class="news">
             <div class="center">
                 <dl v-for="(item, index) in news" :class="{'last': index == news.length-1}" @click="go(item)">
                     <dt class="fl"><img :src="item.img" alt=""></dt>
                     <dd class="fr">
                         <div class="head">
                            <p class="fl" v-text="item.head"></p>
                            <p class="fr" v-text="item.time"></p>
                         </div>
                         <div class="bottom">
                             <p v-text="item.text"></p>
                         </div>
                     </dd>
                 </dl>
             </div>
         </div>
         <div class="pege">
             <div class="deg"><i class="iconfont">&#xe679;</i></div>
             <div class="active">1</div>
             <div><i class="iconfont">&#xe679;</i></div>
             <p>共1页</p>
        </div>
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            news: [
                {img: require('./images/img1.png'), head: '汇保险出席2017年杭州市互联网金融协会一届三次会员大会', time: '2017-12-22', text: '2017年12月21日，杭州市互联网金融协会一届三次会员大会在黄龙饭店顺利召开，汇保险作为正式会员企业之一应邀出席。', url: 'https://mp.weixin.qq.com/s/N59ShA97D_UvipnseYW5aA'},
                {img: require('./images/img2.jpg'), head: '四个维度定位保险科技的创新机会', time: '2017-12-22', text: '2017年下半年，保险科技领域的热度随着以下几个行业动态持续升温：11月微信推出「微保WeSure」平台，旗下产品微医保和微车保率先拉开大幕；9月28日，众安在线香港上市，市值突破千亿，旗下众安科技专注InsurTech领域的技术研究；7月，蚂蚁金服宣布向行业全面开放技术产品“定损宝”，用AI赋能车险自动定损等等。', url: 'http://36kr.com/p/5109369.html'},
                {img: require('./images/img3.jpg'), head: '场景+大数据:互联网保险产品的未来', time: '2016-11-22', text: '跟美国和日本等国家相比，中国针对个人的金融服务远远不够，传统金融未曾覆盖或者未曾服务的占非常大的比例，个人信用体系的建设更是少之又少。基于这样的市场现状，阳光信保的重点还是消费金融市场的个人金融业务。我们通过信用保障的方式把资金和资产打通，让融资端扩大融资渠道，降低融资成本，提高融资效率。在这过程中，涉及到大量的交易结构设计和合规性设计。而大数据所带来的核心竞争力，就是风险定价。', url: 'http://www.iheima.com/news/2016/1122/159933.shtml'},
                {img: require('./images/img4.jpg'), head: '互助保险行业研究报告：未来偿付能力堪忧！', time: '2016-11-08', text: '最近保监会发布了对互助保险的监管意见，非常严厉和清晰，远远超过对P2P贷款的监管力度。甚至殃及到了互助保险的投资人，对违反保险法的投资人将采取投资保险行业的禁入限制。', url: 'http://www.iheima.com/zixun/2016/1108/159659.shtml'}
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
        go (item) {
            window.open(item.url)
        }
    }
}
</script>