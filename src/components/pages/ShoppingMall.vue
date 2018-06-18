<template>
    <div>
        <div class="search-bar">
            <van-row class="test-row">
                <van-col span="3">
                    <img :src="locationIcon" width="60%" class="location-icon">
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5"> 
                    <van-button size="mini">查找</van-button>    
                 </van-col>
            </van-row>
        </div>
        
        <div class="swiper-area">
           <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item,index) of bannerPicArray" :key="index" > 
                    <img v-lazy="item.image" width="100%" >
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type bar  -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- adBanner area -->
        <div>
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
        </div>
        <!-- 商品推荐1 -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body ">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) of recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFilter }}(￥{{item.mallPrice | moneyFilter }})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <floor-component :floorData="floor1" :floorName="floorName.floor1"></floor-component>
        <floor-component :floorData="floor2" :floorName="floorName.floor2"></floor-component>
        <floor-component :floorData="floor3" :floorName="floorName.floor3"></floor-component>

        <!-- <swiper-default></swiper-default>
        <swiper-default1></swiper-default1>
        <swiper-default2></swiper-default2>
        <swiper-text> </swiper-text>  -->

        <!-- hot热卖商品 -->
      
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
       
            <van-list>
                <van-row gutter="20">
                    <van-col span="12" v-for="(item ,index) in hotGoods" :key="index">
                         <goods-info-component :goodsImage="item.image" :goodsName="item.name"  :goodsPrice="item.goodsPrice"></goods-info-component>   
                    </van-col>
                </van-row>
            </van-list>
            </div>
        </div>
 
        

    </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 import SwiperDefault from '../swiper/SwiperDefault'
 import SwiperDefault1 from '../swiper/SwiperDefault1'
 import SwiperDefault2 from '../swiper/SwiperDefault2'
 import SwiperText from '../swiper/SwiperText'
 import { toMoney } from '@/filter/moneyFilter'
 import FloorComponent from '../component/FloorComponent'
 import goodsInfoComponent from '../component/goodsInfoComponent'
 import  url  from '@/serverApi.config.js'
export default {
    data() {
        return {
            msg: 'ShoppingMall',
            locationIcon:require('../../assets/images/location.png'),
            bannerPicArray:[],
            category:[],
            adBanner:'',
            recommendGoods:[],
            swiperOption:{
                slidesPerView:3,
            },
            floor1:[],
            floor2:[],
            floor3:[],
            floorName:{},
            hotGoods:[], //热卖商品

        }
    },
    filters:{
        moneyFilter (money) {
            return toMoney(money)
        }
    },
    components:{swiper, swiperSlide,SwiperDefault,SwiperDefault1,SwiperDefault2,SwiperText,FloorComponent,goodsInfoComponent},
    created(){
        axios({
            url:url.getShopingMallInfo,
            method:'get',
        })
        .then((result) => {
            console.log(result)
            if(result.status == 200 ) {
                console.log(result)
                this.category=result.data.data.category;
                this.adBanner = result.data.data.advertesPicture;
                this.bannerPicArray = result.data.data.slides;
                this.recommendGoods = result.data.data.recommend;
                this.floor1=result.data.data.floor1;
                this.floor2=result.data.data.floor2;
                this.floor3=result.data.data.floor3;
                this.floorName = result.data.data.floorName;
                this.hotGoods = result.data.data.hotGoods
                console.log(this.floor1)
                // this.floor1_0=this.floor1[0]
                // this.floor1_1=this.floor1[1]
                // this.floor1_2=this.floor1[2]
            }
            
        }).catch((err) => {
            console.log(err)
        });

    }
}
</script>


<style scoped>
    .search-bar {
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input {
        width: 100%;
        height: 1.3rem;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid #fff !important;
        background-color: #e5017d;
        color: #fff;
    }
    .location-icon {
        padding-top: 0.2rem;
        padding-left: .3rem; 
    }
    .swiper-area{
         clear: both;
         width: 100%;
         height: 0;
         padding-bottom: 44%;
         overflow: hidden;
    }

    .type-bar {
        background-color: #fff;
        margin: 0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .type-bar div {
        padding: .3rem;
        font-size: 12px;
        text-align: center
    }

    .recommend-area{
        background-color: #fff;
        margin-top:.3rem;

    }
    .recommend-title{
        border-bottom: 1px solid #eee;
        font-size: 14px;
        padding: .2rem;
        color: #e5017d;
    }
    .recommend-body{
        border-bottom: 1px solid #eeeeee;
    }
    .recommend-item{
        width: 99%;
        border-right:1px solid #eee;
        text-align: center;
        font-size: 12px;
    }
    .hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
   
</style>

