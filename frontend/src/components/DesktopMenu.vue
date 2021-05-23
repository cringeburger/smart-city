<template>
    <ul class="nav nav-fill">
        <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
            v-bind:class="{active: isActive[0].Home}">Главная</router-link>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"
            v-bind:class="{active: isActive[0].Cataloge}">Каталог</a>
            <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/transport">Транспорт</router-link></li>
            <li><router-link class="dropdown-item" to="/museums">Музеи</router-link></li>
            <li><router-link class="dropdown-item" to="/theatres">Театры</router-link></li>
            <li><router-link class="dropdown-item" to="/cinemas">Кинотеатры</router-link></li>
            <li><router-link class="dropdown-item" to="/Cafes">Кафе и рестораны</router-link></li>
            <li><router-link class="dropdown-item" to="/sports">Спортивный досуг</router-link></li>
            <li><router-link class="dropdown-item" to="/Ecotrips">Пешие прогулки</router-link></li>
            <li><router-link class="dropdown-item" to="/intplace">Интересные места</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/students">Учащимся</router-link></li>
            <li><router-link class="dropdown-item" to="/commerce">Партнерам</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/reports">Ваши пожелания</router-link></li>
            </ul>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/profile"
            v-bind:class="{active: isActive[0].Profile}">Профиль</router-link>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'DesktopMenu',
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