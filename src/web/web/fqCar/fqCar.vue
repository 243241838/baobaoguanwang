<template>
    <div id='body'>
        <div class="banner">
            <div class="center">
                <div class="title">
                    <div>
                        <img src="./images/a1.png" alt="">
                    </div>
                    <div>
                        <img src="./images/a2.png" alt="">
                    </div>
                    <div>
                        <img src="./images/a3.png" alt="">
                    </div>
                    <!--
                    <div>
                        <img src="./images/s11.png" alt="">
                        <img src="./images/s1.png" alt="">
                    </div>
                     <div>
                        <img src="./images/s22.png" alt="">
                        <img src="./images/s2.png" alt="">
                    </div>
                     <div>
                        <img src="./images/s33.png" alt="">
                        <img src="./images/s3.png" alt="">
                    </div>
                    -->
                </div>
                <div class="title1">
                    <span>无担保</span><span>无抵押</span><span>快速便利</span><span>当天出单</span>
                </div>
                <div class="btn" @click="show()">马上体验</div>
                <div class="img">
                   <img src="./images/car_bottom.png" alt="">
                   <img src="./images/car.png" alt="">
                   <img src="./images/li.png" alt="">
                </div>
            </div>
        </div>
        <!--分期介绍-->
        <div class="detail">
            <div class="center">
                <div class="fl">
                   <dl>
                        <dt>
                            <img src="./images/d1.png" alt="">
                        </dt>
                        <dd>
                            <p>快速报价</p>
                            <p>智能快速报价，不用等待</p>
                        </dd>
                   </dl>
                   <dl>
                        <dt>
                            <img src="./images/d2.png" alt="">
                        </dt>
                        <dd>
                            <p>私人订制</p>
                            <p>符合自身需求的专属保障</p>
                        </dd>
                   </dl>
                    <dl>
                        <dt>
                            <img src="./images/d3.png" alt="">
                        </dt>
                        <dd>
                            <p>专业咨询</p>
                            <p>理赔无忧 全程协助，理赔不再难</p>
                        </dd>
                   </dl>
                     <dl>
                        <dt>
                            <img src="./images/d4.png" alt="">
                        </dt>
                        <dd>
                            <p>豪礼相赠</p>
                            <p>全系车险送豪礼，最高送千元油卡</p>
                        </dd>
                   </dl>
                </div>
                <div class="fr">
                   <div></div>
                </div>
            </div>
        </div>
        <div class="fq">
            <div class="center">
                <p>买车险享免息月付</p>
                <div class="bottom">
                    <div>
                        <div>周期</div>
                        <div>3期</div>
                        <div>6期</div>
                        <div>9期</div>
                    </div>
                    <div>
                        <div>手续费</div>
                        <div>0</div>
                        <div>0</div>
                        <div>3%</div>
                    </div>
                     <div>
                        <div>利息</div>
                        <div>0</div>
                        <div>0</div>
                        <div>0</div>
                    </div>
                </div>
            </div>
        </div>
        <!--蒙版-->
        <div class="layer-shade" v-show="isShow" @click="close()">
            <div>
                 <div class="close" @click="close()">x</div>
                 <div class="number">
                     <img src="./images/mc.png" alt="">
                     <img src="./images/nb.png" alt="">
                 </div>
                 <img src="./images/ml.png" alt="">
                 <img src="./images/mr.png" alt="">
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
            isShow: false // 阴影
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
        show () {
            this.isShow = true;
        },
        close () {
            this.isShow = false;
        },
        href_url (id) {
            // window.location.href = 'productDetail.html?index=6&productId=' + id;
        }
    }
}
</script>