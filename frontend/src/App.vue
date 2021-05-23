<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
      return{
          isMobile: Boolean
      }
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  methods:{
     updateWidth() {
        if(window.innerWidth>=992){
            this.isMobile=true;
        }else{
             this.isMobile=false;
        }
    }
  }
}
</script>

<style>
 #app{
   max-width: 100%;
   min-height: 100vh;
   position: relative;
   overflow: hidden;
   color: #1B1F3B;
   background-color: #f7f9fc;
   z-index: 0;
   font-family: "Geometria"; 
   src: url('/assets/Geometria.otf');
 }
 .color-blue{
  color: #7740A6;
 }
 .color-aqua{
   color:#27AAE1;
 }
 .color-red{
   color:#A32541;
 }
 .color-persian-green{
   color:#00A59B;
 }
 .color-orange{
   color: #EF5A29;
 }
 .color-white{
   color: #f7f9fc;
 }
 .important-text{
   font-family: "Geometria-Medium"; 
   src: url('/assets/Geometria-Medium.otf');
 }
 .brand-text{
   font-family: 'Kelly Slab', cursive;
 }
.btn_default{
    display: inline-block;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #EF5A29 !important;
    background-color: #EF5A29 !important;
    color: #F1F2F6 !important;
    width: auto;
    padding:10px;
    font-size: 1.15em;
    margin-left:15px;
    margin-right: 15px;
}
.btn_default a{
    color: #F1F2F6 !important;
}
.btn_default:hover{
    background-color: #7740A6 !important;
    border: 2px solid #7740A6 !important;
    transition: all 1s ease;
}
.btn-reverse{
  border: 2px solid #7740A6 !important;
  background-color: #7740A6 !important;
}
.btn-reverse:hover{
  border: 2px solid #EF5A29 !important;
  background-color: #EF5A29 !important;
}
.row-flex, .row-flex > div[class*='col-']{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex:1 1 auto; 
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cinema .color{
  color:#A32541
}
.cinema .btn_default{
  border: 2px solid #A32541 !important;
  background-color: #A32541 !important;
}
.cinema .btn_default:hover{
  border: 2px solid #F9AE40 !important;
  background-color: #F9AE40 !important;
}
.cinema .btn-reverse:hover{
  border: 2px solid #A32541 !important;
  background-color: #A32541 !important;
}

.theatre .color{
  color:#F9AE40
}
.theatre .btn_default{
  border: 2px solid #F9AE40 !important;
  background-color: #F9AE40 !important;
}
.theatre .btn-reverse:hover{
  border: 2px solid #F9AE40 !important;
  background-color: #F9AE40 !important;
}
.theatre .btn_default:hover{
  border: 2px solid #A32541 !important;
  background-color: #A32541 !important;
}


.museum .color{
  color:#EF5A29
}

.cafe .color{
  color:#7740A6
}
.cafe .btn_default{
  border: 2px solid #7740A6 !important;
  background-color: #7740A6 !important;
}
.cafe .btn_default:hover{
  border: 2px solid #EF5A29 !important;
  background-color: #EF5A29 !important;
}
.cafe .btn-reverse:hover{
  border: 2px solid #EF5A29 !important;
  background-color: #EF5A29 !important;
}



.sport .color{
  color:#27AAE1
}
.sport .btn_default{
  border: 2px solid #27AAE1 !important;
  background-color: #27AAE1 !important;
}
.sport .btn-reverse:hover{
  border: 2px solid #27AAE1 !important;
  background-color: #27AAE1 !important;
}
.sport .btn_default:hover{
  border: 2px solid #00A59B !important;
  background-color: #00A59B !important;
}


.ecotrip .btn_default{
  border: 2px solid #00A59B !important;
  background-color: #00A59B !important;
}
.ecotrip .btn-reverse:hover{
  border: 2px solid #00A59B !important;
  background-color: #00A59B !important;
}
.ecotrip .color{
  color:#00A59B
}
.ecotrip .btn_default:hover{
  border: 2px solid #27AAE1 !important;
  background-color: #27AAE1 !important;
}

.intplace .color{
  color:#2BB473
}
.intplace .btn_default{
  border: 2px solid #2BB473 !important;
  background-color: #2BB473 !important;
}
.intplace .btn-reverse:hover{
  border: 2px solid #2BB473 !important;
  background-color: #2BB473 !important;
}
.intplace .btn_default:hover{
  border: 2px solid #27AAE1 !important;
  background-color: #27AAE1 !important;
}
@media (max-width:991px) {
    .paddingbottomm{
        margin-bottom: 170px !important;
    }
}
@media (max-width:372px) {
    .paddingbottomm{
        margin-bottom: 140px !important;
    }
}
</style>
