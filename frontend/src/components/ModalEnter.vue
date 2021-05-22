<template>
    <div id="modal" class='justify-content-center' aria-hidden="true">
        <div class='overlay-content'>
            <div class='container'>
                <div class='card modal-card'>
                    <div class='row'>
                        <div class='col-11 text-center mt-2 mt-md-4'>
                            <p class='important-text color-blue h4'>
                                Для продолжения выполните вход
                            </p>
                        </div>
                        <div class='col-1 text-center mt-2 mt-md-4'>
                            <button class='btn' @click="CloseModalWindow()"><span class='color-orange h2'>&times;</span></button>
                        </div>
                        <div class='col-12 text-center'>
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active h5" id="nav-signin-tab" data-bs-toggle="tab" data-bs-target="#nav-signin" type="button" role="tab" aria-controls="nav-signin" aria-selected="true">Вход</button>
                                    <button class="nav-link h5" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="false">Регистрация</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-signin-tab">
                                    <SignIn
                                    @addLoginToCookie="addLoginToCookie"/>
                                </div>
                                <div class="tab-pane fade" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                                    <LogIn
                                    @addLoginToCookie="addLoginToCookie"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SignIn from '@/components/SignIn.vue'
import LogIn from '@/components/LogIn.vue'
export default {
    components:{
        SignIn,
        LogIn
    },
    data(){
        return{
           
        }
    },
    mounted(){
        this.ModalWindow();
    },
    methods:{
        ModalWindow(){
            document.getElementById('modal').style.display='block';
        },
        CloseModalWindow(){
            document.getElementById('modal').style.display='none';
        },
        addLoginToCookie(){
          this.$emit('addLoginToCookie');
        }
    }
}
</script>
<style scoped>
#modal{
    min-width: 100% !important;
    min-height: 100% !important;
    z-index: 999;
    background: #d7dbff88;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    overflow-x: hidden;
    transition: 0.5s;
}
.overlay-content{
    position: absolute !important;
    top: 10% !important;
    margin-top:25px;
    width: 100%;
}
.btn{
    padding: 0 !important;
}
.row{
    --bs-gutter-x: 0 !important;
}
</style>