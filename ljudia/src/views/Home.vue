<template>
  <div class="home-parent">
    
    

    <div class="content-container">
        
          <h1 class="home-header">Music forever, wherever, whenever</h1>
        
          <p>
            We believe listening should be a simple and pleasant experience. 
            That's why we created infinimusic, a scaled-back, simple music streaming service with an integrated music player and track queue. 
            Use your preferred device, find your favorite tunes and start listening - no signup required!
          </p>

    </div>

    <div class="logo-container">
      <i class="fas fa-infinity logo"></i>
      <i class="fas fa-music logo"></i>
    </div>
      <p id="tagline">infinimusic</p>
    
  </div>
</template>

<style scoped>

.home-parent{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.logo-container{
  color: #22577a;
  font-size: 17vh;
  padding-top: 1vh;
}

.content-container{
  width: 45vw;
  font-family: 'Roboto', sans-serif;
  font-size: 2.5vh;
  color: #22577a;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
}
.home-header{
  margin: 0;
  text-align: center;
  font-size: 5.5vh;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}

#tagline{
  font-family: 'Bungee', cursive;
  font-size: 3.5vh;
  color: #22577a;
  margin: 0;
  padding: 0;
}


</style>
