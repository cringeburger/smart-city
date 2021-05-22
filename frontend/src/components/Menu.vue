<template>
    <div class='container-fluid pt-4'>
      <div class='row'>
        <div class='col-12 col-lg-6 col-xl-5 text-center color-orange important-text'>
              <router-link to='/'><h2><img src="@/assets/logo.png"/>&nbsp;Умный город</h2></router-link>
        </div>
        <div class='col-lg-6 col-xl-7 d-none d-lg-block text-light important-text'>
        <DesktopMenu
        v-bind:isActive="Active"/>
        </div>
      </div>
       <div class='row'>
         <div class='col-12 d-lg-none'>
           <MobileMenu v-bind:isActive="Active"/>
         </div>
       </div>
       <hr class='d-lg-none'>
    </div>
</template>

<script>
import DesktopMenu from '@/components/DesktopMenu.vue'
import MobileMenu from '@/components/MobileMenu.vue'
export default {
  name: 'Menu',
  props:['Active'],
  components:{
    DesktopMenu,
    MobileMenu
  }
}
</script>
<style scoped>
img{
  height: 50px;
}
a{
  text-decoration: none !important;
  color: unset  !important;
}
</style>