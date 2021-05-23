<template>
    <div class='col-12 col-md-10 offset-md-1 col-xxl-8 offset-xxl-2 mb-4'>
            <div class='card bigOrganizationCard'
            v-bind:class="org.systname">
                <div class='row'>
                    <div class='col-10 text-left ml-2'>
                        <p class='h3 color'>{{org.name}}</p>
                        <p class='h5'>{{org.type}}</p>
                    </div>
                    <div class='col-2 text-center'>
                    <p class='important-text color-orange h4'><i class="fa fa-star" aria-hidden="true"></i>{{org.rating}}</p>
                    </div>
                    <div class='col-12 col-lg-6 col-xxl-4 text-left'>
                        <img class="img-fluid"
                            v-bind:src="org.img">
                        <p class='color h5 ml5'>{{org.adress}}</p>
                    </div>
                    <div class='col-12 col-lg-6 col-xxl-8 text-left'>
                        <p class='h4'>Описание</p>
                        <p class='h5'>{{org.smallcontent}}</p>
                    </div>
                    <div class='col-12 col-lg-6 offset-lg-6 offset-xl-6 text-center'>
                        <router-link :to="{ name: 'Edit', params: { orgId: org.link }, props: {link:org.link} }">
                            <button class='btn_default'>Перейти</button>
                        </router-link>
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
</style>