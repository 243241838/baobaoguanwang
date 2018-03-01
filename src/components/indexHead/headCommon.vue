<template>
    <div class="head">
       <div class="head-top">
           <div class="center">
                 <div class="fl">
                     <img src="./images/logo.jpg" alt="">
                 </div>
                 <div class="fr">
                     <div class="right fr">
                         <div><img src="./images/code.png" alt=""></div>
                         <span>App下载</span>
                     </div>
                     <dl class="fl">
                         <dt class="fl"><i class="iconfont">&#xe68a;</i></dt>
                         <dd class="fl">
                             <p>电话</p>
                             <p>400-110-1866</p>
                         </dd>
                     </dl>
                 </div>
           </div>
       </div>
       <nav>
           <div class="center">
                <div>
                    <ul>
                        <li v-for="(item,index) in nav" @click="win_href(index,item.aUrl)" :class="{active:index1 == index}" v-text="item.name"></li>
                    </ul>
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
                {name: '精品保险', aUrl: 'boutiqueInsurance.html'},
                {name: '行业解决方案', aUrl: 'industry.html'},
                {name: '关于我们', aUrl: 'about.html'},
                {name: '诚招英才', aUrl: 'recruitment.html'},
                {name: '新闻资讯', aUrl: 'news.html'}
            ]
        }
    },
    mounted () {
        this.index_1();
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
<style lang='scss' scoped>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
.head{
    width:100%;
    .head-top{
        width:100%;
        height:107px;
        .center{
            >.fl{
                width:499px;
                height:58px;
                padding-top:24px;
                img{
                    width:100%;
                    height:58px;
                }
            }
            >.fr{
                >.right{
                    width:106px;
                    height:107px;
                    text-align:center;
                    border-left:1px solid #ccc;
                    border-right:1px solid #ccc;
                    line-height:20px;
                    color:#484c4a;
                    font-size:14px;
                    img{
                        padding-top:13px;
                        width:62px;
                        height:62px;
                    }
                }
                >dl{
                    width:162px;
                    height:42px;
                    padding:35px 35px 0 0;
                    dt{
                        width:38px;
                        height:38px;
                        border:1px dashed #2dce8f;
                        border-radius:7px;
                        text-align:center;
                        margin-right:27px;
                        .iconfont{
                             font-size:18px;
                             line-height:38px;
                             color:#2dce8f;
                        }
                    }
                    dd{
                        font-size:14px;
                        color:#a8aeac;
                        line-height:20px;
                        p:last-child{
                            color:#484c4a;
                        }
                    }
                }
            }
        }
    }
    nav{
        height:56px;
        background:#2dce8f;
        >div{
            height:100%;
            font-size:18px;
            li{
                float:left;
                cursor:pointer;
                width:170px;
                height:56px;
                line-height:56px;
                text-align:center;
                font-size:18px;
                color:#fff;
                &.active{
                    background:#1ea973;
                }
            }
        }
    }
}
</style>