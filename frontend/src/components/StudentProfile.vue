<template>
    <div class='container' id='studentProfile'>
        <div class='row mt-5'>
            <div class='col-6 col-sm-5 col-lg-3 col-xxl-2'>
                <div class='row'>
                    <div class='col-12 text-center'>
                        <div class='profileImage'
                        v-if="UserData.img!=''">
                            <img class="rounded img-thumbnail img-fluid"
                            v-bind:src="UserData.img">
                        </div>
                        <div class='card uploadImage'
                        v-else>
                            <div class='card-body text-center'>
                                <div class="form-file">
                                    <input type="file" class="form-file-input" id="customFile" ref="file" style="display:none;" @change="UploadFile()">
                                    <label class="form-file-label" for="customFile">
                                        <span class="form-file-text"></span>
                                        <span class='color-blue form-file-button'>+</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-12 text-center'>
                        <div class="form-file">
                            <input type="file" class="form-file-input" id="customFile1" ref="file" style="display:none;" @change="UploadFile()">
                            <label class="form-file-label" for="customFile1">
                                <span class="form-file-text"></span>
                                <span class='color-orange form-file-button h5'>изменить&nbsp;<i class="fa fa-pencil" aria-hidden="true"></i></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-6 col-sm-7 col-lg-9 col-xxl-10 text-center'>
                    <p class='h2 color-blue'>{{UserData.fio}}</p>
                    <button class='btn_default' @click="OpenModal()">Настройка</button>
            </div>
            <div class='col-12 col-md-6 offset-md-3  text-center mt-4 mt-md-2 mt-xxl-0'>
                <p class='h3 color-blue important-text'>Моя карта</p>
                <div class='card usercard'>
                    <div class='row text-center mt-2'>
                        <div class='col-6'>
                                <span class='color-white h2 important-text'>{{UserData.card.balance}}</span>
                                <span class='color-orange h2 important-text'><i class="fa fa-rub" aria-hidden="true"></i></span>
                        </div>
                        <div class='col-6'>
                            <span class='color-white h2 important-text'>{{UserData.card.bonuce}}</span>
                            <span class='color-orange h2 important-text'><i class="fa fa-bold" aria-hidden="true"></i></span>
                        </div>
                        <div class='col-12'>
                            <img class='img-fluid' src="https://cdn.discordapp.com/attachments/824547962821541888/845612351633883176/5.png"/>
                        </div>
                        <div class='col-12'>
                            <hr>
                            <p class='color-white h2 important-text mb-2'>{{UserData.card.number}}</p>
                        </div>
                        <div class='col-12'>
                            <button class='btn balancebtn' @click="OpenBalanceModal()">
                                    <span class='important-text color-white h4 pb-4'>пополнить&nbsp;<i class="fa fa-plus" aria-hidden="true"></i></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div class='col-12 mt-5 text-left mb-5'>
                <div class='row text-center mt-2'>
                    <div class='col-6 text-left'>
                        <p class='h2 color-blue important-text'>Мои Достижения</p>
                    </div>
                    <div class='col-6 text-right'>
                        <button class='btn balancebtn' @click="OpenAchivementsModal()">
                            <span class='important-text color-blue h4'><i class="fa fa-plus" aria-hidden="true"></i></span>
                        </button>
                    </div>
                    <hr>
                    <div class='col-12'>
                        <div class='row row-flex row-flex-wrap'>
                            <Achivements
                                v-for="achive of UserData.achievments" :key="achive.id"
                                v-bind:achive="achive"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-12 text-left mb-5 transactionContainer'>
                <div class='row mt-2'>
                    <div class='col-6 text-left'>
                        <p class='h2 color-blue important-text'>Мои Транзакции</p>
                    </div>
                    <div class='col-6 text-center'>
                        <button class="btn" @click="ShowMyTransctions()">
                           <span class='important-text color-blue h4'><i class="fa" aria-hidden="true"
                           v-bind:class="TrButton"></i></span>
                        </button>
                    </div>
                    <hr>
                    <div class="col-12">
                        <div id='MyTransactionWindow'>
                            <div class='table-responsive' v-if="UserData.transaction[0].type!=''">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Тип</th>
                                            <th scope="col">Назначение</th>
                                            <th scope="col">Сумма</th>
                                            <th scope="col">Дата</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <TransactionTableColumm
                                        v-for="rows of UserData.transaction" :key="rows.id"
                                        v-bind:rows="rows"/>
                                    </tbody>
                                </table>
                            </div>
                            <p class='h4' v-else>У вас еще нет транзкций</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <UserSetting
        @exit="exit"
        v-if="modal"/>
        <BalanceModal
        @UpdateUserBalance="UpdateUserBalance"
        v-bind:card="UserData.card"
        v-if="balancemodal"/>
        <AchivementModal
        v-if="achivementmodal"/>
    </div>
</template>
<script>
import axios from 'axios'
import UserSetting from '@/components/UserSetting.vue'
import BalanceModal from '@/components/BalanceModal.vue'
import Achivements from '@/components/Achivements.vue'
import AchivementModal from '@/components/AchivementModal.vue'
import TransactionTableColumm from '@/components/TransactionTableColumm.vue'
export default {
    name:'UserProfile',
    components:{
        UserSetting,
        BalanceModal,
        Achivements,
        AchivementModal,
        TransactionTableColumm
    },
    data(){
        return{
            UserData:{
                img:"https://sun9-56.userapi.com/impf/c855424/v855424474/1254ba/ffbitJob7TQ.jpg?size=1321x2160&quality=96&sign=f616b9ba14a43f0b21493a53e864605b&type=album",
                fio:'Микульский Банан Вадимович',
                achievments:[
                    {name:'Ревизор 1', status: true, img:'https://cdn.discordapp.com/attachments/783709006258503691/845265827431055380/Achivments_review_1.png', progressbar:'100', tooltip:'Оставить 1 комментарий'},
                    {name:'Актер 1', status: false, img:'https://cdn.discordapp.com/attachments/783709006258503691/845266701024755722/Achivments_photoreview_1.png', progressbar:'75', tooltip:'1 поход в театр'},
                    {name:'Ревизор 1', status: true, img:'https://cdn.discordapp.com/attachments/783709006258503691/845265827431055380/Achivments_review_1.png', progressbar:'100', tooltip:'Оставить 1 комментарий'},
                    {name:'Актер 1', status: false, img:'https://cdn.discordapp.com/attachments/783709006258503691/845266701024755722/Achivments_photoreview_1.png', progressbar:'75', tooltip:'1 поход в театр'},
                    {name:'Ревизор 1', status: true, img:'https://cdn.discordapp.com/attachments/783709006258503691/845265827431055380/Achivments_review_1.png', progressbar:'100', tooltip:'Оставить 1 комментарий'},
                    {name:'Актер 1', status: false, img:'https://cdn.discordapp.com/attachments/783709006258503691/845266701024755722/Achivments_photoreview_1.png', progressbar:'75', tooltip:'1 поход в театр'}
                ],
                transaction:[
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                    {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'}
                ],
                card: {number:'1234', balance:'2134', bonuce:'400'},
            },
            userInfo:{
                login:'',
                token:''
            },
            file: '',
            modal:false,
            balancemodal:false,
            achivementmodal:false,
            TrButton: "fa-plus"
        }
    },
    mounted(){
       this.getUserData();
    },
    methods:{
        getUserData(){
            var userCoockie=document.cookie.split[';'];
            this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            const path = 'http://26.173.145.160:5000/studentData';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData=res.data;
            })
            document.getElementById('MyTransactionWindow').style.display='none';
        },
        UploadFile(){
            this.file = this.$refs.file.files[0];
            let formData = new FormData();
            formData.append('file', this.file);
            /*const path = 'http://26.173.145.160:5000/userImage';
            axios.post(path+ "?" + (new URLSearchParams(this.userInfo.token)).toString(), formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                this.img=res.data;
                this.file = '';
            })*/
        },
        OpenModal(){
            if(!this.modal){
                this.modal=true;
            }else{
                document.getElementById('modal').style.display='block';
            }
            
        },
        exit(){
            this.$emit('exit');
        },
        OpenBalanceModal(){
            if(!this.balancemodal){
                this.balancemodal=true;
            }else{
                document.getElementById('balancemodal').style.display='block';
            }
        },
        UpdateUserBalance(){
            const path = 'http://26.173.145.160:5000/user_balance';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData.card.balance=res.data;
            })
        },
        OpenAchivementsModal(){
            if(!this.achivementmodal){
                this.achivementmodal=true;
            }else{
                document.getElementById('achivementmodal').style.display='block';
            }
        },
        ShowMyTransctions(){
            if(document.getElementById('MyTransactionWindow').style.display=='none'){
                document.getElementById('MyTransactionWindow').style.display='block';
                this.TrButton="fa-minus";
            }else{
                document.getElementById('MyTransactionWindow').style.display='none';
                this.TrButton="fa-plus";
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
.balancebtn{
    height: 50px;
}
.profileImage img{
    max-width: 200px !important;
    max-height: 200px !important;
}
.uploadImage{
    width: 200px !important;
    height: 200px !important;
    background-color:#D7DBFF;
    margin: 0 auto;
}
.uploadImage span{ 
    font-size: 88px;
}
.form-file-button:hover{ 
    cursor: pointer;
}
.card-body{
    margin-top: 20px;
}

@media (max-width:550px) {
   .profileImage img{
        max-width: 150px !important;
        max-height: 150px !important;
    }
    .uploadImage{
    width: 150px !important;
    height: 150px !important;
    }
    .card-body{
        margin: 0;
    }
}
@media (max-width:400px) {
   .profileImage img{
        max-width: 125px !important;
        max-height: 125px !important;
    }
    .uploadImage{
    width: 125px !important;
    height: 125px !important;
    }
    .uploadImage span{ 
    font-size: 66px;
    }
}
@media (max-width: 991px) {
    .container{
        max-width: 100% !important;
    }
}
@media (max-width:372px) {
    .transactionContainer{
        margin-bottom: 140px !important;
    }
}
@media (max-width:991px) {
    .transactionContainer{
        margin-bottom: 170px !important;
    }
}
</style>