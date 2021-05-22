<template>
    <div class='col-12 col-lg-4 col-md-6 text-center'
    v-bind:class="{'offset-md-3 offset-lg-0':carditem.thirt}">
        <div class='card'
        v-bind:style="{border: '1px solid'+carditem.maincolor, background: carditem.background}">
            <div class='card-body text-center'>
                <div class='headerIcon'
                v-bind:style="{border: '1px solid'+carditem.maincolor, background: carditem.maincolor}">
                    <i class="fa h1" aria-hidden="true"
                    v-bind:class="carditem.icon"></i>
                </div>
                <div class='container mt-5 important-text'
                v-bind:style="{color: carditem.maincolor}">
                        <strong>{{carditem.title}}</strong>
                </div>
                <div class='container mt-3 liblock color-blue'>
                    <ul class='custom'>
                        <SecBannerCardLi
                        v-for="carditem of carditem.li" :key="carditem.id"
                        v-bind:carditem="carditem"/>
                    </ul>
                    <p>{{carditem.bottomtext}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SecBannerCardLi from '@/components/SecBannerCardLi.vue'
export default {
    props:['carditem'],
    components: {
        SecBannerCardLi
    }
}
</script>

<style scoped>
.card{
    border-radius: 4px;
    width: 100%;
}
.headerIcon{
    height: 140px;
    width: 140px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    line-height: 140px;
    margin: -85px auto 0;
    border-radius: 8px;
}
.headerIcon i{
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: #F1F2F6;
    margin-top: 45px;
}
.liblock{
    background: #F1F2F6;
    border: 1px solid #F1F2F6;
    border-radius: 4px;
}
.custom{
    list-style: none !important;
    padding-left: 5px !important;
}
.card-body{
    font-size: 1.25em;
}
@media (max-width:992px) {
    .card{
        max-width: 334px;
        margin-bottom: 90px;
    }
}
@media (max-width:796px) {
    .card{
        margin-bottom: 90px;
    }
    .liblock{
        padding: 0 !important;
    }
}
@media (max-width:767px) {
    .card{
        margin: 0 auto;
        margin-bottom: 90px;
    }
}
</style>