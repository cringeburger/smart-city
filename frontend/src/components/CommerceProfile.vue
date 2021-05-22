<template>
    <div class='container' id='userProfile'>
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
                    <button class='btn_default' @click="OpenModal()">Настройки</button>
            </div>
            <div class='col-12 col-md-6 offset-md-3 col-xxl-4 offset-xxl-4 text-center mt-4 mt-md-2 mt-xxl-0'>
                <p class='h3 color-blue important-text'>Моя карта</p>
                <ECard 
                @UpdateUserBalance="UpdateUserBalance"
                v-bind:ecard="UserData.card"/>
            </div>

        </div>
        <UserSetting
        @exit="exit"
        v-if="modal"/>
        
    </div>
</template>
<script>
//import axios from 'axios'
import UserSetting from '@/components/UserSetting.vue'
import ECard from '@/components/ECard.vue'
export default {
    name:'UserProfile',
    components:{
        UserSetting,
        ECard
    },
    data(){
        return{
            UserData:{
                img:"https://sun9-56.userapi.com/impf/c855424/v855424474/1254ba/ffbitJob7TQ.jpg?size=1321x2160&quality=96&sign=f616b9ba14a43f0b21493a53e864605b&type=album",
                fio:'Микульский Банан Вадимович',
                card: {number:'1234', balance:'2134'}
            },
            userInfo:{
                login:'',
                token:'',
                role:''
            },
            file: '',
            modal:false
        }
    },
    mounted(){
       this.getUserData();
    },
    methods:{
        getUserData(){
            //var userCoockie=document.cookie.split[';'];
            /*this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            const path = 'http://localhost:5000/commerceData';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData=res.data;
            })*/
        },
        UploadFile(){
            this.file = this.$refs.file.files[0];
            let formData = new FormData();
            formData.append('file', this.file);
            /*const path = 'http://localhost:5000/userImage';
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
        UpdateUserBalance(){
            /*const path = 'http://localhost:5000/user_balance';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData.card.balance=res.data;
            })*/
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
#MyOrganizationWindow{
    display: none;
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