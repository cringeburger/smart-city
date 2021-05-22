<template>
    <tr class='table-light'>
        <th>{{rows.type}}</th>
        <th>{{rows.recipient}}</th>
        <th>{{rows.value}}</th>
        <th>{{rows.data}}</th>
    </tr>
</template>
<script>
export default {
    props: ['rows']
}
</script>
<style scoped>
th{
    white-space: nowrap !important;
}
</style>