import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/download.scss';
import download from './download.vue'
var indexVue = new Vue({
    el: '#download',
    template: '<div><download></download></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'download': download
    }
})
