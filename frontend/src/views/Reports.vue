<template>
    <div id='Reports' class='paddingbottomm'>
        <Menu
        v-bind:Active="isActive"/>
        <div class='contariner mt-4'>
            <div class='row'>
                <div class='col-12 text-center'>
                    <p class='h4'>Ваши отзывы и пожелания</p>
                    <p class='h4'>Это абсолютно анонимно, мы не отправляем ваши данные!</p>
                </div>
                <div class='col-12 col-md-8 offset-md-2 col-xxl-6 offset-xxl-3'>
                    <div class='card'>
                        <form @submit="SendReports">
                            <div class='row'>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <label for="exampleFormControlTextarea1" class="form-label h5"><span class='color-white'>Ваш отзыв или пожелание</span></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" maxlength="500" v-model="serverData.Text"></textarea>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <p class='h4 color-white'>Если вы хотите, чтобы с вами связались, оставьте вашу почту или телефон</p>
                                    <label for="validationDefaultUsername" class="form-label"><span class='color-white'>Почта</span></label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="email" class="form-control" id='validationDefaultUsername' aria-describedby="inputGroupPrepend2" v-model="serverData.email">
                                    </div>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <label for="validationDefault05" class="form-label"><span class='color-white'>Телефон</span></label>
                                    <input type="number" maxlength="20" class="form-control" id="validationDefault05" v-model="serverData.telephone">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <p class='h4 color-white'>Так же вы можете загрузить файл к вашему отзыву</p>
                                    <input type="file" class="form-file-input" id="customFile2" ref="file2" @change="UploadImg()">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2 mb-2'>
                                   <button class='btn btn-primary' type='submit'>Отправить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Profile',
  components: {
    Menu,
    Footer
  },
  data(){
      return{
          isActive:[
              {Home:false, Cataloge:true, Profile:false}
          ],
          serverData:{
              text:'', email:'', telephone:''
          },
          file:''
      }
  },
  methods:{
      UploadImg(){

      }
  }
}
</script>
<style scoped>
.card{
    margin: 0 auto;
    background: #7640a677;
    border: 1px solid #7740A6;
}
</style>