<template>
    <div class='container paddingbottomm' id='commerceProfile'>
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
            <div class='col-12 text-left mb-5'>
                <div class='row mt-2'>
                    <div class='col-12 text-left'>
                        <p class='h2 color-blue important-text'>Счета организаций</p>
                    </div>
                    <hr>
                    <div class="col-12">
                        <div id='MyOrganizationWindow'>
                            <div class='row row-flex row-flex-wrap'
                            v-if="UserData.organizationCard[0].name!=''"> 
                                <OrgECard
                                    v-for="card of UserData.organizationCard" :key="card.id"
                                    v-bind:card="card"
                                    @UpdateOrgBalance="UpdateOrgBalance"/>
                            </div>
                            <div class='row' v-else>
                                <div class='col-12 text-center'>
                                    <p class='h4 text-blue'>У вас еще нет организации</p>
                                    <button class='btn_default' @click="NewOrganization()">Создать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <UserSetting
            @exit="exit"
            v-if="modal"/>
        <NewOrganization
            v-if="NewOrganizationWindow"
            @updateOrganization="updateOrganization"/>
    </div>
</template>
<script>
//import axios from 'axios'
import UserSetting from '@/components/UserSetting.vue'
import ECard from '@/components/ECard.vue'
import OrgECard from '@/components/OrgECard.vue'
import NewOrganization from '@/components/NewOrganization.vue'
export default {
    name:'UserProfile',
    components:{
        UserSetting,
        ECard,
        NewOrganization,
        OrgECard
    },
    data(){
        return{
            UserData:{
                img:"https://sun9-56.userapi.com/impf/c855424/v855424474/1254ba/ffbitJob7TQ.jpg?size=1321x2160&quality=96&sign=f616b9ba14a43f0b21493a53e864605b&type=album",
                fio:'Микульский Никита Вадимович',
                card: {number:'1234 1234 1234 1234', balance:'2000', bonuce:'120'},
                organizationCard:[
                    {name:'Интертамент', number:'8888888888888888', balance:'500', ownernumber:'100', ownerbalance:'2000'},
                    {name:'У Мо', number:'7777777777777777', balance:'500', ownernumber:'100', ownerbalance:'2000'}
                ]
            },
            userInfo:{
                login:'',
                token:'',
                role:''
            },
            file: '',
            modal:false,
            NewOrganizationWindow:false
        }
    },
    mounted(){
       this.getUserData();
    },
    methods:{
        getUserData(){
          /*var userCoockie=document.cookie.split(';');
            this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            this.userRole.token=userCoockie[2];
            const path = 'http://26.173.145.160:5000/commerceData';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData=res.data;
            })*/
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
        UpdateUserBalance(){
            /*const path = 'http://26.173.145.160:5000/user_balance';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData.card.balance=res.data;
            })*/
        },
        UpdateOrgBalance(){
            /*const path = 'http://26.173.145.160:5000/commerce_organization_card';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData.myorganization=res.data;
            })*/
        },
        NewOrganization(){
            if(!this.NewOrganizationWindow){
                this.NewOrganizationWindow=true;
            }else{
                document.getElementById('newOrganizationWindow').style.display='block';
            }
        }
    }
}
</script>

<style scoped>
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
    display: block;
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