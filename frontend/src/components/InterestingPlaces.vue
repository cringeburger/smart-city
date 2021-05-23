<template>
    <div class='col-12 col-md-10 offset-md-1 col-xxl-8 offset-xxl-2 mt-4 mb-4'>
        <div class='card bigOrganizationCard'
        v-bind:class="org.systname">
            <div class='row'>
                <div class='col-12 col-lg-5 text-left ml-2'>
                    <p class='h3 color'>{{org.name}}</p>
                    <p class='color h5 ml5'>{{org.adress}}</p>
                </div>
                <div class='col-12 col-lg-7 text-left'>
                    <img class="img-fluid orgImage"
                        v-bind:src="org.img1">
                </div>
                <div class='col-12 col-lg-5 text-left'>
                    <p class='h4'>Описание</p>
                    <p class='h5'>{{org.smallcontent}}</p>
                </div>
                <div class='col-12 col-lg-7 text-center mt-2'>
                    <img class="img-fluid orgImage"
                        v-bind:src="org.img2">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BigOrganization',
    props:['org'],
}
</script>
<style scoped>
.bigOrganizationCard{
    margin: 0 auto;
    padding: 10px;
}
a{
    color: unset !important;
    text-decoration: none;
}
.btn_default{
    width: 150px;
}
img{
    max-height: 350px;
    margin: 0 auto;
}
</style>