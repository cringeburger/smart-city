<template>
    <div class='paddingbottomm'>
        <div class='container mt-5'>
            <div class='row mt-5'
            v-bind:class="orgData.org.systname">
                <div class='col-6 ml-2'>
                    <div class='row'>
                        <div class='col-6 text-left'>
                            <p class='h3 color'>
                                {{orgData.org.name}}
                            </p>
                             <p class='h4'>{{orgData.org.type}}</p>
                        </div>
                        <div class='col-6 text-left'>
                            <p class='important-text color-orange h4'><i class="fa fa-star" aria-hidden="true"></i>{{orgData.org.rating}}</p>
                        </div>
                        <div class='col-12 text-left'>
                            <p class='color h4'>{{orgData.org.adress}}</p>
                            <p class='h4'>почта: {{orgData.org.mail}}</p>
                        </div>
                    </div>
                </div>
                <div class='col-6'>
                    <img class='img-fluid orgImage'
                     v-bind:src="orgData.org.img"/>
                </div>
                <div class='col-12 mt-5 text-left mb-5'>
                    <div class='row text-center mt-2'>
                        <div class='col-6 text-left'>
                            <p class='h2 color-blue important-text'>Достижения Организации</p>
                        </div>
                        <div class='col-6 text-right'>
                            <button class='btn balancebtn' @click="OpenOrganizationAchivementsModal()">
                                <span class='important-text color-blue h4'><i class="fa fa-plus" aria-hidden="true"></i></span>
                            </button>
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
            </div>
        </div>
        <OrganizationAchivementsModal
        v-if="achivementmodal"
        v-bind="link"/>
    </div>
</template>
<script>
//import axios from 'axios'
import Achivements from '@/components/Achivements.vue'
export default {
    props:['link'],
    components:{
        Achivements
    },
    data(){
        return{
            orgData:{
                org:{name:'Интертамент', type:'Кинотеатр', rating:'4.5', adress:'Полушкина роща, д.5', img:'https://i.ytimg.com/vi/dbqTDWbgb-0/maxresdefault.jpg',
                smallcontent:'Очень много текста! Очень много текста! Очень много текста! Очень много текста! Очень много текста! Очень много текста! Очень много текста!  Очень много текста!', 
                link:'1', systname:'cinema', mail:'intertament@mail.ru'},
                achievments:[
                    {name:'Ревизор 1', status: true, img:'https://cdn.discordapp.com/attachments/783709006258503691/845265827431055380/Achivments_review_1.png', progressbar:'100', tooltip:'Оставить 1 комментарий'},
                    {name:'Актер 1', status: false, img:'https://cdn.discordapp.com/attachments/783709006258503691/845266701024755722/Achivments_photoreview_1.png', progressbar:'75', tooltip:'1 поход в театр'},
                    {name:'Ревизор 1', status: true, img:'https://cdn.discordapp.com/attachments/783709006258503691/845265827431055380/Achivments_review_1.png', progressbar:'100', tooltip:'Оставить 1 комментарий'},
                    {name:'Актер 1', status: false, img:'https://cdn.discordapp.com/attachments/783709006258503691/845266701024755722/Achivments_photoreview_1.png', progressbar:'75', tooltip:'1 поход в театр'},
                    {name:'Ревизор 1', status: true, img:'https://cdn.discordapp.com/attachments/783709006258503691/845265827431055380/Achivments_review_1.png', progressbar:'100', tooltip:'Оставить 1 комментарий'},
                    {name:'Актер 1', status: false, img:'https://cdn.discordapp.com/attachments/783709006258503691/845266701024755722/Achivments_photoreview_1.png', progressbar:'75', tooltip:'1 поход в театр'}
                ],
                uslugi:{},
                news:{},
                userCount:{},
                comments:{},
                achivementmodal:false
            }
        }
    },
    mounted(){
        this.getOrgData();
    },
    methods:{
        getOrgData(){

        },
        OpenOrganizationAchivementsModal(){

        }
    }
}
</script>
<style scoped>
.orgImage{
    max-height: 250px !important;
}
</style>