<template>
    <div id='students'>
        <Studentmenu
        v-bind:Active="isActive"/>
        <StudentEnterProfile
        v-if="userData.login==''"
        @addLoginToCookie="getUserInfo"/>
        <div class='container mt-5 text-center'
        v-else-if="userData.login!=''&&userData.userRole!=` role='Учащийся'`">
            <p class='h3 color-blue'>Вы зашли не под аккаунтом учащегося<br>
            Выполнить вход с другого аккаунта?
            </p>
            <button class='btn_default' @click="ExitNotStudentAccount()">войти</button>
        </div>
        <div class='container mt-5' v-else>
            <p class='h2 mb-5'>Ваш QR-код для оплаты питания:</p>
            <div class="text-center qrblock">
                <img v-bind:src="img">
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
//import axios from 'axios'
import Studentmenu from '@/components/Studentmenu.vue'
import StudentEnterProfile from '@/components/StudentEnterProfile.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'StudentCafes',
  components: {
    Studentmenu,
    StudentEnterProfile,
    Footer
  },
  data(){
      return{
          isActive:[
              {Profile:false, Cataloge:true, Pass:false}
          ],
          userData:{
            login:'', 
            usertoken:'',
            userRole:` role='Учащийся'`
          },
          img:''
      }
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
      getUserInfo(){
          if(document.cookie){
                var userCoockie=document.cookie.split(';');
                this.userData.login=userCoockie[0];
                this.userData.token=userCoockie[1];
                this.ShowQR();
          }else{
              this.userData.login='';
              this.userData.usertoken='';
              this.userData.userRole='';
          }
      },
      ExitNotStudentAccount(){
          document.cookie = document.cookie+"; max-age=0";
          this.getUserInfo();
      },
      ShowQR(){
          if(this.userData.userRole==` role='Учащийся'`){
            /*
            const path = 'http://26.173.145.160:5000/studentcafes';
            axios.post(path, this.userData)
            .then((res) => {
                this.img=res.data;
            })*/
            var user_temp_token=this.userData.usertoken.split(" token=");
            this.img='http://26.173.145.160:5000/send_qr?user_token='+user_temp_token[1];
          }
      }
  }
}
</script>
<style scoped>
.qrblock{
    margin: 0 auto;
}
</style>