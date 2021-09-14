<template>
  <div class="home-parent">
    
    <div class="logo-container">
      <i class="fas fa-infinity logo"></i>
      <i class="fas fa-music logo"></i>
    </div>

    <div class="content-container">
        
          <h1 class="home-header">Music forever, wherever, whenever</h1>
        
          <p>
            We believe listening should be a simple and pleasant experience. 
            That's why we created infinimusic, a scaled-back, simple music streaming service with an integrated music player and track queue. 
          </p>
          <p>
            Use your preferred device, find your favorite tunes and start listening - no signup required!
          </p>

    </div>
    
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
  font-size: 18vh;
}

.logo:hover{
  color: #0099ff;
}

.content-container{
  width: 70vw;
  font-family: 'Roboto', sans-serif;
  font-size: 3vh;
  color: #22577a;
  align-items: center;
}
.home-header{
  text-align: center;
  font-size: 5vh;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}


</style>
