import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/industry.scss';
import industry from './industry.vue'
var indexVue = new Vue({
    el: '#industry',
    template: '<div><headCommon></headCommon><industry></industry><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'industry': industry
    }
})
