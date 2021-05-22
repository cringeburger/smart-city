<template>
    <form class="row g-3" @submit.prevent="onLogin">

    <span class='color-orange h5 mb-1 mistake'
        v-if="mistake=='uncorrectPassword'">В вашем пароле присутсвуют недопустимые символы<br></span>
    <span class='color-orange h5  mb-1 mistake'
        v-else-if="mistake=='uncorrectPasswords'">Пароли не совпадают<br></span>
    <span class='color-orange h5  mb-1 mistake'
        v-else-if="mistake=='anotherLogin'">Выбраный логин уже занят<br></span>
    <span class='color-orange h5  mb-1 mistake'
        v-else-if="mistake=='uncorrectFio'">ФИО написаны некорректно<br></span>

    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
        <label for="validationDefault01" class="form-label">ФИО</label>
        <input type="text" class="form-control" id="validationDefault01" required v-model="serverData.fio">
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
        <label for="validationDefault02" class="form-label">Логин</label>
        <input type="text" class="form-control" id="validationDefault02" required v-model="serverData.login">
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
        <label for="validationDefault03" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="validationDefault03" required v-model="serverData.password">
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
        <label for="validationDefault04" class="form-label">Повторите пароль</label>
        <input type="password" class="form-control" id="validationDefault04" required v-model="repassword">
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4">
        <label for="validationDefaultUsername" class="form-label">Почта</label>
        <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="email" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required v-model="serverData.email">
        </div>
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4">
        <label for="validationDefault05" class="form-label">Телефон</label>
        <input type="number" maxlength="20" class="form-control" id="validationDefault05" required v-model="serverData.telephone">
    </div>
    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
        <label class="form-check-label" for="invalidCheck2">
                Я согласен с политикой обработки персональных данных в соответсвии <a target="blank" href='http://www.consultant.ru/document/cons_doc_LAW_61801/'>с №152-ФЗ</a>
        </label>
        </div>
    </div>
    <div class="col-12 text-center mb-2">
        <button class="btn btn-primary" type="submit">Регистрация</button>
    </div>
    </form>
</template>
<script>
//import axios from 'axios'
export default {
name: 'LogIn',
  data(){
      return{
          serverData:{
              login: '',
              password: '',
              email: '',
              telephone: '',
              fio: '',
          },
          repassword:'',
          regularPL: /\w+/i,
          regularFio: /^[а-яА-ЯёЁ\s]+$/,
          mistake:''
      }
  },
  methods:{
      onLogin(){
          if(!this.regularPL.test(this.serverData.login)){
              this.mistake='uncorrectLogin';
          }else if(!this.regularPL.test(this.serverData.password)){
              this.mistake='uncorrectPassword';
          }else if (this.serverData.password!=this.repassword){
              this.mistake='uncorrectPasswords';
          }else if(!this.regularFio.test(this.serverData.fio)){
              this.mistake='uncorrectFio';
          }else{
              this.mistake='';
              this.LogInNewUser();
          }
      },
      LogInNewUser(){
        document.cookie=this.serverData.login;
        this.$emit('addLoginToCookie');
        /*const path = 'http://localhost:5000/login';
        axios.post(path, this.serverData)
        .then((res) => {
            if (res.data=='wrong'){
                this.mistake='anotherLogin';
            }else{
                this.mistake='';
                document.cookie=this.serverData.login;
                document.cookie=res.data;
                this.$emit('addLoginToCookie');
            }
        })*/
      }
  }
}
</script>