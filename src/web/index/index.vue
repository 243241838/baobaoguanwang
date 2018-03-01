<template>
    <div id='body'>
        <!--banner-->
        <div class="banner" id="banner" @click="go_url()">
            <div class="swiper-container">
                <div  class="swiper-slide" @click="href_url1(item.productId, item.aUrl, item.index)" v-for="(item,index) in imgSrc"  v-bind:style="{background: 'url(' + item.url + ') no-repeat center', backgroundSize: 'cover'}">
                    <div class="center">
                         <p v-text="item.banner1"></p>
                         <p v-text="item.banner2"></p>
                         <p v-text="item.banner3"></p>
                         <p v-show="index==0"><a href="javascript:;">了解详情</a></p>
                    </div>
                </div>
            </div>
            <div class="dot" v-on:mouseout="dot_start()" v-show="false">
                <div class="dot-short fl" v-for = "(item,index) in imgSrc" v-on:mouseover="dot_long(index)"></div>
            </div>
        </div>
        <!--爆款推荐-->
        <div class="hot">
            <div class="center">
                   <div class="top">
                        <div>
                            <span>//</span>
                            <b>爆款推荐</b>
                            <span>//</span>
                        </div>
                    </div>
                    <div class="bottom">
                            <dl class="dl_width" @click="href_url(item.productId)" v-for="(item,index) in hot">
                                <dt>
                                    <img :src="item.url" alt="">
                                    <span></span>
                                </dt>
                                <dd>
                                    <p class="ellip" v-text="item.name"></p>
                                    <p class="ellip" v-text="item.text"></p>
                                </dd>
                            </dl>
                    </div>
            </div>
        </div>
        <!--定制-->
        <div class="customization">
            <div>
                <video class="vedio" autoplay loop id="video" preload="true">
                     <source src="../../../webStatic/b74e6354-65ec-4301-b613-2b431a418978.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
            </div>
            <div>
                 <div class="center">
                    <div class="top">
                        <p v-text="customization0.head"></p>
                        <p v-text="customization0.text"></p>
                    </div>
                    <div class="bottom">
                        <a href="javascript:;" v-for="item in customization">
                            <dl>
                                <dt>
                                  <img :src="item.url" alt="">
                                </dt>
                                <dd>
                                    <p v-text="item.name"></p>
                                    <p v-text="item.text"></p>
                                </dd>
                            </dl>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--合作伙伴-->
        <div class="partner">
           <div class="center">
               <div class="top">
                   <span>//</span>
                   <b>合作伙伴</b>
                   <span>//</span>
               </div>
               <div class="bottom">
                   <ul>
                        <li v-for="item in partner"><img :src="item.url" alt=""><span></span></li>
                   </ul>
               </div>
           </div>
        </div>
        <!--下载-->
        <div class="downLoad">
            <div class="center">
                <div class="left fl">
                    <img src="./images/shou_phone.jpg"></img>
                    <img src="./images/bao.jpg" alt="">
                </div>
                <div class="right fr">
                    <div>
                        <p>汇保险</p>
                        <p>您身边的保险专家</p>
                    </div>
                    <div class="load">
                        <a href="https://itunes.apple.com/cn/app/id1317655178?mt=8">APP Store下载</a>
                    </div>
                     <div class="load">
                        <a href="http://owx209l11.bkt.clouddn.com/hbx-update-release.apk">Android下载</a>
                    </div>
                    <div>
                        <img src="./images/er.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <img :src="url" alt="">
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            render: false,
            currentIndex: 0,
            $slides: [], // 存取图片class
            $dot: [], // 存取banner点
            flag: '', // 离开mouseout开关
            imgSrc: [ // banner
                {url: require('./images/indexBanner.jpg'), banner1: '意外无处不在', banner2: '给自己买一份放心 还家人一份安心', banner3: '', aUrl: 'healthInsurance.html', index: 6}
                // {url: require('./images/carBanner.jpg'), banner1: '', banner2: '', banner3: '', aUrl: 'fqCar.html', index: 1}
                // {url: require('./images/indexBanner.jpg'), banner1: '健康值得投入', banner2: '无论是时间还是金钱', banner3: '健康管理,医疗保障全家', aUrl: 'javascript:;'}
                // {url: require('./images/indexBanner.jpg'), banner1: '健康值得投入2', banner2: '无论是时间还是金钱', banner3: '健康管理,医疗保障全家', aUrl: 'javascript:;'},
                // {url: require('./images/indexBanner.jpg'), banner1: '健康值得投入3', banner2: '无论是时间还是金钱', banner3: '健康管理,医疗保障全家', aUrl: 'javascript:;'},
                // {url: require('./images/indexBanner.jpg'), banner1: '健康值得投入4', banner2: '无论是时间还是金钱', banner3: '健康管理,医疗保障全家', aUrl: 'javascript:;'}
                // {url: require('./images/indexBanner1.jpg'), productId: 'indexBanner1'}
                // {url: require('./images/indexBanner1.jpg'), productId: 'indexBanner1'},
                // {url: require('./images/indexBanner2.jpg'), productId: 'indexBanner2'},
                // {url: require('./images/indexBanner3.jpg'), productId: 'indexBanner3'},
                // {url: require('./images/indexBanner4.jpg'), productId: 'indexBanner4'}
            ],
            hot: [ // 爆款
                // 第一个
                {url: require('./images/hot1.jpg'), name: '平安畅游九州境内旅行', text: '中国那么大，我想去看看', productId: 'hot1'},
                // 第2个
                {url: require('./images/hot2.jpg'), name: '汇保险住院宝', text: '超高性价比，轻松购买，无压力', productId: 'hot2'},
                // 第3个
                {url: require('./images/hot3.jpg'), name: '平安个人银行卡盗刷', text: '全年保障，用卡无忧', productId: 'hot3'},
                {url: require('./images/hot4.jpg'), name: '平安庆生卡', text: '价格实惠，馈赠首选', productId: 'hot4'}
            ],
            //定制化头部广告语
            customization0: {
                head: '汇保险--您身边的保险专家，因您而改变',
                text: ' 我们致力于连接保险公司和消费者，打造可靠、高效、让人安心的一站式互联网保险服务平台'
            },
            //定制化
            customization: [ // 定制化
                {url: require('./images/customization1.png'), name: '个性化', text: '保险产品定价因人而异'},
                {url: require('./images/customization2.png'), name: '定制化', text: '保障内容因场景而不同'},
                {url: require('./images/customization3.png'), name: '智能化', text: '服务因科技进步而智能'}
            ],
            // 合作伙伴
            partner: [
                {url: require('./images/partner1.jpg')},
                {url: require('./images/partner2.jpg')},
                {url: require('./images/partner3.jpg')},
                {url: require('./images/partner4.jpg')},
                {url: require('./images/partner5.jpg')},
                {url: require('./images/partner6.jpg')},
                {url: require('./images/partner7.jpg')},
                {url: require('./images/partner8.jpg')},
                {url: require('./images/partner9.jpg')}
            ],
            aa: '',
            timer: '', // 定时器名称 fq.51hbx.com/api/api.do   http://www.51hbx.com/api/api.do
            dot: 1 // banner点
        }
    },
    created () {
        storage.set('prevPage', '1');
    },
    mounted () {
        // this.$nextTick(() => {
        //     this.$slides = $('.swiper-slide');
        //     setTimeout(() => {
        //         this.$dot = $('.dot-short');
        //         this.move();
        //         this.timing();
        //     }, 0)
        // })
        this.mute(); // 静音
    },
    computed: {
    },
    watch: {
    },
    methods: {
        // 静音
        mute () {
            let video = document.getElementById('video');
            video.muted = true
        },
        // 定时器 banner
        timing () {
            this.timer = setInterval(() => {
                this.currentIndex++;
                if (this.currentIndex >= this.$slides.length) {
                    this.currentIndex = 0;
                }
                this.move();
            }, 4000)
        },
        // 透明图切换和点class添加和删除
        move () {
            this.$slides.css({'opacity': '0', 'z-index': '-1'});
            this.$dot.removeClass('dot-radius');
            this.$slides.eq(this.currentIndex).css({'opacity': '1', 'z-index': '0'});
            this.$dot.eq(this.currentIndex).addClass('dot-radius');
        },
        // 点击切换banner
        dot_long (index) {
            this.flag = true;
            this.dot++;
            clearInterval(this.timer);
            this.currentIndex = index;
            this.move();
        },
        // 开始轮播
        dot_start () {
            if (this.flag) {
                this.timing();
                this.flag = false;
            }
        },
        right () {
            this.currentIndex--;
            if (this.currentIndex <= -1) {
                this.currentIndex = this.$slides.length - 1;
            }
            this.move();
        },
        href_url (id) {
            // window.location.href = 'web/productList.html?footer=1'
        },
        go_url () {
            window.location.href = 'web/productList.html'
        },
        href_url1 (id, url, index) {
            // window.location.href = 'web/' + url + '?index=' + index;
        }
    }
}
</script>