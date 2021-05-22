<template>
    <div id="modal" class='justify-content-center' aria-hidden="true">
        <div class='overlay-content'>
            <div class='container'>
                <div class='card modal-card'>
                    <div class='row'>
                        <div class='col-1 offset-11 text-center mt-md-4'>
                            <button class='btn' @click="CloseModalWindow()"><span class='color-orange h2'>&times;</span></button>
                        </div>
                        <div class='col-12 mt-4 mb-5 text-center'>
                            <p class='h2'><span class='important-text'>Настройки&nbsp;</span>
                            <span class='color-orange'><i class="fa fa-cog" aria-hidden="true"></i></span></p>
                        </div>
                        <div class='col-12 mt-4 text-center'>
                            <hr>
                            <button class='btn' @click="Exit()">
                                <p class='h2'><span class='important-text'>Выход&nbsp;</span>
                                <span class='color-orange'><i class="fa fa-sign-out" aria-hidden="true"></i></span></p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{
    },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        CloseModalWindow(){
          document.getElementById('modal').style.display='none';
        },
        Exit(){
          document.cookie = document.cookie+"; max-age=0";
          this.$emit('exit');
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
    display: block;
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