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
            <p class='h2'><router-link to='/'><span class='color-orange'><i class="fa fa-cutlery" aria-hidden="true"></i></span>&nbsp;Оплата кафе</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/'><span class='color-orange'><i class="fa fa-bus" aria-hidden="true"></i></span>&nbsp;Транспорт</router-link></p>
            <hr>
        </div>
        <div class='col-12 text-center'>
            <p class='h2'><router-link to='/students'><span class='color-orange'><i class="fa fa-home" aria-hidden="true"></i></span>&nbsp;Обычная версия сайта</router-link></p>
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