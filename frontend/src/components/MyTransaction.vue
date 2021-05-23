<template>
    <div id='MyTransaction' class='paddingbottomm'>
        <div class='contariner mt-4'>
            <div class='row'>
                <div class='col-12 text-center'>
                    <p class='h4'>Транзации Организаций</p>
                </div>
                <div class='col-12 text-center'
                    v-if="UserData.org[0].name==''">
                    <p class='h4 text-blue'>У вас еще нет организации</p>
                    <button class='btn_default' @click="NewOrganization()">Создать</button>
                </div>
                <div class='col-12 mt-5'
                v-else>
                    <div class='row'>
                        <div class='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 col-xxl-4 offset-xxl-4 text-center mb-4'>
                            <label for="validationDefault2" class="form-label h5">Организация</label>
                            <select class="form-select" aria-label="Default select example" id='validationDefault2' v-model="userInfo.selected" @change="ShowTransaction()">
                                    <option disabled value="">Выберете организацию</option>
                                    <Options 
                                        v-for="option of UserData.org" :key="option.id"
                                        v-bind:option="option"/>
                            </select>
                        </div>
                        <div class='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 text-center'>
                            <div class='table-responsive' v-if="transaction[0].type!=''">
                                <table class="table table-hover table-fixed">
                                    <thead class="table-dark">
                                        <tr>
                                            <th scope="col">Тип</th>
                                            <th scope="col">Назначение</th>
                                            <th scope="col">Сумма</th>
                                            <th scope="col">Дата</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <TransactionTableColumm
                                        v-for="rows of transaction" :key="rows.id"
                                        v-bind:rows="rows"/>
                                    </tbody>
                                </table>
                            </div>
                            <button class='btn_default' @click="Download()" value="Скачать">Скачать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewOrganization
            v-if="NewOrganizationWindow"
            @updateOrganization="updateOrganization"/>
    </div>
</template>
<script>
//import axios from 'axios'
import NewOrganization from '@/components/NewOrganization.vue'
import TransactionTableColumm from '@/components/TransactionTableColumm.vue'
import Options from '@/components/Options.vue'
export default {
    name:'MyTransaction',
    components:{
        NewOrganization,
        TransactionTableColumm,
        Options
    },
    data(){
        return{
            UserData:{
                org:[
                    {name:'Интертамент', id:'1'},
                    {name:'Кафешка', id:'2'},
                    {name:'Организация', id:'3'}
                ]
            },
            transaction:[
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'},
                {type:'Пополнение', recipient:'Умная карта', value:'1000', data:'20-03-2000'}
            ],
            userInfo:{
                login:'',
                token:'',
                role:'',
                selected:""
            },
            NewOrganizationWindow:false
        }
    },
    mounted(){
       //this.getUserData();
    },
    methods:{
        getUserData(){
          /*var userCoockie=document.cookie.split(';');
            this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            const path = 'http://26.173.145.160:5000/commerceOrganization';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.UserData=res.data;
            })*/
        },
        ShowTransaction(){
            /*const path = 'http://26.173.145.160:5000/OrgTransaction';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.transactionData=res.data;
            })*/
        },
        Download(){

            var type = this.transaction.map(function(elem){
                return elem.type;
            }).join(";,");

            var recipient = this.transaction.map(function(elem){
                return elem.recipient;
            }).join(";,");

            var value = this.transaction.map(function(elem){
                return elem.value;
            }).join(";,");

            var data = this.transaction.map(function(elem){
                return elem.data;
            }).join(",");

            let length = type.split(',').length;
            type=type.split(',');
            recipient=recipient.split(',');
            value=value.split(',');
            data=data.split(',');
            
            type[length-1]=type[length-1]+";";
            recipient[length-1]=recipient[length-1]+";";
            value[length-1]=value[length-1]+";";

            let str='';
            for (var i=0; i < length; i++) {
                str += type[i];
                str += recipient[i];
                str += value[i];
                str += data[i];
                str += '\r\n';
            }

            var blob = new Blob([str], { type: 'text/csv;charset=UTF-8;' });

            var link = document.createElement('a');
            var url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'csvfilename.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            }   
    }
}
</script>
<style scoped>

.table-fixed{
  width: 100%;

}

.table-fixed tbody {
  height: 450px;
  overflow-y: auto;
  width: 98%
}

tbody {
  display: block;
  height: 195px;
  overflow: auto;
}

thead, tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

thead {
  width: calc( 100% - 1em )
}
</style>