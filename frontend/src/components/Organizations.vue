<template>
    <div class='col-6 col-md-4 col-lg-3 col-xxl-2 mb-2'>
        <div class='card'>
            <div class='card-body'>
                <div class='row mt-2'>
                    <div class='col-12 text-left'>
                        <p>{{organzations.type}}</p>
                    </div>
                    <div class='col-8 col-sm-9 text-left'>
                        <p class='important-text color-blue h4 text-left pl-4'>{{organzations.name}}</p>
                    </div>
                    <div class='col-4 col-sm-3 text-center'>
                        <p class='important-text color-orange h4'><i class="fa fa-star" aria-hidden="true"></i>{{organzations.rating}}</p>
                    </div>
                    <div class='col-12 text-left'>
                        <p class='pl-4'>{{organzations.adress}}</p>
                    </div>
                    <div class='col-12'>
                        <img class="img-fluid"
                            v-bind:src="organzations.img">
                    </div>
                    <div class='col-12'>
                        <p class='h5'>{{organzations.content}}</p>
                    </div>
                    <div class='col-1 offset-8'>
                       <router-link class='btn' v-bind:to="organzations.link"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props:['organzations']
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