import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/accidentInsurance.scss';
import accidentInsurance from './accidentInsurance.vue'
var indexVue = new Vue({
    el: '#accidentInsurance',
    template: '<div><headCommon></headCommon><accidentInsurance></accidentInsurance><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'accidentInsurance': accidentInsurance
    }
})
