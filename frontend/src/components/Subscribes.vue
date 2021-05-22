<template>
    <div id='subscribesWindow'>
        <div class='row row-flex row-flex-wrap'>
            <Organizations
                v-for="organzations of subs" :key="organzations.id"
                v-bind:organzations="organzations"/>
        </div>
    </div>
</template>
<script>
import Organizations from '@/components/Organizations.vue'
export default {
    props:['subs'],
    components:{
        Organizations
    }
}
</script>