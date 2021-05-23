<template>
    <div id='MyCommerce' class='paddingbottomm pb-5'>
        <div class='contariner mt-4'>
            <div class='row'>
                <div class='col-12 text-center'>
                    <p class='h4'>Мои организации</p>
                </div>
                <div class='col-12 text-center'
                    v-if="UserData.org[0].name==''">
                    <p class='h4 text-blue'>У вас еще нет организации</p>
                    <button class='btn_default' @click="NewOrganization()">Создать</button>
                </div>
                <div class='col-12 mt-5'
                v-else>
                    <div class='row'>
                        <BigOrganization
                            v-for="org of UserData.org" :key="org.id"
                            v-bind:org="org"/>
                        <div class='col-12 text-center'>
                            <button class='btn_default' @click="NewOrganization()">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewOrganization
            v-if="NewOrganizationWindow"
            @updateOrganization="updateOrganization"/>
    </div>
</template>
<script>
import axios from 'axios'
import BigOrganization from '@/components/BigOrganization.vue'
import NewOrganization from '@/components/NewOrganization.vue'
export default {
    name:'UserProfile',
    components:{
        NewOrganization,
        BigOrganization
    },
    data(){
        return{
            UserData:{
                org:[
                    {name:'Интертамент', type:'Кинотеатр', rating:'4.3', adress:'Новороссийк, Сухумское ш., 7', img:'https://i.ytimg.com/vi/dbqTDWbgb-0/maxresdefault.jpg',
                     smallcontent:'Отличный кинотеатр в центре города с удобными залами и большими экранами. Только IMAX!', 
                     link:'1', systname:'cinema'},
                     {name:'У Мо', type:'Ресторан', rating:'4.8', adress:'Спринфилгд', img:'https://avatars.mds.yandex.net/get-zen_doc/1592433/pub_5dd2543640dedc1571d50237_5dd26248136c034ec18085f8/scale_1200',
                     smallcontent:'Семейный ресторан для вечернего досуга!', 
                     link:'1', systname:'cafe'},
                     {name:'Дом Картмана', type:'Музей', rating:'5', adress:'Полушкина роща, д.5', img:'https://i.ytimg.com/vi/ilou5uztZx4/maxresdefault.jpg',
                     smallcontent:'Детский музей, среднее время осмотра 2 часа, для детей- аниматор, для родителей- лаунж зона, приходите, у нас интересно!', 
                     link:'1', systname:'museum'}
                ]
            },
            userInfo:{
                login:'',
                token:'',
                role:''
            },
            NewOrganizationWindow:false
        }
    },
    mounted(){
       //this.getUserData();
    },
    methods:{
        getUserData(){
          var userCoockie=document.cookie.split(';');
            this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            const path = 'http://26.173.145.160:5000/commerceOrganization';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData=res.data;
            })
        },
        NewOrganization(){
            if(!this.NewOrganizationWindow){
                this.NewOrganizationWindow=true;
            }else{
                document.getElementById('newOrganizationWindow').style.display='block';
            }
        }
    }
}
</script>