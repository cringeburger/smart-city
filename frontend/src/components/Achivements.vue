<template>
    <div class='col-6 col-md-3 col-xxl-2 mb-2'>
        <div class='card'>
            <div class='card-body'>
                <div class='row'>
                    <div class='col-12'>
                        <img class="img-fluid"
                            v-bind:src="achive.img"
                            v-bind:class="{'inactive':!achive.status}">
                    </div>
                    <div class='col-12'>
                        <p class='important-text color-blue h4'>{{achive.name}}</p>
                    </div>
                    <div class='col-12'>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuemin="0" aria-valuemax="100"
                                v-bind:aria-valuenow="achive.progressbar"
                                v-bind:style="[sizeStyle]">
                            </div>
                        </div>
                    </div>
                    <div class='col-12'>
                        <p class='h5'>{{achive.tooltip}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['achive'],
    computed:{
        sizeStyle: function(){
            return {
                'width': this.achive.progressbar+"%"
            }
        }
    }
}
</script>
<style scoped>
.card-body{
    padding: 0 !important;
}
.inactive{
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
.card{
    max-width: 283px;
    margin: 0 auto;
}
</style>