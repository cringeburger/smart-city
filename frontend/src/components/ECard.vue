<template>
    <div class='card usercard'>
        <div class='row text-center mt-2'>
            <div class='col-6'>
                    <span class='color-white h2 important-text'>{{ecard.balance}}</span>
                    <span class='color-orange h2 important-text'><i class="fa fa-rub" aria-hidden="true"></i></span>
            </div>
            <div class='col-6'>
                <span class='color-white h2 important-text'>{{ecard.bonuce}}</span>
                <span class='color-orange h2 important-text'><i class="fa fa-bold" aria-hidden="true"></i></span>
            </div>
            <div class='col-12'>
                <img class='img-fluid' src="https://cdn.discordapp.com/attachments/824547962821541888/845612351633883176/5.png"/>
            </div>
            <div class='col-12'>
                <hr>
                <p class='color-white h2 important-text mb-2'>{{ecard.number}}</p>
            </div>
        </div>
        <button class='btn balancebtn' @click="OpenBalanceModal()">
            <span class='important-text color-blue h4 pb-4'>пополнить&nbsp;<i class="fa fa-plus" aria-hidden="true"></i></span>
        </button>
         <BalanceModal
        @UpdateUserBalance="UpdateUserBalance"
        v-bind:card="ecard"
        v-if="balancemodal"/>
    </div>
</template>
<script>
import BalanceModal from '@/components/BalanceModal.vue'
export default {
    props:['ecard'],
    components:{
        BalanceModal
    },
    data(){
        return{
            balancemodal:false
        }
    },
    methods:{
        UpdateUserBalance(){
            this.$emit('UpdateUserBalance');
        },
        OpenBalanceModal(){
            if(!this.balancemodal){
                this.balancemodal=true;
            }else{
                document.getElementById('balancemodal').style.display='block';
            }
        }
    }
}
</script>
<style scoped>
.usercard{
    background-color:#38BCB6ad;
    border: 1px solid #38BCB6;
    border-radius: 5px;
}
.card-body{
    margin-top: auto;
}
</style>
