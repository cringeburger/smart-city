<template>
    <option v-bind:value="option.id">{{option.name}}</option>
</template>
<script>
export default {
    props:['option']
}
</script>