<template>
    <div id='body'>
       <img class="img1" v-show="number==1" src="./images/img1.png" alt="">
       <img class="img2" v-show="number==2" src="./images/img2.png" alt="">
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            number: ''
        }
    },
    created () {
        this.index();
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
        index () {
            this.number= Common.getQueryString('number');
        }
    }
}
</script>