<template>
    <div id='body'>
    </div>
</template>
<script>
import {Common, storage, valid} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
        }
    },
    created () {
        storage.set('prevPage', '2');
        this.download()
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
        download () {
            if (valid.isIOS()) {
                window.location.href = 'https://itunes.apple.com/cn/app/id1317655178?mt=8';
            } else if (valid.isAndroid()) {
                window.location.href = 'http://owx209l11.bkt.clouddn.com/hbx-update-release.apk';
            }
        }
    }
}
</script>