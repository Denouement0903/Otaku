<template>
  <div class="landing">
    <h1 class="pt-2">Welcome to Otaku</h1>
    <img alt="" src="../assets/41fc154f9ce33ce3254599f1c8b653dd-removebg-preview.png" class="levi">
    <HelloWorld />
  </div>
  <div class="about">
    <h3 class="container bg-body-emphasis text-black">Anime figures from Otaku, if you are looking for the best place to buy anime figures, our Japanese anime figures are more than just collectables; they’re a fundamental part of otaku culture!

Characters from your favorite animes, mangas, and video games are transformed and brought to life as three-dimensional anime statues and are perfect for decorating your space.

Choose from all your favorite franchises, like Dragon Ball, Sword Art Online, One Piece, Demon Slayer, Attack On Titan, Hatsune Miku, and so many more!
Otaku is a leading anime figures website; you can be sure that all the anime figurines we stock are authentic. When you buy anime figures, you can trust Otaku! 

</h3>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
name: 'HomeView',
components: {
  HelloWorld
}
}
</script>

<style>
.landing{
  height: 90vh;
  background-image: url(https://i.postimg.cc/2yqfmyRY/Nice-Png-japan-png-445294.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
.about{
  height: 100vh;
  background-image: url(https://i.postimg.cc/prqkWTLq/Nice-Png-japan-png-445294-flipped.png);
  background-size: contain;
  background-repeat: no-repeat;
}
h3{
  padding-top: 25%;
}

h1{
  font-family: 'Times New Roman', Times, serif;

}
h1:hover{
  color: darkcyan;
  transition: 0.4s;
}


</style>
