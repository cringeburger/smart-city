<template>
    <div id='students'>
        <Studentmenu
        v-bind:Active="isActive"/>
        <StudentEnterProfile
        v-if="userData.login==''"
        @addLoginToCookie="getUserInfo"/>
        <div class='container mt-5 text-center'
        v-else-if="userData.login!=''&&userData.userRole!='student'">
            <p class='h3 color-blue'>Вы зашли не под аккаунтом учащегося<br>
            Выполнить вход с другого аккаунта?
            </p>
            <button class='btn_default' @click="ExitNotStudentAccount()">войти</button>
        </div>
        <div class='container mt-5' v-else>
            <p class='h2 mb-5'>Ваш QR-код для оплаты транспорта:</p>
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
  name: 'StudentPass',
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
            userRole:''
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
              var userInfo=document.cookie.split(';');
              this.userData.login=userInfo[0];
              this.userData.usertoken=userInfo[1];
              this.userData.userRole=userInfo[2];
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
          if(this.userData.userRole=='student'){
            /*
            const path = 'http://localhost:5000/studenttransport';
            axios.post(path, this.userData)
            .then((res) => {
                this.img=res.data;
            })*/
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