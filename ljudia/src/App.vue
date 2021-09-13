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
body{
  background: #57cc99;
  padding-top: 7vh;
  height: 60vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  
  components: { Header, Footer }
}
</script>