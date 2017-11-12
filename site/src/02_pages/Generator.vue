<template>
    <div style="margin-top: 5rem;">
        <h1>Generator</h1>
        <twitter-form></twitter-form>
    </div>
</template>

<script>
	/*Import Components*/
    import TwitterForm from '../00_components/TwitterForm.vue';

    export default {
        components: {
            'twitter-form': TwitterForm,
        }
    }
</script>