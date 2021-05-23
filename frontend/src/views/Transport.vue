<template>
    <div id='students'>
        <Menu
        v-bind:Active="isActive"/>
        <div class='container mt-5'>
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
import Menu from '@/components/Menu.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'StudentPass',
  components: {
    Menu,
    Footer
  },
  data(){
      return{
          isActive:[
              {Home:false, Cataloge:true, Profile:false}
          ],
          userData:{
            login:'', 
            usertoken:''
          },
          img:'',
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
      ShowQR(){
        {
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