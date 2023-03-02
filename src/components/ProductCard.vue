<template lang="">
    <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <img :src="product.image_url" :alt="product.title" />
        <h3>
            {{ product.title }}
        </h3>
        <p>Area: {{ product.area }}</p>
        <p>Price: R{{ product.price }}</p>
    </router-link>
</template>
<script>
export default {
    props: ["product"]
    
}
</script>
<style >
img{
    height: 150px;
    width: 100%;
    object-fit: cover;
}
    
</style>