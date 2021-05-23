<template>
    <div id="newOrganizationWindow" class='justify-content-center' aria-hidden="true">
        <div class='overlay-content'>
            <div class='container'>
                <div class='row'>
                    <div class='col-1 offset-11 text-center mt-md-2'>
                        <button class='btn' @click="CloseModalWindow()"><span class='color-orange h2'>&times;</span></button>
                    </div>
                    <div class='col-12'>
                        <form @submit.prevent="NewOrgToServer()">
                            <div class='row'>
                                <div class='col-8 offset-2 text-center'>
                                    <p class='color-blue important-text h4'>Новая организация</p>
                                </div>
                                <div class="alert alert-danger" role="alert" id='alert'>
                                    Все поля должны быть заполнены!
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                <label for="validationDefault1" class="form-label h5">Название</label>
                                <input type="text" class="form-control" id="validationDefault1" required v-model="serverData.name">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                <label for="validationDefault2" class="form-label h5">Тип организации</label>
                                <select class="form-select" aria-label="Default select example" id='validationDefault2' v-model="serverData.type">
                                        <option disabled value="">Выберете тип организации</option>
                                        <option value="theatre">Театр</option>
                                        <option value="museum">Музей</option>
                                        <option value="cinema">Кинотеатр</option>
                                        <option value="cafe">Кафе/ресторан</option>
                                        <option value="sport">Спортивный досуг</option>
                                        <option value="ecotrip">Пешие прогулки</option>
                                    </select>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <label for="validationDefault3" class="form-label h5">Адрес</label>
                                    <input type="text" class="form-control" id="validationDefault3" required v-model="serverData.adress">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                <label for="exampleFormControlTextarea1" class="form-label h5">Отображаемое короткое описание</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" maxlength="60" v-model="serverData.SmallContent"></textarea>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                <label for="exampleFormControlTextarea2" class="form-label h5">Отображаемое длинное описание</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3" maxlength="300" v-model="serverData.BigContent"></textarea>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <div class="form-file">
                                        <label for="customFile2" class="form-label h5">Выберете изображение организации</label><br>
                                        <input type="file" class="form-file-input" id="customFile2" ref="file2" @change="UploadImg()">
                                    </div>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <label for="validationDefault4" class="form-label h5">Почта</label>
                                    <input type="email" class="form-control" id="validationDefault4" required v-model="serverData.email">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <p class='h4'>Для работы с чат-ботами необходимо указать аккаунты соц сетей</p>
                                    <label for="validationDefault5" class="form-label h5">Telegram</label>
                                    <input type="text" class="form-control" id="validationDefault5" required v-model="serverData.telegram">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <label for="validationDefault6" class="form-label h5">ВКонтакте</label>
                                    <input type="text" class="form-control" id="validationDefault6" required v-model="serverData.vkontakte">
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <p class='h4'>При создании организации с вас спишется вступительный взнос в размере 5000р
                                        <a href='/organizationPolitics' target="blank">подробнее</a></p>
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <div class="form-check text-center">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                                    <label class="form-check-label h4" for="invalidCheck2">
                                            Я согласен с политикой размещения организации
                                    </label>
                                    </div> 
                                </div>
                                <div class='col-8 offset-2 text-center mt-2'>
                                    <button class='btn_default' type="submit">Создать</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    components:{
    },
    data(){
        return{
            serverData:{
                login:'',
                token:'',
                name:'',
                type:'', 
                SmallContent:'',
                BigContent:'', 
                adress:'',
                email:'',
                telegram:'',
                vkontakte:''
            },
            img:'',
            organizationID:''
        }
    },
    methods:{
        CloseModalWindow(){
          document.getElementById('newOrganizationWindow').style.display='none';
        },
        NewOrgToServer(){
            if(this.img==''||this.type==''){
                document.getElementById('alert').style.display='block';
            }else{
                var userCoockie=document.cookie.split[';'];
                this.serverData.login=userCoockie[0];
                this.serverData.token=userCoockie[1];
                document.getElementById('alert').style.display='none';
                const path = 'http://26.173.145.160:5000/new_organization';
                axios.post(path, this.serverData)
                .then((res) => {
                this.organizationID=res.data;
                /*let formData = new FormData();
                    formData.append('file', this.img);
                const path = 'http://26.173.145.160:5000/organization_image';
                    axios.post(path+ "?" + (new URLSearchParams(this.organizationID)).toString(), formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res) => {
                        document.getElementById('newOrganizationWindow').style.display='none';
                        this.$emit('updateOrganization');
                    })*/
                document.getElementById('newOrganizationWindow').style.display='none';
                this.$emit('updateOrganization');
                })
            }
            
        },
        UploadImage(){
            this.img = this.$refs.file2.files[0];
        },
    }
}
</script>
<style scoped>
#newOrganizationWindow{
    min-width: 100% !important;
    min-height: 100% !important;
    z-index: 999;
    background: #d7dbff98;
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    overflow-x: hidden;
    transition: 0.5s;
}
.overlay-content{
    position: absolute !important;
    width: 100%;
}
.btn{
    padding: 0 !important;
}
.container{
    background: #f7f9fc;
    border: 1px solid #f7f9fc;
    border-radius: 5px;
}
#alert{
    display: none;
}
</style>