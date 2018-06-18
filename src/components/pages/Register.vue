<template>
    <div>
        <van-nav-bar
            title="用户注册"
            left-text='返回'
            left-arrow
            @click-left="goBack"
        />
        <div class="register-panel">
            <van-field
                v-model="username"
                label='用户名'
                icon='clear'
                placeholder="请输入用户名"
                required
                @click-icon="userName=''"
            />
            
            <van-field
                v-model="password"
                type='password'
                label='密码'
                required
            />

            <div class="register-button">
                <van-button type="primary" size="large" @click="axiosRegisterUser"> 马上注册 </van-button>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serverApi.config.js'
    export default {
       name:'Register',
       data () {
           return {
             username:'',
             password:''
          }
       },
       methods:{
           goBack () {
               this.$router.go(-1)
           },
           axiosRegisterUser(){
               axios({
                   url:url.registerUser,
                   type:'post',
                   data:{
                        username:this.username,
                        password:this.password
                   },
               })
               .then(Response => {
                   console.log(Response)
               })
               .catch(res => {
                   console.log(res)
               }) 
           }
       },
    }
</script>

<style scoped>
    .register-panel{
        width: 96%;
        border-radius: 5px;
        margin: 20px auto;
        padding-bottom: 80px;
    }
    .register-button {
        padding-top: 10px;
    }

</style>