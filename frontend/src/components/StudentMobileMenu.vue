<template>
 <div class='container-fluid MobileMenu'>
    <ul class="nav nav-pills nav-fill ">
        <li class="nav-item">
            <router-link class="nav-link text-center" aria-current="page" to="/students"
            v-bind:class="{active: isActive[0].Profile}">
            <span class='color-orange small-icon'><i class="fa fa-user" aria-hidden="true"></i></span><br>
            Профиль
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/students/studentcataloge"
            v-bind:class="{active: isActive[0].Cataloge}">
            <span class='color-orange small-icon'><i class="fa fa-search" aria-hidden="true"></i></span><br>
            Каталог
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/students/pass"
            v-bind:class="{active: isActive[0].Pass}">
            <span class='color-orange small-icon'><i class="fa fa-unlock" aria-hidden="true"></i></span><br>
            Пропуск
            </router-link>
        </li>
    </ul>
 </div>  
</template>
<script>
export default {
  name: 'StudentMobileMenu',
  props:['isActive'],
  components:{
  }
}
</script>
<style scoped>
.MobileMenu{
    z-index: 990;
    background: #f7f9fc !important;
    margin-left: -12px !important;
}
.nav-pills .nav-link.active{
    color:#27187E;
    text-decoration: solid underline #27187E;
    background-color: transparent;
}
a{
    color:#27187E !important;
}
.nav-link{
    font-size: 1.5em;
}
.small-icon{
    font-size: 1.7em;
}
.MobileMenu{
    overflow: hidden;
    position: fixed;
    bottom: 0;
    padding: 0 !important;
}
@media (max-width:372px) {
    .nav-link{
    font-size: 1.15em;
    }
    .small-icon{
    font-size: 1.5em;
    }
}
</style>