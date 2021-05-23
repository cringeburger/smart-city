<template>
    <div class='container-fluid pt-4'>
      <div class='row'>
        <div class='col-12 col-lg-6 col-xl-5 color-orange brand-text'>
          <router-link to='/'>
            <div class='row'>
              <div class='col-5 offset-1 text-left'>
                <h2><span class='brand'>НОВО<br>РОС<br>СИЙСК</span></h2>
              </div>
              <div class='col-2 text-left'>
                <img src="@/assets/logo.png" class='ml-5'/>
              </div>
            </div>
            </router-link>
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
  height: 100px;
}
a{
  text-decoration: none !important;
  color: unset  !important;
}
</style>