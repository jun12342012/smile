<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item ,index) in slide" :key="index">
                slider {{ item }}
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
                slide:[1,2,3,4,5,6],
                swiperOption:{
                    loop:true,
                    paginationType : 'fraction',
                    pagination:{
                        el:'.swiper-pagination',
                        type:'progressbar'
                        
                    },
                  
                }
            }
        },
        components:{
            swiper,swiperSlide
        }
    }
</script>

<style scoped>
    .swiper-slide{
        height: 4rem;
        text-align: center;

    }

    .swiper{
        height: 7rem;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
    }

</style>