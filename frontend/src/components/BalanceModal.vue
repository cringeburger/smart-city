<template>
    <div id="balancemodal" class='justify-content-center' aria-hidden="true">
        <div class='overlay-content'>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 col-md-6 offset-md-3 text-center mt-4'>
                        <div class='card usercard'>
                            <div class='row'>
                                <div class='col-1 offset-11 text-center mt-md-4'>
                                    <button class='btn' @click="CloseModalWindow()"><span class='color-orange h2'>&times;</span></button>
                                </div>
                            </div>
                            <div class='col-12 text-center'>
                                <p class='h2 important-text color-white'>Пополнение</p>
                            </div>
                            <div class='col-12'>
                                <div class='card usercard'>
                                    <div class='row text-center mt-2'>
                                        <div class='col-6'>
                                                <span class='color-white h2 important-text'>{{card.balance}}</span>
                                                <span class='color-orange h2 important-text'><i class="fa fa-rub" aria-hidden="true"></i></span>
                                        </div>
                                        <div class='col-6'>
                                            <span class='color-white h2 important-text'>{{card.bonuce}}</span>
                                            <span class='color-orange h2 important-text'><i class="fa fa-bold" aria-hidden="true"></i></span>
                                        </div>
                                        <div class='col-12'>
                                            <img class='img-fluid' src="https://cdn.discordapp.com/attachments/824547962821541888/845612351633883176/5.png"/>
                                        </div>
                                        <div class='col-12'>
                                            <p class='color-white h2 important-text mb-2'>{{card.number}}</p>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <form @submit.prevent="UpdateBalance()" class='text-center'>
                                    <div class="col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mt-3">
                                    <label for="validationDefault2" class="form-label h4 color-white">Сумма</label>
                                    <input type="number" class="form-control" id="validationDefault2" min="0" required v-model="serverData.balance">
                                    </div>   
                                    <button class='btn balancebtn mb-4 mt-2'>
                                        <span class='important-text h4 pb-4 color-white'>пополнить&nbsp;<i class="fa fa-plus color-orange" aria-hidden="true"></i></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['card'],
    components:{
    },
    data(){
        return{
            serverData:{
                login:'',
                token:'',
                balance:''
            },
        }
    },
    methods:{
        CloseModalWindow(){
          document.getElementById('balancemodal').style.display='none';
        },
        UpdateBalance(){
            var userCoockie=document.cookie.split(';');
            this.serverData.login=userCoockie[0];
            this.serverData.token=userCoockie[1];
            const path = 'http://26.173.145.160:5000/update_balance';
            axios.post(path, this.serverData)
            .then((res) => {
                this.$emit('UpdateUserBalance');
            })
            document.getElementById('balancemodal').style.display='none';
        }
    }
}
</script>
<style scoped>
#balancemodal{
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
.usercard{
    background-color:#38BCB6;
    border: 1px solid #38BCB6;
    border-radius: 5px;
}
</style>