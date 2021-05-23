<template>
    <div class='row mt-3'>
        <div class='col-1 offset-10 mr-2'>
            <router-link to=''>
                    <span aria-hidden="true" class="h2"><a @click="$router.go(-1)" class="color-orange">&times;</a></span>
            </router-link>
        </div>
        <div class='col-12 text-center mb-5'>
            <p class='h2'><span class='color-orange'><i class="fa fa-search" aria-hidden="true"></i></span>&nbsp;
            <span class='important-text'>Каталог</span></p>
        </div>
        <div class='col-12 text-center mt-2'>
            <p class='h2'><router-link to='/museums'><span class='color-orange'><img src='@/assets/exhibition.svg'></span>&nbsp;Музеи</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center mt-2'>
            <p class='h2'><router-link to='/theatres'><span class='color-orange'><img src='@/assets/theater.svg'></span>&nbsp;Театры</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center mt-2'>
            <p class='h2'><router-link to='/cinemas'><span class='color-orange'><i class="fa fa-film" aria-hidden="true"></i></span>&nbsp;Кинотеатры</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center mt-2'>
            <p class='h2'><router-link to='/cafes'><span class='color-orange'><i class="fa fa-cutlery" aria-hidden="true"></i></span>&nbsp;Кафе и рестораны</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/transport'><span class='color-orange'><i class="fa fa-bus" aria-hidden="true"></i></span>&nbsp;Транспорт</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/Sports'><span class='color-orange'><i class="fa fa-heart" aria-hidden="true"></i></span>&nbsp;Спортивный досуг</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/Ecotrips'><span class='color-orange'><i class="fa fa-map-signs" aria-hidden="true"></i></span>&nbsp;Пешие прогулки</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/intplace'><span class='color-orange'><i class="fa fa-binoculars" aria-hidden="true"></i></span>&nbsp;Интересные места</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/students'><span class='color-orange'><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>&nbsp;Учащимся</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/commerce'><span class='color-orange'><i class="fa fa-money" aria-hidden="true"></i></span>&nbsp;Партнерам</router-link></p>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    method() {
        this.$router.go(-1)
    }
}
</script>
<style scoped>
a{
 color:#1B1F3B !important;
 text-decoration: none !important;
}
i{
    width: 35px !important;
}
</style>