<template>
    <div class='container-fluid pt-4'>
      <div class='row'>
        <div class='col-12 col-lg-6 col-xl-5 text-center color-orange important-text'>
              <router-link to='/'><h2><img src="@/assets/logo.png"/>&nbsp;Умный город</h2></router-link>
        </div>
        <div class='col-lg-6 col-xl-7 d-none d-lg-block text-light important-text'>
        <CommerceDesktopMenu
        v-bind:isActive="Active"/>
        </div>
      </div>
       <div class='row'>
         <div class='col-12 d-lg-none'>
           <CommerceMobileMenu v-bind:isActive="Active"/>
         </div>
       </div>
       <hr class='d-lg-none'>
    </div>
</template>

<script>
import CommerceDesktopMenu from '@/components/CommerceDesktopMenu.vue'
import CommerceMobileMenu from '@/components/CommerceMobileMenu.vue'
export default {
  name: 'Menu',
  props:['Active'],
  components:{
    CommerceDesktopMenu,
    CommerceMobileMenu
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