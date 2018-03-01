import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/fqCar.scss';
import fqCar from './fqCar.vue'
var indexVue = new Vue({
    el: '#fqCar',
    template: '<div class="mu"><headCommon></headCommon><fqCar></fqCar><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'fqCar': fqCar
    }
})
