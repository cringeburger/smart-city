<template>
    <div id='profile'>
        <Menu
        v-bind:Active="isActive"/>
        <UserProfile
        v-if="login!=''"
        @exit="getUserInfo"/>
        <ModalEnterProfile
        v-else
        @addLoginToCookie="getUserInfo"/>
        <Footer/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import ModalEnterProfile from '@/components/ModalEnterProfile.vue'
import Footer from '@/components/footer.vue'
import UserProfile from '@/components/UserProfile.vue'
export default {
  name: 'Profile',
  components: {
    Menu,
    ModalEnterProfile,
    Footer,
    UserProfile
  },
  data(){
      return{
          isActive:[
              {Home:false, Cataloge:false, Profile:true}
          ],
          login:'', 
          usertoken:''
      }
  },
  mounted(){
      this.getUserInfo();
  },
  methods:{
      getUserInfo(){
          if(document.cookie){
              var userInfo=document.cookie.split(';');
              this.login=userInfo[0];
              this.usertoken=userInfo[1];
          }else{
              this.login='';
              this.usertoken='';
          }
      }
  }
}
</script>