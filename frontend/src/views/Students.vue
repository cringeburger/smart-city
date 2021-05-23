<template>
    <div id='students'>
        <Studentmenu
        v-bind:Active="isActive"/>
        <StudentProfile
        v-if="login!=''&&userRole==` role='Учащийся'`"
        @exit="getUserInfo"/>
        <StudentEnterProfile
        v-else-if="userRole==''"
        @addLoginToCookie="getUserInfo"/>
        <div class='container mt-5 text-center'
        v-else>
            <p class='h3 color-blue'>Вы зашли не под аккаунтом учащегося<br>
            Выполнить вход с другого аккаунта?
            </p>
            <button class='btn_default' @click="ExitNotStudentAccount()">войти</button>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Studentmenu from '@/components/Studentmenu.vue'
import StudentEnterProfile from '@/components/StudentEnterProfile.vue'
import Footer from '@/components/footer.vue'
import StudentProfile from '@/components/StudentProfile.vue'
export default {
  name: 'Profile',
  components: {
    Studentmenu,
    StudentEnterProfile,
    Footer,
    StudentProfile
  },
  data(){
      return{
          isActive:[
              {Profile:true, Cataloge:false, Pass:false}
          ],
          login:'login', 
          usertoken:'',
          userRole:` role='Учащийся'`
      }
  },
  mounted(){
    //this.getUserInfo();
  },
  methods:{
      getUserInfo(){
          if(document.cookie){
            var userCoockie=document.cookie.split(';');
            this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            this.userRole.token=userCoockie[2];
          }else{
              this.login='';
              this.usertoken='';
              this.userRole='';
          }
      },
      ExitNotStudentAccount(){
          document.cookie = document.cookie+"; max-age=0";
          this.getUserInfo();
      }
  }
}
</script>