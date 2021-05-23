<template>
 <div class='container-fluid MobileMenu'>
    <ul class="nav nav-pills nav-fill ">
        <li class="nav-item">
            <router-link class="nav-link text-center" aria-current="page" to="/commerce"
            v-bind:class="{active: isActive[0].Profile}">
            <span class='color-orange small-icon'><i class="fa fa-user" aria-hidden="true"></i></span><br>
            Профиль
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/commerce/organizations"
            v-bind:class="{active: isActive[0].Organization}">
            <span class='color-orange small-icon'><i class="fa fa-briefcase" aria-hidden="true"></i></span><br>
            Фирмы
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/commerce/transactions"
            v-bind:class="{active: isActive[0].Transaction}">
            <span class='color-orange small-icon'><i class="fa fa-rub" aria-hidden="true"></i></span><br>
            Операции
            </router-link>
        </li>
    </ul>
 </div>  
</template>
<script>
export default {
  name: 'CommerceMobileMenu',
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
    color:#7740A6;
    text-decoration: solid underline #7740A6;
    background-color: transparent;
}
a{
    color:#7740A6 !important;
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