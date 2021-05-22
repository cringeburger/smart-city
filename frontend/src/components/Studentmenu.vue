<template>
    <div class='container-fluid pt-4'>
      <div class='row'>
        <div class='col-12 col-lg-6 col-xl-5 text-center color-orange important-text'>
              <router-link to='/'><h2><img src="@/assets/logo.png"/>&nbsp;Умный город</h2></router-link>
        </div>
        <div class='col-lg-6 col-xl-7 d-none d-lg-block text-light important-text'>
        <StudentDesktopMenu
        v-bind:isActive="Active"/>
        </div>
      </div>
       <div class='row'>
         <div class='col-12 d-lg-none'>
           <StudentMobileMenu v-bind:isActive="Active"/>
         </div>
       </div>
       <hr class='d-lg-none'>
    </div>
</template>

<script>
import StudentDesktopMenu from '@/components/StudentDesktopMenu.vue'
import StudentMobileMenu from '@/components/StudentMobileMenu.vue'
export default {
  name: 'Menu',
  props:['Active'],
  components:{
    StudentDesktopMenu,
    StudentMobileMenu
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