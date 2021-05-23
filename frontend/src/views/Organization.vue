<template>
    <div id='Organization'>
        <Menu
        v-bind:Active="isActive"/>
        <OrgView/>
        <Footer/>
    </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/footer.vue'
import OrgView from '@/components/OrgView.vue'
export default {
    components: {
    Menu,
    OrgView,
    Footer
    },
    data(){
        return{
        isActive:[{Home:false, Cataloge:true, Profile:false}]
        }
    },
    mounted(){
        console.log(this.link);
    }
}
</script>