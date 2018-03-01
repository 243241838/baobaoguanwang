import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/recruitment.scss';
import recruitment from './recruitment.vue'
var indexVue = new Vue({
    el: '#recruitment',
    template: '<div><headCommon></headCommon><recruitment></recruitment><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'recruitment': recruitment
    }
})
