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
<!-- <div v-else></div> -->
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
   // setup() {
   //    const store = useStore();
   //    store.dispatch("productsGet");
   //    let products = computed(()=> this.$store.state.products)
   //    return{
   //       products,
   //    }
   // },
   methods: {
      sortPrice() {
         this.$store.commit("sortProductsByPrice");
      }
   },
   computed: {
      products() {
         return this.$store.state.products;
      },
      filtering() {
         if(this.searching.trim().length > 0) {
            return this.products.filter((name) => name.prodName.toLowerCase().include(this.searching.trim()))
         }
         return this.products
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
