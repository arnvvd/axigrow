<template>
    <section class="container">
        <div class="container__inner">  
            <twitter-form></twitter-form>
        </div>
    </section>        
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