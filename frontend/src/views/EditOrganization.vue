<template>
    <div id='EditOrganization'>
        <Commercemenu
        v-bind:Active="isActive"/>
        <OrganizationSetting
        v-if="access=='yes'"
        v-bind:link="link"/>
        <div class='container mt-5 text-center'
        v-else>
            <p class='h3 color-blue'>Вам отказано в доступе</p>
        </div>
        <Footer/>
    </div>
</template>
<script>
//import axios from 'axios'
import Commercemenu from '@/components/Commercemenu.vue'
import Footer from '@/components/footer.vue'
import OrganizationSetting from '@/components/OrganizationSetting.vue'
export default {
    props:['link'],
    components: {
    Commercemenu,
    OrganizationSetting,
    Footer
    },
    data(){
        return{
            userInfo:{
                login:'',
                token:'',
                org:''
            },
            access: 'yes',
            isActive:[{Profile:false, Organization:true, Transaction:false}],
        }
    },
    mounted(){
        this.getAccess();
    },
    methods:{
        getAccess(){
            /*var userCoockie=document.cookie.split(';');
            this.userInfo.login=userCoockie[0];
            this.userInfo.token=userCoockie[1];
            this.userInfo.org=this.link;
            const path = 'http://26.173.145.160:5000/edit_access';
            axios.post(path, this.userInfo)
            .then((res) => {
                this.access=res.data;
            })*/
        }
    }
}
</script>