<template>
    <div id='commerce'>
        <Commercemenu
        v-bind:Active="isActive"/>
        <CommerceProfile
        v-if="userData.login!=''&&userData.userRole==` role='Бизнес'`"
        @exit="getUserInfo"/>
        <ModalEnterProfile
        v-else-if="userData.userRole==''"
        @addLoginToCookie="getUserInfo"/>
        <div class='container mt-5 text-center'
        v-else-if="userData.userRole==` role='Учащийся'`">
            <p class='h3 color-blue'>Вы зашли под аккаунтом учащегося<br>
            Данный раздел сайта вам не доступен, перезайти в аккаунт?
            </p>
            <button class='btn_default' @click="ExitNotCommerceAccount()">войти</button>
        </div>
        <div class='container mt-5 text-center'
        v-else>
            <p class='h3 color-blue'>Ваш аккаунт не является коммерческим<br>
            Обновить аккаунт до коммерческого?
            </p>
            <button class='btn_default' @click="UpdateAccount()">обновить</button>
        </div>
        <Footer/>
    </div>
</template>

<script>
//import axios from 'axios'
import Commercemenu from '@/components/Commercemenu.vue'
import ModalEnterProfile from '@/components/ModalEnterProfile.vue'
import Footer from '@/components/footer.vue'
import CommerceProfile from '@/components/CommerceProfile.vue'
export default {
  name: 'Profile',
  components: {
    Commercemenu,
    ModalEnterProfile,
    Footer,
    CommerceProfile
  },
  data(){
      return{
          isActive:[
              {Profile:true, Organization:false, Transaction:false}
          ],
          userData:{
            login:'1', 
            usertoken:'',
            userRole:` role='Бизнес'`
          }
          
      }
  },
  mounted(){
    //this.getUserInfo();
  },
  methods:{
      getUserInfo(){
          if(document.cookie){
              var userInfo=document.cookie.split(';');
              this.userData.login=userInfo[0];
              this.userData.usertoken=userInfo[1];
              this.userData.userRole=userInfo[2];
          }else{
              this.userData.login='';
              this.userData.usertoken='';
              this.userData.userRole='';
          }
      },
      ExitNotCommerceAccount(){
          document.cookie = document.cookie+"; max-age=0";
          this.getUserInfo();
      },
      UpdateAccount(){
          /*const path = 'http://26.173.145.160:5000/updateaccount';
            axios.post(path, this.userData)
            .then((res) => {
                this.userData=res.data;
            })*/
      }
  }
}
</script>