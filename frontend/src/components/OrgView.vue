<template>
    <div class='paddingbottomm'>
        <div class='container mt-5'>
            <div class='row mt-5'
            v-bind:class="orgData.org.systname">
                <div class='col-12 col-md-6 col-xxl-5 ml-2'>
                    <div class='row'>
                        <div class='col-8 text-left'>
                            <p class='h3 color'>
                                {{orgData.org.name}}
                            </p>
                             <p class='h4'>{{orgData.org.type}}</p>
                        </div>
                        <div class='col-4 text-left'>
                            <p class='important-text color-orange h4'><i class="fa fa-star" aria-hidden="true"></i>{{orgData.org.rating}}</p>
                        </div>
                        <div class='col-12 text-left'>
                            <p class='color h4'>{{orgData.org.adress}}</p>
                            <p class='h4'>почта: {{orgData.org.mail}}</p>
                        </div>
                    </div>
                </div>
                <div class='col-12 col-md-6 col-xxl-7'>
                    <img class='img-fluid orgImage'
                     v-bind:src="orgData.org.img"/>
                </div>
                <div class='col-12 mt-5 text-left mb-5'>
                    <div class='row text-center mt-2'>
                        <div class='col-12 text-left'>
                            <p class='h2 color-blue important-text'>Достижения от организации</p>
                        </div>
                        <hr>
                        <div class='col-12'>
                            <div class='row row-flex row-flex-wrap'>
                                <Achivements
                                    v-for="achive of orgData.achievments" :key="achive.id"
                                    v-bind:achive="achive"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-12 mt-5 text-left mb-5'>
                    <div class='row text-center mt-2'>
                        <div class='col-12 text-left'>
                            <p class='h2 color-blue important-text'>Услуги Организации</p>
                        </div>
                        <hr>
                        <div class='col-12'>
                            <div class='row row-flex row-flex-wrap'>
                                <OrgUslugi
                                    v-for="usluga of orgData.uslugi" :key="usluga.id"
                                    v-bind:usluga="usluga"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Achivements from '@/components/Achivements.vue'
import OrgUslugi from '@/components/OrgUslugi.vue'
export default {
    components:{
        Achivements,
        OrgUslugi
    },
    data(){
        return{
            orgData:{
                
            },
            serverData:{
                link:''
            }
        }
    },
    mounted(){
        this.getOrgData();
    },
    methods:{
        getOrgData(){
            console.log(document.location.pathname);
            var pathlink= document.location.pathname.split('/organization/');
            this.serverData.link=pathlink[1];
            const path = 'http://26.173.145.160:5000/organization';
            axios.post(path, this.serverData)
            .then((res) => {
                this.orgData=res.data;
            })
        }
    }
}
</script>
<style scoped>
.orgImage{
    max-height: 250px !important;
}
</style>