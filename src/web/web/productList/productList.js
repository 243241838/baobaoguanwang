import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/productList.scss';
import productList from './productList.vue'
var indexVue = new Vue({
    el: '#productList',
    template: '<div><headCommon></headCommon><productList></productList><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'productList': productList
    }
})
