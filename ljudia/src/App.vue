<template>
  <header>
    <Header />
  </header>

  <body>
    <router-view/>
  </body>

  <div class="test">
    
  </div>


  <footer>
    <Player />
    <Footer />
  </footer>
  
</template>

<style>
/* font-family: 'Bungee', cursive;
font-family: 'IBM Plex Sans Arabic', sans-serif;
font-family: 'Roboto', sans-serif; */

body {
    margin: 0 0 15vh 0;
    background: #91daba;
    width: 100%;
}

header, footer {
    position: fixed;
    left: 0;
    width: 100vw;
    height: 7vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}

header {
    top: 0;
}

footer {
    bottom: 0;
}

button{
    background: #38a3a500;
    border: none;
    cursor: pointer;
}

button:active{
    background-color: #3ed9db;
}

#app {
  margin: 10vh 2vw 0vh 2vw;
}


</style>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Player from '@/components/Player.vue'

export default {
  
  components: { Header, Footer, Player }
}
</script>