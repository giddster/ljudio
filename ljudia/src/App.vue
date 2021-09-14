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
    <Footer />
  </footer>
  
</template>

<style>
/* font-family: 'Bungee', cursive;
font-family: 'IBM Plex Sans Arabic', sans-serif;
font-family: 'Roboto', sans-serif; */

body {
    margin: 0 0 10vh 0;
    background: #91daba;
    height: 60vh;
    width: 100%;
}

header, footer {
    position: fixed;
    left: 0;
    width: 100vw;
    height: 8vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}

header {
    top: 0;
}

footer {
    bottom: 0;
}

#app {
  margin: 10vh 2vw 0vh 2vw;
}


</style>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  
  components: { Header, Footer }
}
</script>