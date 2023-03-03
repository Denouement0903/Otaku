<template >
    <div v-if="product" class="product-details">
        <img :src="product.image_url" :alt="product.title" />
        <div>
            <h2>{{ product.title }}</h2>
            <p>Anime: {{ product.Anime }}</p>
            <p>Price: {{ product.price }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ["id"],
    computed: {
        property() {
            return this.$store.state.product;
        }
    },
    mounted() {
        this.$store.dispatch("getProduct",this.id);
    }
};
</script>
<style scoped >
.product-details{
    display: flex;
}
</style>