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
   font-family: 'Vollkorn', serif;
 }
 .color-blue{
  color: #7740A6;
 }
 .color-orange{
   color: #EF5A29;
 }
 .color-white{
   color: #f7f9fc;
 }
 .important-text{
   font-family: 'Literata', serif;
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
</style>
