<template>
    <div class='container mt-5'>
        <div class='row mt-5'>
            <div class='col-12 text-center'>
                <p class='h2 color-blue important-text'>
                    Похоже вы ещё не вошли в свой профиль, исправим?
                </p>
                <button class='btn_default' @click="modalWindow()">Войти</button>
            </div>
        </div>
        <StudentModalEnter v-if="modal"
        @addLoginToCookie="addLoginToCookie"/>
    </div>
</template>
<script>
import StudentModalEnter from '@/components/StudentModalEnter.vue'
export default {
  name: 'StudentEnterProfile',
  components: {
    StudentModalEnter
  },
  data(){
      return{
          modal:false
      }
  },
  mounted(){
      this.modalWindow();
  },
  methods:{
      modalWindow(){
          if(this.modal==true){
            document.getElementById('modal').style.display='block'; 
          }else{
            this.modal=true;    
          }
      },
      addLoginToCookie(){
          this.$emit('addLoginToCookie');
      }   
  }
}
</script>
