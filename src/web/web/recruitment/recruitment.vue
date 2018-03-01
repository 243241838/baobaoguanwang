<template>
    <div id='body'>
        <div class="banner" ref="banner">
             <img id="img" @load="imgload()" src="./images/banner1.jpg" alt="">
             <div class="center"> 
                 <p>寻找与众不同的‘你’</p>
                 <p>首页<span>></span>招聘平台</p>
              </div> 
        </div>
        <div class="recruitment">
            <div class="center">
                <div class="left fl">
                    <ul>
                        <li v-for="(item, index) in position" @click="isshow(item, index)">
                            <p v-show="index == isIndex"></p><span v-text="item"></span>
                        </li>
                    </ul>
                </div>
                <div class="right fr">
                    <div class="top">
                       <p v-text="text"></p>
                    </div>
                    <div class="bottom">
                        <div class="head">
                            <p>招聘邮箱：<span>jinzhuyou@lianqiangroup.com</span></p>
                        </div>
                        <div v-for="(item, index) in destoon_job_data" v-show="isIndex==index">
                            <div class="middle">
                                <h3>岗位职责：</h3>
                                <p v-for="(itm, index) in item.responsibility"><span v-text="index + 1 + '、'"></span><span v-text="itm"></span></p>
                            </div>
                            <div class="middle">
                                <h3>岗位要求：</h3>
                                <p v-for="(itm, index) in item.ask_for"><span v-text="index + 1 + '、'"></span><span v-text="itm"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            position: ['保险产品高级专员/产品专家', '高级运营专员／运营专家', '资深业务专员／业务专家', '高级产品经理'],
            isIndex: 0,
            text: '',
            destoon_job_data: [
                {
                    responsibility: [
                        '负责保险产品的洽谈与设计，结合不同行业场景，形成产品方案，与业务沟通产品，与核保沟通产品报价，实现保险产品的销售;',
                        '负责市场竞品分析，确保上线推广的保险产品处于业内领先水平;',
                        '负责在产品开发前与需求共同制定需求文档，并交付给研发和测试团队，推进产品的在线需求满足;',
                        '负责市场情况调研，提炼行业需求或客户需要，编制产品服务解决方案;',
                        '负责产品培训及成功经验的分享，推动行业市场拓展;',
                        '有较好的保险公司核保与业务人脉资源；'
                    ],
                    ask_for: [
                        '本科或以上学历，3年以上寿险或财险产品工作经验，1 年以上互联网公司从业经验;',
                        '有保险公司或保险经代公司产险、意健险核保或产品经理或精算经验;',
                        '保险公司三级以上机构，保险经代总公司机构从业经验;',
                        '具有较强的表达、沟通能力，能够和不同的角色沟通;',
                        '激情、有担当，思维活跃，具有并行任务的处理能力，抗压性强，善于总结、思考，较强的主动学习能力；',
                        '熟练运用办公系统软件，掌握统计和量化分析方法；'
                    ]
                },
                {
                    responsibility: [
                        '完善公司互联网商务运营体系建设，协助制定经营方针及制定渠道合作模式;',
                        '负责互联网保险产品的对外运营、推广工作的整理策划;',
                        '在新的传播方式下，以产品为落脚点，创新运营模式、制定线上线下运营计划，并落地实施;',
                        '研究客户画像，不断优化运营推广方式，实现阶段性目标和成果;',
                        '通过精准的口碑传播、专业的知识性推广，吸引客户主动购买保险产品;',
                        '制定相应的用户、活动、品牌等各类运营方案，推动业务指标的增长，提高平台流量及成交量;',
                        '协助负责平台品牌的建设与维护；'
                    ],
                    ask_for: [
                        '本科及以上学历，3年以上保险市场、公关、互联网运营等相关领域经验;',
                        '熟悉并热爱互联网行业，乐于拥抱变化，具备3年以上内容运营、新媒体运营、活动运营经验;',
                        '善于学习，能够理解互联网保险的商业模式，不断优化运营模式;',
                        '敏感的市场洞察能力，能够发现新业务的场景和机会点，推进互联网保险的在线化发展;',
                        '较好的团队管理、资源协调能力及品牌建设能力；'
                    ]
                },
                {
                    responsibility: [
                        '根据公司发展战略，拓展寿险和财产险的业务渠道，完成业务伙伴的挑选，业务的拓展、维护与协调;',
                        '负责互联网销售渠道的拓展，渠道商的联络、考评、筛选、 淘汰和更新工作;',
                        '搜集和分析市场产品信息，搜集渠道和客户需求，回顾产品销售情况，制定产品与推广目标;',
                        '制定产品销售策略、激励政策，确保业务持续增长;',
                        '负责对外客户培训、单证的录入、核对、结算、理赔、维护等运营管理;',
                        '做好与保险公司合作关系的日常维护和信息沟通等；'
                    ],
                    ask_for: [
                        '本科及以上学历，保险学、经济学、市场营销、电子商务等 相关经济类专业优先；',
                        '五年以上保险行业从业经验，两年以上保险经纪、代理、营销、渠道等经验;',
                        '具有敏锐的市场洞察力，分析和解决问题能力，较强的数据分析和整理能力;',
                        '有强烈的事业心和责任感，具备良好的人际交往、社会活动能力及公关谈判能力;',
                        '对工作有激情、执着、敬业, 思维清晰、活跃，形象好，气质佳;',
                        '能够熟练应用 office 等办公软件，具备一定的写作能力；'
                    ]
                },
                {
                    responsibility: [
                        '负责和保险产品、业务沟通，获取新产品项目需求，撰写产品需求文档，绘制产品原型；',
                        '协调开发资源，开发排期，编制项目计划；',
                        '识别项目风险，把控项目范围，负责开发进度管理以及监控项目按计划实施及交付；',
                        '处理紧急突发事件，负责技术内外部的协调以保证项目的实施、问题沟通、资源协调；',
                        '制定项目管理流程标准与过程管理制度，制定合理的项目绩效标准，制定及推进标准项目流程，推进开发质量体系标准；',
                        '负责对需求进行调研分析，不断优化产品，提升产品质量，提高用户活跃度；'
                    ],
                    ask_for: [
                        '3年以上互联网金融、互联网保险产品从业经验；',
                        '了解保险相关业务知识和保险产品开发设计逻辑；',
                        '独立主导运作过至少2款互联网保险产品；',
                        '能够比较独立的输出高质量的产品设计，包括但不限于流程、原型、文档；',
                        '熟悉互联网产品整体实现过程，有敏锐的市场洞察能力，严密的逻辑分析能力，良好的沟通协作能力，以及一定的技术理解能力；',
                        '一定的抗压能力，健康乐观的心态；'
                    ]
                }
            ]

        }
    },
    created () {
        storage.set('prevPage', '2');
    },
    mounted () {
        this.text = this.position[this.isIndex]
    },
    computed: {
    },
    watch: {
    },
    methods: {
        imgload () {
            this.$refs.banner.style.height = $('#img').height() + 'px';
        },
        isshow (item, index) {
            this.text = item;
            this.isIndex = index;
        }
    }
}
</script>