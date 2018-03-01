import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/aptitude.scss';
import aptitude from './aptitude.vue'
var indexVue = new Vue({
    el: '#aptitude',
    template: '<div><aptitude></aptitude></div>',
    components: {
        'aptitude': aptitude
    }
})
