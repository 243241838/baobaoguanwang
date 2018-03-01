import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/news.scss';
import news from './news.vue'
var indexVue = new Vue({
    el: '#news',
    template: '<div><headCommon></headCommon><news></news><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'news': news
    }
})
