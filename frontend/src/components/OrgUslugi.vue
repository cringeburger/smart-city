<template>
    <div class='col-6 col-md-4 col-lg-3 col-xxl-2 mb-2'>
        <div class='card'>
            <div class='card-body'>
                <div class='row mt-2'>
                    <div class='col-12 text-center'>
                        <p class='important-text color-blue h4 text-left pl-4'>{{usluga.name}}</p>
                    </div>
                    <div class='col-12'>
                        <img class="img-fluid"
                            v-bind:src="usluga.img">
                    </div>
                    <div class='col-12'>
                        <p class='h5'>{{usluga.content}}</p>
                    </div>
                    <div class='col-12'>
                        <p class='h5'>{{usluga.bonuce}}&nbsp;<span class='color-orange'><i class="fa fa-bold" aria-hidden="true"></i></span></p>
                    </div>
                    <div class='col-12'>
                        <p class='h5'>{{usluga.price}}&nbsp;<span class='color-orange'><i class="fa fa-rub" aria-hidden="true"></i></span></p>
                    </div>
                    <div class='col-1 offset-8'>
                        <router-link :to="{ name: 'Usluga', params: { uId: usluga.link } }">
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props:['usluga']
}
</script>

<style scoped>
.card-body{
    padding: 0 !important;
    max-width: 214px;
}
img{
    object-fit: cover
}
.card{
    margin: 0 auto;
}
@media (max-width:448px) {
    .h4{
        font-size: 18px;
    }
}
</style>