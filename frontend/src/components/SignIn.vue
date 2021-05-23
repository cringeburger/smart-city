<template>
    <form class="row g-3" @submit.prevent="onSignin">
    <span class='InputHead mb-1 mistake'
            v-if="mistake=='uncorrectLogin'">Неправильный логин или пароль<br></span>


    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
        <label for="validationDefault1" class="form-label">Логин</label>
        <input type="text" class="form-control" id="validationDefault1" required v-model="serverData.login">
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
        <label for="validationDefault2" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="validationDefault2" required v-model="serverData.password">
    </div>
    <div class="col-12 text-center mb-2">
        <button class="btn btn-primary" type="submit">Вход</button>
    </div>
    </form>
</template>
<script>
import axios from 'axios'
export default {
name: 'SingIn',
  components: {
  },
  data(){
      return{
          serverData:{
            login: '',
            password: ''
          },
          mistake:''
      }
  },
  methods:{
      onSignin(){
        const path = 'http://26.173.145.160:5000/log_in';
        axios.post(path, this.serverData)
        .then((res) => {
            if (res.data=='wrong'){
                this.mistake='anotherLogin';
            }else{
                this.mistake='';
                document.cookie = "login="+res.data.login;
                document.cookie = "token="+res.data.token;
                document.cookie = "role="+res.data.role;
                console.log(res.data.login);
                console.log(document.cookie);
                this.$emit('addLoginToCookie');
            }
        })
      }
      
  }
}
</script>