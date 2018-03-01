<template>
    <div id='body'>
        <div class="banner">
            <div class="center">
                 <div class="top">
                     <p v-text="banner0.head"></p>
                     <p v-text="banner0.text"></p>
                 </div>
                 <div class="bottom">
                     <div @click="href_url(item.list)" v-for="(item,index) in banner">
                            <img :src="item.url" alt="">
                            <p v-text="item.head"></p>
                            <p v-text="item.text"></p>
                            <p v-text="item.text1"></p>
                            <p v-show="index==banner.length-1" v-text="item.text2"></p>
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
                head: '与时俱进“贴心”保',
                text: '懂你不是两三天'
            },
            banner: [ // banenr下图片
                {url: require('./images/banner1.jpg'), head: '出游无忧', text: '不负春光', text1: '不负卿', list: 'l1'},
                {url: require('./images/banner2.jpg'), head: '温馨小家', text: '温暖保障', text1: '守护全家', list: 'l2'},
                {url: require('./images/banner3.jpg'), head: '', text: '', text1: '', list: '', text2: '敬请期待'}
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
        href_url (list) {
            if (list) {
                window.location.href = 'specialList.html?index=2&list='+ list;
            }
        }
    }
}
</script>