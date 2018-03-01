import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/boutiqueInsurance.scss';
import boutiqueInsurance from './boutiqueInsurance.vue'
var indexVue = new Vue({
    el: '#boutiqueInsurance',
    template: '<div><headCommon></headCommon><boutiqueInsurance></boutiqueInsurance><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'boutiqueInsurance': boutiqueInsurance
    }
})
