import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/specialList.scss';
import specialList from './specialList.vue'
var indexVue = new Vue({
    el: '#specialList',
    template: '<div><headCommon></headCommon><specialList></specialList><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'specialList': specialList
    }
})
