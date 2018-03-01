<template>
   <!--底部连接-->
        <footer>
            <div class="center">
                <div class="top">
                    <div class="left fl">
                            <ul>
                                <li @click="go_url('about.html', 3)"><a hrkef-="javascript:;">关于我们</a></li>
                                <li><a href-="javascript:;" v-show="false">联系我们</a></li>
                                <li  @click="go_url('recruitment.html', 4)"><a href-="javascript:;">加入我们</a></li>  
                            </ul>
                            <p>浙江保保网络科技有限公司汇保险版权所有</p>
                            <p>浙ICP备17000279号</p>
                        </div>
                        <div class="middle fl">
                            <p><i class="iconfont">&#xe601;</i></p>
                            <p>yangrui@lianqiangroup.com</p>
                            <p><i class="iconfont">&#xe648;</i><span>全国统一服务热线</span></p>
                            <p>400-110-1866</p>
                        </div>
                        <div class="right fr">
                            <p>关注汇保险</p>
                            <div class="fr">
                                <img src="./images/code.jpg" alt="">
                            </div>
                        </div>
                </div>
            </div>
            <div class="bottom">
                <div class="center">
                    保险业务经营许可证：260918000000800<span>|</span>浙江保保网络科技有限公司：91130100561995626
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
        go_url (url, number) {
            var prevPage = storage.get('prevPage');
            console.log(prevPage)
            if (prevPage === '1') {
                console.log('aa')
                window.location.href='./web/' + url + '?index=' + number;
            } else if (prevPage === '2') {
                window.location.href='./' + url + '?index=' + number;
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
    height:346px;
    background:#3e4240;
    .center{
        padding-top:35px;
        height:206px;
        border-bottom:1px solid #5b5e5d;
    }
    .left{
        padding-top:7px;
        width:278px;
        height:100%;
        color:#fff;
        // margin-right:208px;
        margin-right:230px;
        font-size:14px;
        ul{
           line-height:39px;
           margin-bottom:19px;
           li{
               cursor:pointer;
           }
        }
        P{
            line-height:26px;
        }
    }
    .middle{
        width:243px;
        height:100%;
        p{
            padding-top:12px;
            width:100%;
            text-align:center;
            color:#2dce8f;
            font-size:14px;
        }
        p:first-child{
            line-height:30px;
        }
        p:nth-child(2){
            line-height:30px;
        }
        p:nth-child(3){
            color:#fff;
            span{
                margin-left:13px;
                line-height:39px;
            }
            .iconfont{
                font-size:24px;
                position:relative;
                top:4px;
            }
        }
        p:nth-child(4){
            font-size:36px;
            line-height:50px;
        }
    }
    .right{
        width:120px;
        height:100%;
        p{
            padding-top:10px;
            text-align:left;
            line-height:35px;
            font-size:18px;
            color:#fff;
            // margin-bottom:30px;
            margin-bottom:20px;
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
        height:102px;
        border-bottom:5px solid #2ece90;
        .center{
            height:68px;
            line-height:68px;
            color:#fff;
            font-size:14px;
            padding-top:0;
            border-bottom:0;
            span{
                color:#5b5e5d;
                margin:0 26px;
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