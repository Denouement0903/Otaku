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

 <div class="row justify-content-around ">
    <div v-for="product in products" v-bind:key="product" class="card pt-5" style="width: 18rem;">
  <img :src="product.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">Price: R {{product.price}}</p>
    <button class="btn btn-secondary">Buy</button>
  </div>
</div>
</div>
 <div v-if="products" class="flex-container">
   <ProductCard v-for="product of products" :key="product.id" :product="product"></ProductCard>
</div>
<!-- <div v-else></div> -->
</template>
<script>

import ProductCard from "../components/ProductCard.vue";

export default {
   data() {
      return{
      products:
      [{id: 1, name:'Levi Ackerman',price:299, anime: 'Attack on titan' ,image:'https://i.postimg.cc/Vk5XRK24/banpresto-pvc-scale-figures-attack-on-titan-levi-figure-32956272902188-2000x2000.webp'},
              {id: 2, name:'Son Gohan', price:350, anime: 'DragonBall ',image:'https://i.postimg.cc/PqWsFQwv/bluefin-figma-articulated-figures-dragon-ball-super-super-hero-ultimate-gohan-super-hero-figure-3220.webp'},
              {id: 3, name:'Eren Yeager', price:250, anime: 'Attack on titan',image:'https://i.postimg.cc/2SmSjy7W/ultra-tokyo-connection-pvc-scale-figures-attack-on-titan-eren-yeager-pop-up-parade-28712656207916-20.webp'},
              {id: 4, name:'Albedo', price:499, anime: 'Overlord',image:'https://i.postimg.cc/9Q3qdctX/ultra-tokyo-connection-pvc-scale-figures-overlord-albedo-aqua-float-girls-prize-figure-3125536600887.webp'},
              {id: 5, name:'Emilia', price:299, anime: 'Rezero',image:'https://i.postimg.cc/qqx7V6Zj/ultra-tokyo-connection-pvc-scale-figures-re-zero-emilia-figure-the-great-spirit-puck-33246996856876.webp'},
              {id: 6, name:'Mitsuri', price:699, anime: 'Demon slayer', image:'https://i.postimg.cc/CK8SpfRk/ultra-tokyo-connection-pvc-scale-figures-demon-slayer-mitsuri-kanroji-perching-figure-33178269483052.webp'},
              {id: 7, name:'Gyutaro', price:599, anime: 'Demon slayer',image:'https://i.postimg.cc/mgNKYN1d/banpresto-pvc-scale-figures-demon-slayer-gyutaro-demon-series-figure-vol-8-32513157070892-2000x2000.webp'},
              {id: 8, name:'Hatsuno miku', price:399, anime: 'noodle stopprt',image:'https://i.postimg.cc/h4bbsytR/ultra-tokyo-connection-pvc-scale-figures-hatsune-miku-villain-color-noodle-stopper-33178676920364-20.webp'},
              {id: 9, name:'Makima', price:550, anime:'chainsaw man' ,image:'https://i.postimg.cc/y6GBQH6w/ultra-tokyo-connection-pvc-scale-figures-chainsaw-man-makima-pop-up-parade-33038587756588-2000x2000.webp'},
              {id: 10, name:'Gojo Satori', price:699, anime:'Gojo Satori', image:'https://i.postimg.cc/668T5z8x/ultra-tokyo-connection-pvc-scale-figures-jujutsu-kaisen-0-satoru-gojo-pop-up-parade-33116606529580-2.webp'}
          ]
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
      product() {
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
