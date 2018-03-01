<template>
    <div id='body'>
        <div class="banner">
            <div class="center" v-bind:style="{background: 'url(' + product.url + ') no-repeat center', backgroundSize: 'cover'}">
                <p v-text="product.name"></p>
                <p v-text="product.test"></p>
                <p>￥<span v-text="product.money"></span>起</p>
                <!--<p><a href="productDetail.html?productId=p1">去看看</a></p>-->
            </div>
        </div>
        <div class="plan">
            <div class="center">
                 <div class="top">
                        <!--表格-->
                        <div class="left fl">
                            <!--第一列-->
                            <div>
                                <div>保障项目</div>
                                <div>
                                    <div v-for="item in product.designation">
                                        <div>
                                            <span v-text="item.name"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--后几列-->
                            <div v-for="(item,index) in obj" :class="{bor:index==border1}" @click="showBor(index,item)">
                                <!--第一行-->
                                <div :class="{bor1:index==border1}">
                                    <p v-show="index==0">计划一</p>
                                    <p v-show="index==1">计划二</p>
                                    <p v-show="index==2">计划三</p>
                                    <p><span v-text="item.m1==''?'一':item.m1"></span><span v-show="item.m1">起</span></p>
                                </div>
                                <!--循环遍历后几行-->
                                <div>
                                    <div class="oli" v-for="itm in item.m"><span v-html="itm.m?itm.m:'一'"></span></div>
                                </div>
                            </div>
                        </div>
                        <!--立即投保-->
                        <div class="right fr">
                            <div>
                               <h3>保险期间</h3>
                               <div class="selec">
                                    <div @click="isnone(1)">
                                        <span v-text="selec1"></span>
                                        <span class="fr">
                                            <i class="iconfont">&#xe621;</i>
                                        </span>
                                    </div>
                                    <ul v-show="show1&&product.time.length>1">
                                        <li v-for="(item,index) in product.time" v-text="item.data" @click="oul(item.data, 1, index)"></li>
                                    </ul>
                               </div>
                            </div>
                            <div>
                                <h3>保障计划</h3>
                                <div class="selec">
                                     <div @click="isnone(2)">
                                        <span v-text="selec2"></span>
                                        <span class="fr"><i class="iconfont">&#xe621;</i></span>
                                    </div>
                                    <ul v-show="show2&&product.plan[1].m1!=''">
                                        <li @click="oul('计划一', 2, 0)">计划一</li>
                                        <li @click="oul('计划二', 2, 1)">计划二</li>
                                        <li @click="oul('计划三', 2, 2)" v-show="product.plan[2].m1!=''">计划三</li> 
                                    </ul>
                                </div>
                            </div>
                            <p>￥<span v-text="money"></span></p>
                            <div class="btn">立即投保</div>
                            <p>请阅读<a href="javascript:;">《投保须知》</a><a href="javascript:;">《保险条款》</a>和<a href="javascript:;">《健康告知》</a>了解更多详情</p>
                        </div>
                  </div>
                  <div class="bottom">
                      <!--产品图片-->
                      <div>
                         <!-- <img v-for="item in product.product_img" :src="item.url" alt="">-->
                      </div>
                      <!--产品问答-->
                      <div>
                          <h3><span>//</span>产品问答</h3>
                          <div v-for="item in product.product_questions">
                                <p v-text="item.head"></p>
                                <div>
                                    <p>A：</p>
                                    <p class="fl" v-text="item.text"></p>
                                </div>
                         </div>
                      </div>
                      <!--案例分析-->
                      <div>
                          <h3><span>//</span>案例分析</h3>
                          <div v-for="item in product.product_analyze">
                              <p v-text="item.text"></p>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import product from './js/test';
// console.log(product.p1)
import $ from 'jQuery';
export default {
    data () {
        return {
            border1: 0,
            money: '',
            selec1: '', // 第一个select
            selec2: '', // 第二个select
            show1: false,
            show2: false,
            productId: '', // 产品id
            product: {},
            obj: ''
        }
    },
    created () {
        this.productId = Common.getQueryString('productId');
        // this.product = this.product1[this.productId];
        this.product = product[this.productId]
        this.product = this.product[0];
        this.obj = this.product.plan;
    },
    mounted () {
        this.selec1 = this.product.time[0].data;
        this.selec2 = '计划一';
        this.select();
    },
    computed: {
    },
    watch: {
    },
    methods: {
        showBor (number, item) { // 点击列表出现border
            if (number||number === 0) {
                if (this.obj[number].m1 !== '') {
                    this.border1 = number;
                    this.selec2 = this.obj[number].name;
                }
            }
            this.select();
        },
        select () {
            let name = this.selec2 + ',' + this.selec1;
            for (var i = 0; i < this.product.priceList.length; i++) {
                if (name === this.product.priceList[i].priceKeyword) {
                    this.money = this.product.priceList[i].productPremium;
                }
            }
        },
        oul (text, index, number) { // 点击投保期限
            if (index === 1) { // index===1 时是点击第一个
                this.selec1 = text;
                this.show1 = false;
                this.showBor();
            } else {
                this.selec2 = text;
                this.showBor(number);
                this.show2 = false;
            }
        },
        isnone (number) {
            if (number === 1) {
                this.show1 = !this.show1;
                this.show2 = false;
            } else {
                this.show2 = !this.show2;
                this.show1 = false;
            }
        }
    }
}
</script>