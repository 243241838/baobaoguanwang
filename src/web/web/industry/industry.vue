<template>
    <div id='body'>
        <div class="banner">
            <img src="./images/banner.jpg" alt="">
        </div>
        <!--产品-->
        <div class="product">
            <div class="center">
                <div class="head"><p>主要产品</p></div>
                <dl v-for="(item, index) in product" class="fl" :class="{'both_sides': index==1}">
                    <dt>
                        <div><img :src="item.img" alt=""></div>
                        <p v-text="item.head"></p>
                    </dt>
                    <dd v-text="item.text"></dd>
                </dl>
            </div>
        </div>
        <!--方案-->
        <div class="scheme">
            <div class="center">
                  <div class="head"><p>专项方案</p></div>
                  <div class="one">
                      <div class="fl left">
                          <div>
                             <p>解决方案一</p> 
                             <p></p>
                           </div>
                      </div>
                      <div class="fl right">
                          <div class="top"> 
                              <p>公司将为各企业平台提供保险增值服务，通过对平台企业用户画像与商业场景的深入剖析，为平台提供专项保险产品解决方案，包括产品定制、系统对接、咨询解疑等，协助平台服务好用户的保险需求，最大化让渡客户价值，赋能平台增值</p>
                              <div><img src="./images/jian1.jpg" alt=""></div>
                          </div>
                          <div class="middle">
                              <div>
                                  <div class="fl le">
                                      <div class="up">
                                            <p>用户需求分析</p>
                                      </div>
                                      <div class="img">
                                            <dl class="fl">
                                                <dt>
                                                    <img src="./images/o1.jpg" alt="">
                                                </dt>
                                                <dd>App 、小程序、微信H5等各种数据网端</dd>
                                            </dl>
                                            <div class="fl"><img src="./images/jian2.jpg" alt=""></div>
                                            <dl class="fl">
                                                <dt>
                                                    <img src="./images/o2.jpg" alt="">
                                                </dt>
                                                <dd>合作伙伴</dd>
                                            </dl>
                                     </div>
                                     <p>提供保险解决方案</p>
                                  </div>
                                  <div class="fl le ri">
                                      <div class="up">
                                            <p>匹配保险方案</p>
                                      </div>
                                      <div class="img">
                                            <dl class="fl">
                                                <dt>
                                                    <img src="./images/o3.jpg" alt="">
                                                </dt>
                                                <dd>保险产品库</dd>
                                            </dl>
                                            <div class="fl"><img src="./images/jian2.jpg" alt=""></div>
                                            <dl class="fl">
                                                <dt>
                                                    <img src="./images/o4.jpg" alt="">
                                                </dt>
                                                <dd>保险公司</dd>
                                            </dl>
                                      </div>
                                      <p>产品开发与筛选</p>
                                  </div>


                              </div>
                          </div>
                          <div class="bottom">
                              <div>
                                  <div class="fl"></div>
                                  <div class="fr"></div>
                              </div>
                              <div>开放平台</div>
                          </div>
                      </div>
                  </div>
                  <div class="one two">
                      <div class="fl left">
                          <div>
                             <p>解决方案二</p> 
                             <p></p>
                           </div>
                      </div>
                      <div class="fl right">
                          <div class="write"></div>
                          <div class="top"> 
                              <p>打造“助推宝”服务，为合作平台企业提供专项运营服务，包括运营方案的制定、产品专有培训、理赔专项服务及市场联合拓展等，我们期望通过自身互联网保险积累的经验与合作平台分享，共同为用户带来保险价值</p>
                              <div><img src="./images/jian1.jpg" alt=""></div>
                          </div>
                          <div class="two_middle">
                              <dl class="fl" v-for="(item, index) in two ">
                                  <dt><div><img :src="item.img" alt=""><span></span></div></dt>
                                  <dd v-text="item.text"></dd>
                              </dl>
                          </div>
                          <div class="two_bottom">互联网保险代运营综合服务商</div>
                      </div>
                  </div>
                  <div class="one two three">
                      <div class="fl left">
                          <div>
                             <p>解决方案三</p> 
                             <p></p>
                           </div>
                      </div>
                      <div class="fl right">
                          <div class="write"></div>
                          <div class="top"> 
                              <p>专注行业发展，为传统金融、新金融、新消费、新医疗、新物流等领域提供专项产品定制方案，通过物联网、智能装备、人工智能等新技术的应用，协助各平台进行风险防控及管理，促进行业稳健发展</p>
                              <div><img src="./images/jian1.jpg" alt=""></div>
                          </div>
                          <div class="three_middle">
                              <div class="fl"><img src="./images/th1.jpg" alt=""></div>
                              <div class="fl"><img src="./images/th3.jpg" alt=""></div>
                              <div class="fr"><img src="./images/th2.jpg" alt=""></div>
                          </div>
                      </div>
                  </div>
                  <div class="one two three four">
                      <div class="fl left">
                          <div>
                             <p>解决方案四</p> 
                             <p></p>
                           </div>
                      </div>
                      <div class="fl right">
                          <div class="write"></div>
                          <div class="top"> 
                              <p>为平台用户提供综合性的保险衍生服务，为企业与用户赋能，形成“保险+”的一揽行业解决方案，让客户得到的<br>永远大于期望</p>
                              <div><img src="./images/jian1.jpg" alt=""></div>
                          </div>
                          <div class="four_middle">
                              <div class="fl"><img src="./images/f1.jpg" alt=""></div>
                              <div class="fl"><img src="./images/f2.jpg" alt=""></div>
                              <div class="fr"><img src="./images/f4.jpg" alt=""></div>
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
            product: [
                {img: require('./images/p1.jpg'), head: '定制化金融保险', text: '面向互联网金融、商业保理、传统金融等提供信用保证保险、借款人意外险、防盗刷险等系列契合场景的保险产品。'},
                {img: require('./images/p2.jpg'), head: '财产保险', text: '聚焦行业、企业，提供各类财产保险，如建工险、货运险、仓储险、责任险等保险产品。'},
                {img: require('./images/p3.jpg'), head: '人寿险', text: '面向企业与个人客户，提供企业员工福利计划、团体意外险、健康险、中高端寿险等产品。'}
            ],
            two: [
                {img: require('./images/t1.jpg'), text: '运营方案'},
                {img: require('./images/t2.jpg'), text: '产品培训'},
                {img: require('./images/t3.jpg'), text: '理赔方案'},
                {img: require('./images/t4.jpg'), text: '产品定制'},
                {img: require('./images/t5.jpg'), text: '市场联拓'}
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
    }
}
</script>