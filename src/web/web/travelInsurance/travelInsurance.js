import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/travelInsurance.scss';
import travelInsurance from './travelInsurance.vue'
var indexVue = new Vue({
    el: '#travelInsurance',
    template: '<div><headCommon></headCommon><travelInsurance></travelInsurance><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'travelInsurance': travelInsurance
    }
})
