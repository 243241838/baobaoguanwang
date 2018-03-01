import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/productDetail.scss';
import productDetail from './productDetail.vue'
var indexVue = new Vue({
    el: '#productDetail',
    template: '<div><headCommon></headCommon><productDetail></productDetail><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'productDetail': productDetail
    }
})
