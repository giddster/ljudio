<template>
  <div class="about-container">
    
    <div class="about-header">
        <h1>About infinimusic</h1>
    </div>

    <div class="about-container-inner">
          <div class="avatar"></div>

          <div class="bio">
            <p>Hello! </p>

            <p>
              My name is Christian Elm and I am the creator of this little web app. This app is part of the grading for a short web development class
              at Newton Yrkeshögskola, where I'm currently studying .NET development. I will graduate in June 2022. 
            </p>

            <p>
              The task for this class was to create a web app that fetches music data from the YouTube music service, using a custom API called Heroku (designed by our teachers).
              The class was instructed to provide a search function, a music player with a queue, scalability for different device screen widths and multiple views to render to the DOM.
              The name infinimusic is just a placeholder name, not a registered trademark. 
            </p>

            <p>If you want to get in touch with me, or look at the source code, follow the links below:</p>

            <p>
              <a href="https://www.linkedin.com/in/christian-elm/" target="blank">
                <i class="fab fa-linkedin socials"></i>
              </a>

              <a href="https://github.com/giddster/ljudia_christianelm" target="blank">
                <i class="fab fa-github-square socials"></i>
              </a>
            </p>
          
          </div>

    </div>

  </div>
</template>

<style scoped>
.about-container{
  margin: 0 10vw 0 10vw;
}

.about-header{
  text-align: center;
  font-size: 3vh;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}

.about-container-inner{
  display: flex;
  width: 70vw;
  margin: -2vh 3vw 0 3vw;
}

.avatar{
    background-image: url(../assets/avatar-normal.png);
    background-repeat: no-repeat;
    background-size: 20vw;
    border-radius: 30px;
    width: 20vw;
    height: 40vh;
  }
  .avatar:hover{
      background-image: url(../assets/avatar-smile.png);
    }

.bio{
    width: 50vw;
    margin-top: -1vh;
    padding: 0 1vw;
    font-family: 'Roboto', sans-serif;
    font-size: 2.2vh;
    color: #22577a;
}

.socials{
    font-size: 4.5vh;
    color: #22577a;
    padding: 1vh 0.5vw;
}

.socials:hover{
  zoom: 1.1;
  color: #56007e;
}

</style>
