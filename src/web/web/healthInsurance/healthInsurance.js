import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/healthInsurance.scss';
import healthInsurance from './healthInsurance.vue'
var indexVue = new Vue({
    el: '#healthInsurance',
    template: '<div><headCommon></headCommon><healthInsurance></healthInsurance><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'healthInsurance': healthInsurance
    }
})
