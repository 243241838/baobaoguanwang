import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/propertyInsurance.scss';
import propertyInsurance from './propertyInsurance.vue'
var indexVue = new Vue({
    el: '#propertyInsurance',
    template: '<div><headCommon></headCommon><propertyInsurance></propertyInsurance><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'propertyInsurance': propertyInsurance
    }
})
