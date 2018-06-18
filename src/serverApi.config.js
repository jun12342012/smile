const BASEURL = 'https://www.easy-mock.com/mock/5b2505b27c1ffe775c05b9e7/smileVue/';
const LOCALURL = 'http://localhost:3000/'
const URL ={
    getShopingMallInfo :BASEURL +'index',
    getGoodsInfo : BASEURL +'getGoodsInfo',
    registerUser: LOCALURL+'user/register', /**用户注册接口 */
}

module.exports = URL 