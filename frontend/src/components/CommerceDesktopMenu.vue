<template>
    <ul class="nav nav-fill">
        <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/commerce"
            v-bind:class="{active: isActive[0].Profile}">Профиль</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/commerce/organizations"
            v-bind:class="{active: isActive[0].Organization}">Мои Организации</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/commerce/transactions"
            v-bind:class="{active: isActive[0].Transaction}">Мои Транзакции</router-link>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'CommerceDesktopMenu',
  props:['isActive'],
  components:{
  }
}
</script>
<style scoped>
.nav-link{
    font-size: 1.5em;
    color:#1B1F3B;
}
.nav-link.active{
    text-decoration: solid underline #1B1F3B;
    background-color: transparent;
}
.nav-link:hover{
    text-decoration: solid underline #1B1F3B;
}
#home .nav-link{
    font-size: 1.5em;
    color:#F1F2F6;
}
#home .nav-link.active{
    text-decoration: solid underline #F1F2F6;
    background-color: transparent;
}
#home .nav-link:hover{
    text-decoration: solid underline #F1F2F6;
}
</style>