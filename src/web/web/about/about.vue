<template>
    <div id='body'>
        <div class="banner"><div class="center"></div></div>
        <!--关于我们-->
        <div class="about">
            <div class="center">
                <div class="fl">
                    <div class="head">
                        <p>ABOUT</p>
                        <p></p>
                    </div>
                    <div class="text">
                        <p>
                            &nbsp;&nbsp;“汇保险”成立于2016年10月，系浙江保保网络科技有限公司旗下品牌，在国内较早从事移动互联网保险经纪及代理，并在中国保监会及相关监管部门指导下，取得相关执业资质。
                        </p>
                        <p>
                           公司自主研发的移动应用平台“汇保险”App，是国内知名的移动互联网保险平台，与国内外多家知名保险机构达成战略合作协议。“汇保险”平台定位于为广大保险用户提供适合其个性化需求的保险产品信息服务（包含但不限于车险、责任险、家财险、意外险、健康险、理财险、人身险等产品），同时还为保险渠道用户和保险机构之间合作提供无缝对接的桥梁。
                        </p>
                        <p> 
                           &nbsp;&nbsp;&nbsp;“汇保险”创始人和核心管理团队均来自于阿里、腾讯及国内外知名保险机构，由海归人才领衔，凭借团队在互联网及保险领域的权威性及丰富的经验积累，同时兼具前瞻性视野，公司创始初期便得到各界领导高度评价及认同，被誉为浙江互联网保险领域的未来领导者。
                        </p>
                        <p>
                            十年树木，百年树人。“汇保险”将秉承“笃守诚信、创造卓越”的企业核心价值观，为中国互联网保险的发展之路，缔造新标杆。
                        </p>
                    </div>
                    <div class="bottom">
                        <div class="fl">
                            <dl>
                                <dt><i class="iconfont">&#xe74b;</i></dt>
                                <dd>经验</dd>
                            </dl>
                            <p></p>
                            <p></p>
                        </div>
                        <div class="fl">
                            <dl>
                                <dt><i class="iconfont">&#xe60e;</i></dt>
                                <dd>信任</dd>
                            </dl>
                            <p></p>
                            <p></p>
                        </div>
                        <div class="fl">
                            <dl>
                                <dt><i class="iconfont">&#xe61d;</i></dt>
                                <dd>专业</dd>
                            </dl>
                            <p></p>
                            <p></p>
                        </div>
                        <div class="fl">
                            <dl>
                                <dt><i class="iconfont">&#xe688;</i></dt>
                                <dd>服务</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="fr">
                    <div></div>
                </div>
           </div>
        </div>
        <!--地图-->
        <div class="location">
            <div class="center">
               <div class="fl text">
                   <dl>
                       <dt class="fl"><i class="iconfont">&#xe601;</i></dt>
                       <dd class="fl">
                           <p>邮箱</p>
                           <p>yangrui@lianqiangroup.com</p>
                       </dd>
                   </dl>
                   <dl>
                       <dt class="fl"><i class="iconfont">&#xe859;</i></dt>
                       <dd class="fl">
                           <p>电话</p>
                           <p>0571-56707435</p>
                       </dd>
                   </dl>
                   <dl>
                       <dt class="fl"><i class="iconfont">&#xe6e1;</i></dt>
                       <dd class="fl">
                           <p>地址</p>
                           <p>浙江省杭州市西湖区翠苑街道学院路28号德力西大厦1号楼25楼</p>
                       </dd>
                   </dl>
               </div>
               <div class="fl angle"></div>
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