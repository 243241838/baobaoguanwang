<template>
    <div id='body'>
        <!--banner-->
        <div class="banner">
            <div class="center">
                 <div class="top">
                     <p v-text="banner0.head"></p>
                     <p v-text="banner0.text"></p>
                 </div>
                 <div class="bottom">
                    <div class="aimg" v-for="item in banner">
                            <img :src="item.url" alt="">
                            <div class="fl">特别推荐</div>
                            <div class="fr">
                                <span></span>
                                <img :src="item.logo" alt="">
                            </div>
                            <div class="text">
                                <h2 v-text="item.name"></h2>
                                <div></div>
                                <div></div>
                                <p v-text="item.text1"></p>
                                <p v-text="item.text2"></p>
                                <p v-text="item.text3"></p>
                            </div>
                    </div>
                 </div>
            </div>
        </div>
        <!--介绍-->
        <div class="recommend">
             <!--上-->
             <div class="top">
                <div class="left fl">
                </div>
                <div class="right fl">
                    <div>
                        <p><img src="./images/dui.jpg" alt=""><span></span>快速保价</p>
                        <p>智能快速报价，不用等待</p>
                    </div>
                     <div>
                        <p><img src="./images/dui.jpg" alt=""><span></span>私人定制</p>
                        <p>符合自身要求的专属保障</p>
                    </div>
                     <div>
                        <p><img src="./images/dui.jpg" alt=""><span></span>专业咨询</p>
                        <p>理赔无忧，全程协助，理赔不再难</p>
                    </div>
                </div>
             </div>
             <div class="bottom">
                 <div class="right fr"></div>
                 <div class="left fr">
                      <div>
                           <p><img src="./images/dui.jpg" alt=""><b>人&nbsp;&nbsp;&nbsp;&nbsp;品&nbsp;&nbsp;&nbsp;&nbsp;好</b></p>
                           <p><img src="./images/dui.jpg" alt=""><b>车&nbsp;&nbsp;&nbsp;&nbsp;品&nbsp;&nbsp;&nbsp;&nbsp;好</b></p>
                           <p><img src="./images/dui.jpg" alt=""><b>权<span></span>益<span></span>更<span></span>好</b></p>
                           <div>
                                <p>开车守规矩，从来不违章，那就该享受更好福利！</p>
                                <p>汇保险车险通过从车、从人双维度大数据分析，给客户不同的等级，等级越高，用户获得的权益越多。</p>
                           </div>
                      </div>
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
            banner0: { // banner头文字
                head: '买车险 上汇保险',
                text: '您身边的优惠大使'
            },
            banner: [ // banenr下图片
                {url: require('./images/banner1.jpg'), logo: require('./images/car1.png'), name: '大地', text1: '简单快赔', text2: '简易理赔', text3: '免费道路救援'},
                {url: require('./images/banner2.jpg'), logo: require('./images/car2.png'), name: '天安', text1: '简单“快速”理赔', text2: '增值服务更丰富贴心', text3: '人伤无忧理赔更“安心”'},
                {url: require('./images/banner3.jpg'), logo: require('./images/car3.png'), name: '中华联合', text1: '快速定损', text2: '免费道路救援', text3: '理赔进度可查询'}
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
    }
}
</script>