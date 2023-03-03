<template>
 <button @click="sortPrice">Sort By Price</button>
 <input type="text" v-model="search" placeholder="Search"/>
 <select v-model="anime">
    <option value="All">All</option>
    <option value="Attack on titan">Attack on titan</option>
    <option value="DragonBall">DragonBall</option>
    <option value="Overlord">Overlord</option>
    <option value="Rezero">Rezero</option>
    <option value="Demon Slayer">Demon Slayer</option> 
 </select>
 <div v-if="products" class="flex-container">
   <ProductCard v-for="product of products" :key="product.id" :product="product"></ProductCard>
</div>
<div v-else> loading...</div>
</template>
<script>

import ProductCard from "../components/ProductCard.vue";

export default {
   data() {
      return {
         search: "",
         anime: "All",
      }
   },
   methods: {
      sortPrice() {
         this.$store.commit("sortProductsByPrice");
      }
   },
   computed: {
      products() {
         return this.$store.state.products?.filter((product) => {
            let isMatch = true;
            if (!product.title.lowerCase().includes(this.search.toLowerCase())) {
               isMatch = false;
            }
            return isMatch;
         })
      }
   },
   mounted() {
      this.$store.dispatch("getProducts")
   },
   components: { ProductCard },
}
</script>
<style>
.flex-container{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 30px;
}
</style>
