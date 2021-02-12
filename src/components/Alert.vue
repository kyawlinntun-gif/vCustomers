<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {{ successMessage }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: ['successMessage'],
}
</script>

<style>

</style>