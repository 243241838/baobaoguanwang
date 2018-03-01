import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/special.scss';
import special from './special.vue'
var indexVue = new Vue({
    el: '#special',
    template: '<div><headCommon></headCommon><special></special><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'special': special
    }
})
