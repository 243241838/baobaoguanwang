import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/carInsurance.scss';
import carInsurance from './carInsurance.vue'
var indexVue = new Vue({
    el: '#carInsurance',
    template: '<div><headCommon></headCommon><carInsurance></carInsurance><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'carInsurance': carInsurance
    }
})
