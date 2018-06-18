<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="text" >
               <div>
                    评估小组担心，DeepMind最终可能会使用Alphabet的资金并获取数据来“驱动垄断利润”。

                DeepMind目前并不与Google的母公司Alphabet交流数据，但审查小组主席Julian Huppert表示，它最终必须通过分享算法和数据或通过盈利来证明其价值。

                他表示，DeepMind应该致力于建立一种商业模式，既可以作为非营利公司，也可以得到“合理的利润”。

                “DeepMind和Alphabet之间有一个有趣的关系。我认为DeepMind已经非常有能力获得他们想要的自由，但最终他们必须向Alphabet董事会说明他们必须花费的资金、他们可以雇佣的员工以及各种其他流程，“他说。“我并不担心Alphabet正在阻止他们做他们想做的事情，但不能保证Alphabet董事会明年不会得出不同的结论和意见。”

                雷锋网了解到，DeepMind由Demis Hassabis和他的朋友Mustafa Suleyman及Shane Legg于2010年共同创立。他们的目标是推动人工智能技术解决世界上最复杂的问题。

                自4年前谷歌以4亿英镑收购它以来，它不定期地与“DeepMind for Google”项目合作。该公司设有一个独立部门DeepMind Health，专攻将机器学习应用于医疗保健。

                另外，DeepMind与Moorfields眼科医院、伦敦大学医院和伦敦帝国理工学院合作开发可分析视网膜和乳房X线照片的AI。
评估小组担心，DeepMind最终可能会使用Alphabet的资金并获取数据来“驱动垄断利润”。

                DeepMind目前并不与Google的母公司Alphabet交流数据，但审查小组主席Julian Huppert表示，它最终必须通过分享算法和数据或通过盈利来证明其价值。

                他表示，DeepMind应该致力于建立一种商业模式，既可以作为非营利公司，也可以得到“合理的利润”。

                “DeepMind和Alphabet之间有一个有趣的关系。我认为DeepMind已经非常有能力获得他们想要的自由，但最终他们必须向Alphabet董事会说明他们必须花费的资金、他们可以雇佣的员工以及各种其他流程，“他说。“我并不担心Alphabet正在阻止他们做他们想做的事情，但不能保证Alphabet董事会明年不会得出不同的结论和意见。”

                雷锋网了解到，DeepMind由Demis Hassabis和他的朋友Mustafa Suleyman及Shane Legg于2010年共同创立。他们的目标是推动人工智能技术解决世界上最复杂的问题。

                自4年前谷歌以4亿英镑收购它以来，它不定期地与“DeepMind for Google”项目合作。该公司设有一个独立部门DeepMind Health，专攻将机器学习应用于医疗保健。

                另外，DeepMind与Moorfield
                DeepMind Health的临床主管Dominic King表示，只负责医疗保健工作的员工就超过了100人。但DeepMind还没有从其健康项目中获得任何收入。
               </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" >

            </div>
            
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
   
    export default {
        data () {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView:'auto',
                    freeMode:true,
                    mousewheel:true,

                    
                  
                }
            }
        },
        components:{
            swiper,swiperSlide
        }
    }
</script>

<style scoped>
    .swiper{
        height: 300px;
        overflow: hidden;
    }
    .text{
        font-size: 18px;
        text-align: left;
        padding: 30px;
        height: auto;
        -webkit-box-sizing: border-box


    }
</style>