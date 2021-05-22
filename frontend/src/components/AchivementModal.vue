<template>
    <div id="achivementmodal" class='justify-content-center' aria-hidden="true">
        <div class='overlay-content'>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 text-center mt-4'>
                        <div class='card usercard'>
                            <div class='row'>
                                <div class='col-1 offset-11 text-center mt-md-4'>
                                    <button class='btn' @click="CloseModalWindow()"><span class='color-orange h2'>&times;</span></button>
                                </div>
                            </div>
                            <div class='card-body text-center'>
                                <p class='h2 important-text color-blue'>Достижения</p>
                                <hr>
                                <div class='row text-center row-flex row-flex-wrap mt-5'>
                                    <Achivements
                                        v-for="achive of achievments" :key="achive.id"
                                        v-bind:achive="achive"/>
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
//import axios from 'axios'
import Achivements from '@/components/Achivements.vue'
export default {
    components:{
        Achivements
    },
    data(){
        return{
            serverData:{
                login:'',
                token:'',
            },
            achievments:[
                    {name:'', status: Boolean, img:'', progressbar:'', tooltip:''},
            ]
        }
    },
    methods:{
        CloseModalWindow(){
          document.getElementById('achivementmodal').style.display='none';
        },
        getAllAchivements(){
            /*var userCoockie=document.cookie.split[';'];
            this.serverData.login=userCoockie[0];
            this.serverData.token=userCoockie[1];*/
            /*const path = 'http://localhost:5000/allachivements';
            axios.post(path, this.serverData)
            .then((res) => {
                this.achievments=res.data;
            })*/
            document.getElementById('achivementmodal').style.display='none';
        }
    }
}
</script>
<style scoped>
#achivementmodal{
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
.usercard{
   
    border: 1px solid #27187E;
    border-radius: 5px;
}
</style>