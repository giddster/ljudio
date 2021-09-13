<template>
  <header>
    <Header />
  </header>

  <body>
    <router-view/>
  </body>

  <footer>
    <Footer />
  </footer>
  
</template>

<style>

body {
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
}

header {
    top: 0;
}

footer {
    bottom: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
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