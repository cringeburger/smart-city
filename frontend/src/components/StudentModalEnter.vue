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
                            <SignIn
                            @addLoginToCookie="addLoginToCookie"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SignIn from '@/components/SignIn.vue'
export default {
    components:{
        SignIn,
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