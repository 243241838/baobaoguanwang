<template>
    <div id='body'>
        <!--banner-->
        <div ref="banner" class="banner" id="banner" @click="go_url()">
            <div class="swiper-container">
                <!--v-bind:style="{background: 'url(' + item.url + ') no-repeat center', backgroundSize: '100% 100%'}"-->
                <div  class="swiper-slide" @click="href_url1(item)" v-for="(item,index) in imgSrc">
                     <img class="swiper_img" @load="imgload()" :src="item.url" alt="">
                </div>
            </div>
            <div id="dot" v-show="isDot_show" class="dot" v-on:mouseout="dot_start()">
                <div class="dot-short fl" v-for = "(item,index) in imgSrc" v-on:mouseover="dot_long(index)"></div>
            </div>
        </div>
        <!--定制-->
        <div class="customization">
            <div class="center">
                <div class="top">
                    <p>汇保险您身边的保险专家，因您而改变</p>
                    <p>我们致力于实现便捷的保险体验和服务享受，让保险更保险</p>
                </div>
                <div class="bottom">
                    <dl class="fl" v-for="item in customization">
                        <dt><img :src="item.url" alt=""></dt>
                        <dd>
                            <p v-text="item.name"></p>
                            <p v-text="item.text"></p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <!--理赔-->
        <div class="claim">
            <div class="center">
                   <div class="top">
                        <div>
                            <p>协助理赔，快捷省心</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="fl left">
                            <div>
                                 <img src="./images/call.jpg" alt="">
                            </div>
                        </div>
                        <div class="fl right">
                            <div class="call">
                               <p>汇保险专有理赔专家<span>全程协助理赔，繁琐流程交给我们</span></p>
                               <dl>
                                    <dt class="fl"><img src="./images/iphone.png" alt=""></dt>
                                     <dd class="fl">报案电话：400-110-1186</dd>
                               </dl>
                               <dl>
                                   <dt class="fl"><img src="./images/time.png" alt=""></dt>
                                   <dd class="fl">服务时间：9:00-21:00</dd>
                                </dl>
                            </div>
                            <div class="text">
                                <div v-for="(item, index) in claim" class="fl">
                                      <div class="fl img">
                                         <p><img :src="item.url" alt=""></p>
                                         <p v-text="item.text"></p>
                                      </div>
                                      <div class="fl angle" v-show="index != claim.length-1"><img v-for="item in 3" src="./images/jiao.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
         <!--下载-->
        <div class="downLoad">
            <div class="center">
                <div class="left fl">
                    <img src="./images/abc.png"></img>
                </div>
                <div class="right fr">
                    <div>
                        <p>汇保险</p>
                        <p>您身边的保险专家，为您实现便捷的保险体验和服务享受</p>
                    </div>
                    <div class="bottom">
                        <div class="fl">
                            <img src="./images/er.jpg" alt="">
                        </div>
                        <div class="fl">
                            <div class="load">
                                <a href="https://itunes.apple.com/cn/app/id1317655178?mt=8">APP Store下载</a>
                            </div>
                            <div class="load">
                                <a href="http://owx209l11.bkt.clouddn.com/hbx-update-release.apk">Android下载</a>
                            </div>
                            <p>用手机扫描左侧二维码</p>
                            <p>或选择合适你的手机系统</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--合作伙伴-->
        <div class="partner">
           <div class="center">
               <div class="top">
                   <p>合作伙伴</p>
               </div>
               <div class="bottom">
                   <ul>
                        <li v-for="item in partner"><img :src="item.url" alt=""><span></span></li>
                   </ul>
               </div>
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
            render: false,
            isDot_show: false,
            currentIndex: 0,
            $slides: [], // 存取图片class
            $dot: [], // 存取banner点
            flag: '', // 离开mouseout开关
            imgSrc: [ // banner
                {url: require('./images/banner1.jpg'), aUrl: 'recruitment.html', index: 4},
                {url: require('./images/banner2.jpg'), aUrl: 'industry.html', index: 2}
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
             //定制化
            customization: [ // 定制化
                {url: require('./images/customization1.png'), name: '定制化金融保险', text: '提供契合场景的保险产品'},
                {url: require('./images/customization2.png'), name: '财产保险', text: '聚焦行业、企业等，提供各类财产保险'},
                {url: require('./images/customization3.png'), name: '人寿险', text: '面向企业与个人客户'}
            ],
            claim: [
                {url: require('./images/claim1.png'), text: '出险报案'},
                {url: require('./images/claim2.png'), text: '提交理赔申请'},
                {url: require('./images/claim3.png'), text: '快速审核跟进'},
                {url: require('./images/claim4.png'), text: '无忧获得理赔'}
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
        this.$nextTick(() => {
            this.$slides = $('.swiper-slide');
            setTimeout(() => {
                this.$dot = $('.dot-short');
                let dot = $('#dot');
                console.log(dot)
                dot.css('marginLeft', '-' + dot.width() + 'px')
                this.move();
                this.timing();
            }, 0)
        })
    },
    computed: {
    },
    watch: {
    },
    methods: {
        imgload () {
            this.$refs.banner.style.height = $('.swiper_img').eq(0).height() + 'px';
            this.isDot_show = true;
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
            // window.location.href = 'web/productList.html'
        },
        href_url1 (item) {
            window.location.href = 'web/' + item.aUrl + '?index=' + item.index;
        }
    }
}
</script>