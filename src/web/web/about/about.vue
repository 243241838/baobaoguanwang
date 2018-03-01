<template>
    <div id='body'>
        <div class="banner"><img src="./images/banner.jpg" alt=""></div>
        <!--品牌与背景-->
        <div class="brand">
            <div class="center">
                <div class="top">
                     <p>品牌与资质背景</p>
                     <p></p>
                </div>
                <div class="bottom">
                    <div class="fl">
                        <p>汇保险系浙江保保网络科技有限公司旗下互联网保险运营平台，致力于通过科技赋能，为各行业提供互联网保险解决方案，助推企业平台在保险方面进行探索实践、业务变现，为终端用户提供高性价比的保险产品服务与体验。</p>
                        <p>浙江保保网络科技成立于2016年11月，为杭州互联网金融协会成员，于17年获得了杭州浪淘沙的投资。</p>
                        <p>汇保险下辖保险经纪公司，注册资金5000万元，拥有经营全国保险业务资质和互联网保险许可。</p>
                    </div>
                    <div class="fr"><img src="./images/brand.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <!--企业文化-->
        <div class="culture">
            <div class="center">
                <div class="top">
                    <div>
                        <p>企业文化</p>
                    </div>
                    <p>企业愿景（Enterprise vision）--</p>
                    <p>打造产业互联网保险第一品牌</p>
                </div>
                <div class="bottom">
                    <div class="fl"><img src="./images/culture1.png" alt=""></div>
                    <div class="fl"><img src="./images/culture2.png" alt=""></div>
                    <div class="fl"><img src="./images/culture3.png" alt=""></div>
                    <div class="fl"><img src="./images/culture4.png" alt=""></div>
                </div>
            </div>
        </div>
        <!--团队-->
         <div class="team">
             <div class="center">
                 <div class="top">
                     <p>我们的团队</p>
                 </div>
                 <div class="bottom">
                     <dl class="fl">
                         <dt><img src="./images/team1.jpg" alt=""></dt>
                         <dd>年轻化</dd>
                     </dl>
                     <dl class="fl">
                         <dt><img src="./images/team2.jpg" alt=""></dt>
                         <dd>结果导向</dd>
                     </dl>
                     <dl class="fl">
                         <dt><img src="./images/team3.jpg" alt=""></dt>
                         <dd>行动派</dd>
                     </dl>
                 </div>
             </div>
         </div>
        <!--展望未来-->
        <div class="future">
            <div class="center">
                <div class="fl"><img src="./images/adc.png" alt=""></div>
                <div class="fr">
                    <h3>展望未来</h3>
                    <div></div>
                    <p>汇保险将充分践行保险姓保和用户对优质保险的需求，</p>
                    <P>围绕新型产业进行服务创新、产品创新、运营创新，并充分依靠云计算、物联网、人工</P>
                    <p>智能等进行技术创新。</p>
                    <p>以S2B2C模式，为平台用户提供保险产生设计、综合咨询、理赔服务、理财增值等金融</p>
                    <p>保险服务，实现便捷的保险体验和服务享受，让保险更保险。</p>
                </div>
            </div>
        </div>
        <!--地图-->
        <div class="map">
            <div class="center">
                <div class="top">
                     <p>联系我们</p>
                </div>
                <div class="bottom">
                    <div class="left">
                        <dl>
                            <dt>
                                <div class="fl"><img src="./images/map1.png" alt=""></div>
                                <div class="fl">邮箱</div>
                            </dt>
                            <dd>yangrui@lianqiangroup.com</dd>
                        </dl>
                        <dl>
                            <dt>
                                <div class="fl"><img src="./images/map2.png" alt=""></div>
                                <div class="fl"><span>电话</span></div>
                            </dt>
                            <dd>400-110-1866</dd>
                        </dl>
                        <dl>
                            <dt>
                                <div class="fl"><img src="./images/map3.png" alt=""></div>
                                <div class="fl"><span>地址</span></div>
                            </dt>
                            <dd>
                                浙江省杭州市西湖区翠苑街道学院路28号德力西大厦1号楼11楼
                            </dd>
                        </dl>
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