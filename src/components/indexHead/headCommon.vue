<template>
    <div class="head">
       <div class="head-top">
           <div class="center">
                  <div class="logo fl"></div>
                  <div class="fr">
                       <a href="javascript:;">
                           下载APP
                           <span>
                               <img src="./images/or_code.jpg" alt="">
                           <span></span>
                       </span>
                        </a>
                       <a v-show="prevPage == 1" href="./web/about.html">关于我们</a>
                       <a v-show="prevPage == 2" href="../index.html">首页</a>
                  </div>
           </div>
       </div>
       <nav v-if="false">
           <div class="center">
                <div class="fl">
                    <ul>
                        <li v-for="(item,index) in nav">
                            <a @click="win_href(index,item.aUrl)" :class="{active:index1 == index}" v-text="item.name"></a>
                        </li>
                        
                    </ul>
                </div>
                <div class="fr">
                    <div class="left fl">
                            <input type="text" @keydown="show($event)" placeholder="请输入关键字">
                    </div>
                    <div class="right fr"><i class="iconfont">&#xe600;</i></div>
                </div>
           </div>
       </nav>
    </div>
</template>
<script>
import {Common, storage} from 'js/common';
export default {
    data () {
        return {
            index1: '0',
            prevPage: '',
            code: false,
            nav: [
                {name: '首页', aUrl: 'index.html'},
                {name: '车险分期', aUrl: 'fqCar.html'},
                {name: '特色专题', aUrl: 'special.html'},
                {name: '车险', aUrl: 'carInsurance.html'},
                {name: '财产险', aUrl: 'propertyInsurance.html'},
                {name: '意外险', aUrl: 'accidentInsurance.html'},
                {name: '健康险', aUrl: 'healthInsurance.html'},
                {name: '旅游险', aUrl: 'travelInsurance.html'}
            ]
        }
    },
    mounted () {
        // this.index_1();
        this.prevPage = storage.get('prevPage');
    },
    computed: {
    },
    methods: {
        index_1 () {
            let index = Common.getQueryString('index');
            if (index) {
                this.index1 = index;
            }
        },
        win_href (index, url) {
            if (url === 'index.html' && index === 0) {
                window.location.href = '../' + url + '?index=' + index;
            } else {
                window.location.href = '../web/' + url + '?index=' + index;
            }
            // var prevPage = storage.get('prevPage');
            // storage.set('prevPage', index);
            // console.log(prevPage, index)
            // if (parseInt(prevPage) === parseInt(index) && parseInt(prevPage) === 0) {
            //     window.location.href = url + '?index=' + index;
            // } else if (parseInt(prevPage) === parseInt(index) && parseInt(prevPage) !== 0) {
            //     window.location.href = url + '?index=' + index;
            // } else if (parseInt(prevPage) === 0 && parseInt(index) !== 0) {
            //     window.location.href = 'web/' + url + '?index=' + index;
            // } else if (parseInt(prevPage) !== 0 && parseInt(index) === 0) {
            //     window.location.href = '../' + url + '?index=' + index;
            // } else {
            //     window.location.href = '../web/' + url + '?index=' + index;
            // }
        },
        glide () {
            console.log('aa')
        },
        show (aa) {
            // console.log(aa.keyCode)
            if (aa.keyCode === 13) {
            //    console.log('aa')
            }
        }
    }
}
</script>
<style lang='scss'>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
body{
    font-family: "PingFang SC","Helvetica Neue",'Helvetica','Arial',"Hiragino Sans GB","Microsoft Yahei",'微软雅黑','STHeiti','华文细黑','sans-serif';
}
.head{
    width:100%;
    .head-top{  
        height:41px;
        background:#484c4b;
        .logo{
            width:261px;
            height:41px;
            background:url(./images/logo.jpg) no-repeat center;
            background-size:100% 100%;
        }
        .fr{
            font-size:14px;
            line-height:41px;
            position:relative;
            a{
                color:#fff;
            }
            a:first-child{
                margin-right:56px;
                display:inline-block;
            }
            a:first-child:hover{
                span{
                    display:block;
                }
            }
            span{
                display:none;
                background:#fff;
                position:absolute;
                left:-70px;;
                top:40.5px;
                z-index:2;
                img{
                    width:160px;
                    height:160px;
                    padding:10px;
                }
            }
        }
    }
    nav{
        height:61px;
        background:#fff;
        .fl{
            height:100%;
            line-height:61px;
            font-size:18px;
            ul{
                width:100%;
                height:100%;
            }
            li{
                float:left;
                margin-right:32px;
                cursor:pointer;
                a{
                    font-size:18px;
                    color:#484c4b;
                    padding-bottom:6px;
                    &.active{
                        border-bottom:2px solid #2ece90;
                    }
                }
                a:hover{ 
                    border-bottom:2px solid #2ece90
                }
            }
            li:last-child{
                margin-right:0;
            }
        }
        .fr{
           width:200px;
           height:38px;
           .left{
               width:162px;
               height:34px;
               padding:2px 0 2px 2px;
               background:#e3e3e3;
               margin-top:13px;
               font-size:14px;
               float:left;
               input{
                   width:100%;
                   height:100%;
                   padding-left:18px;
                   line-height:38px;
                   float:left;
                   border:0;
                   background:#fff;
                   outline:none;
               }
           }
           .right{
               width:36px;
               height:100%;
               margin-top:13px;
               background:#2ece90;
               line-height:38px;
               float:left;
               cursor:pointer;
               .iconfont{
                   display:block;
                   width:100%;
                   height:100%;
                   font-size:26px;
                   color:#fff;
                   line-height:40px;
                   text-align:center;
               }
           }
        }
    }
}
</style>