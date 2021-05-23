<template>
    <div class='col-6 col-lg-4 text-center'>
        <div class='card usercard text-center orgcardborder'>
            <div class='row'>
                <div class='col-12'>
                    <p class='h4 color-white'>{{card.name}}</p>
                    <div class='card-body'>
                        <p class='color-white h4 important-text'>{{card.number}}</p>
                        <hr>
                    </div>
                    <p class='color-white h2 important-text'>
                        Баланс: &nbsp; {{card.balance}}
                    </p>
                </div>
                <div class='col-12'>
                    <form @submit.prevent="UpdateBalance()" class='text-center'>
                        <label for="validationDefault2" class="form-label h4 color-blue">Сумма</label>
                        <input type="number" class="form-control" id="validationDefault2" min="0" required v-model="serverData.balance"
                        v-bind:max="card.ownerbalance">
                        <button class='btn balancebtn mb-4 mt-2'>
                            <span class='important-text h4 pb-4 color-blue'>пополнить&nbsp;<i class="fa fa-plus color-orange" aria-hidden="true"></i></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['card'],
    data(){
        return{
            serverData:{
                login:'',
                token:'',
                orgnumber:'',
                balance:''
            }
        }
    },
    methods:{
        UpdateBalance(){
            /*var userCoockie=document.cookie.split[';'];
            this.serverData.login=userCoockie[0];
            this.serverData.token=userCoockie[1];
            this.serverData.orgnumber=ecard.number;*/
            /*const path = 'http://26.173.145.160:5000/update_org_balance';
            axios.post(path, this.serverData)
            .then((res) => {
                this.$emit('UpdateOrgBalance');
            })*/
        }
    }
}
</script>
<style scoped>
.usercard{
    background-color:#38BCB6ad;
    margin: 0 auto;
}
.card-body{
    margin-top: auto;
}
.orgcardborder{
    border: 1px solid #38BCB6;
    border-radius: 5px;
}
.col-12{
    padding: 0 !important;
}
.form-control{
    width: 80%;
     margin: 0 auto;
}
</style>
