<template>
   <!--底部连接-->
        <footer>
            <div class="center">
                <div class="top">
                       <div class="left fl">
                            <p>关于汇保险</p>
                            <div>
                                <ul class="fl">
                                    <li @click="go_url()"><a href-="javascript:;">关于我们</a></li>
                                    <li v-show="false"><a href-="javascript:;">加入我们</a></li>
                                    <!--
                                    <li><a href-="javascript:;"></a></li>  
                                    -->
                                </ul>
                                <!--
                                <ul class="fr">
                                    <li><a href-="javascript:;"></a></li>
                                    <li><a href-="javascript:;"></a></li>  
                                </ul>
                                -->
                            </div>
                            <!--
                            <p>浙江保保网络科技有限公司汇保险版权所有</p>
                            <p>浙ICP备17000279号</p>
                            -->
                            <p>商务洽谈电话</p>
                            <p>15888877547（杨女士）</p>
                        </div>
                        <div class="middle fl">
                            <p>客服服务</p>
                            <p><i class="iconfont">&#xe601;</i></p>
                            <p><a href="javascript:;">yangrui@lianqiangroup.com</a></p>
                            <p><i class="iconfont fl">&#xe648;</i><span class="fl">全国统一服务热线</span></p>
                            <p>400-678-6078</p>
                        </div>
                        <div class="right fr">
                            <p>关注汇保险</p>
                            <div class="fr">
                                <img src="./images/code1.jpg" alt="">
                            </div>
                        </div>
                </div>
            </div>
            <div class="bottom">
                <div class="logo">
                    <p>保险业务经营许可证：<span @click="go_url1(1)">260918000000800</span>    浙江保保网络科技有限公司：<span @click="go_url1(2)">91130100561995626</span></p>
                    <div>
                        <div class="fl"></div>
                        <p>&nbsp;&nbsp;汇保险 版权所有  浙ICP备17000279号</p>
                    </div>
                </div>
                <div class="btn" @click="scroll"><i class="iconfont">&#xe66c;</i></div>
            </div>
        </footer>
</template>
<script>
import $ from 'jQuery';
import {Common, storage} from 'js/common';
export default {
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
        //
        scroll () {
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0;
        },
        go_url () {
            var prevPage = storage.get('prevPage');
            console.log(prevPage)
            if (prevPage === '1') {
                console.log('aa')
                window.location.href='./web/about.html';
            } else if (prevPage === '2') {
                window.location.href='./about.html';
            }
        },
        go_url1 (number) {
            var prevPage = storage.get('prevPage');
            console.log(prevPage)
            if (prevPage === '1') {
                console.log('aa')
                window.open('./web/aptitude.html?number=' + number);
            } else if (prevPage === '2') {
                window.open('./aptitude.html?number=' + number);
            }
        }
    }
}
</script>
<style lang='scss'>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
footer{
    width:100%;
    height:473px;
    background:url(images/footers.jpg) no-repeat center bottom;
    background-size:cover;
    background-color:#FDFDFD;
    .center{
        // height:381px;
        height:360px;
    }
    .left{
        padding-top:80px;
        width:280px;
        height:100%;
        color:#484c4b;
        margin-right:206px;
        p:first-child{
            font-size:18px;
            line-height:59px;
            border-bottom: 2px solid #f5f5f5;
            margin-bottom:19px;
        }
        p:nth-child(3){
            font-size:14px;
            line-height:25px;
        }
        p:last-child{
            font-size:14px;
            line-height:25px;
        }
        >div{
           width:100%;
           height:119px;
           ul{
               width:79px;
               li:first-child{
                   cursor:pointer;
               }
               a{
                   font-size:14px;
                    color:#484c4b;
                    line-height:30px;
               }
           }

        }
    }
    .middle{
        padding-top:80px;
        width:280px;
        height:100%;
        p{
            width:100%;
            text-align:center;
        }
        p:first-child{
            font-size:18px;
            line-height:59px;
            border-bottom: 2px solid #f5f5f5;
            margin-bottom:19px;
            color:#484c4b;
        }
        p:nth-child(2){
            .iconfont{
                font-size:22px;
                color:#c8cccb;
                line-height:35px;
            }
        }
        p:nth-child(3){
            a { 
                font-size:14px;
                color:#2ece90;
                line-height:30px;
            }
        }
        p:nth-child(4){
            width:143px;
            height:52px;
            margin:0 auto;
            font-size:14px;
            color:#a8aeac;
            line-height:52px;
            .iconfont{
                 font-size:20px;
                 color:#a8aeac;
                 line-height:52px;
                 margin-right:10px;
            }
        }
        p:last-child{
            font-size:36px;
            color:#2ece90;
            line-height:35px;
        }
    }
    .right{
        width:280px;
        height:100%;
        padding-top:88px;
        p{
            text-align:right;
            line-height:51px;
            font-size:18px;
            color:#484c4b;
            border-bottom: 2px solid #f5f5f5;
            margin-bottom:36px;
        }
        div{
            img{
                width:120px;
                height:120px;
            }
        }
    }
    .bottom{
        width:100%;
        // height:94px;
        height:115px;
        border-bottom:5px solid #2ece90;
        .logo{
            >p{
                text-align:center;
                font-size:14px;
                color:#a8aaac;
                line-height:30px;
                margin-bottom:10px;
                >span:hover{
                    color:#2ece90;
                    cursor:pointer;
                }
            }
            >div{
                width:390px;
                margin:0 auto;
                line-height:32px;
                font-size:14px;
                color:#484c4b;
                margin-bottom:11px;
                >div{
                    width:102px;
                    height:31px;
                    background:url(images/logo1.jpg) no-repeat center;
                    margin:0 auto;
                    margin-bottom:32px;
                }
            }
        }
        .btn{
            width:60px;
            height:35px;
            background:#2ece90;
            margin:0 auto;
            text-align:center;
            cursor: pointer;
            .iconfont{
                line-height:35px;
                font-size:20px;
                color:#fff;
            }
        }
    }
}
</style>