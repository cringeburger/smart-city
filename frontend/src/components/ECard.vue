<template>
    <div class='card usercard'>
        <div class='card-body'>
            <p class='color-blue h2 important-text'>{{ecard.number}}</p>
            <hr>
        </div>
        <p class='color-blue h2 important-text'>
            Баланс: &nbsp; {{ecard.balance}}
        </p>
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
