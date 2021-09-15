<template>
    
    <div class="miniplayer-parent">
        
        <div class="miniplayer-metadata"> 
            <strong>Now playing</strong>
            <p>SONG TITLE</p>
            <p>ARTIST NAME</p>
        </div>

        <div class="miniplayer-buttons"> 
            <button>
                <i class="fas fa-step-backward mini-buttons" id="mini-previousbutton"></i>
            </button>

            <button @click="play('DXxeOvvNNwc')">
                <i class="fas fa-play mini-buttons" id="mini-playbutton"></i>
            </button>

            <button @click="pause()">
                <i class="fas fa-pause mini-buttons" id="mini-pausebutton"></i>
            </button>

            <button>
                <i class="fas fa-step-forward mini-buttons" id="mini-nextbutton"></i>
            </button>

        </div>

        <div class="miniplayer-volume"> 
            <button @click="toggleMute()">
                <i v-if="!isMuted && volume >= 50" class="fas fa-volume-up mini-buttons" id="mini-maxvolume"></i>
                <i v-else-if="!isMuted && volume >= 1" class="fas fa-volume-down mini-buttons" id="mini-lowvolume"></i>
                <i v-else-if="!isMuted && volume < 1" class="fas fa-volume-off mini-buttons" id="mini-novolume"></i>
                <i v-else class="fas fa-volume-mute mini-buttons" id="mini-mutedvolume"></i>
            </button>

            <input @change="setVolume()" type="range" min="0" max="100" value="50" class="slider" id="volumeSlider">
        </div>

        <div class="miniplayer-expander"> 
            <button>
                <i class="fas fa-angle-double-up mini-buttons" id="mini-expandbutton"></i> 
            </button>
            <p>Expand player</p>
        </div>

    </div>
    
</template>

<script>
export default {
  data(){
      return {
        isLoaded: false,
        isMuted: false,
        volume: 0
      }
  },

  methods:{
    
    play(id){
      if(!this.isLoaded){
            window.player.loadVideoById(id);
            window.player.playVideo();
            this.isLoaded = true;
      } else {
            window.player.playVideo();
      }
            window.player.setVolume(document.getElementById('volumeSlider').value);
    },

    pause(){
      window.player.pauseVideo();
    },

    toggleMute(){
            if(window.player.isMuted()){
                this.isMuted = false
                window.player.unMute();
            } else {
                window.player.mute();
                this.isMuted = true
            }
    },
    
    setVolume(){
        this.volume = document.getElementById('volumeSlider').value;
        window.player.setVolume(this.volume);
    }
    // getCurrentTime(){
    //     window.player.getCurrentTime()
    // }
  }
}
</script>

<style scoped>

/* minified player */
.miniplayer-parent {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 0.5fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: #38a3a5c9;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8.2vh;
    padding-top: 1vh;
}

.miniplayer-buttons, .miniplayer-volume, .miniplayer-expander {
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    justify-content: center;
}

.miniplayer-metadata { 
    grid-area: 1 / 1 / 2 / 2;
    margin-left: 1vw;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #22577a;
}
.miniplayer-buttons { 
    grid-area: 1 / 2 / 2 / 3; 
}

button {
    background: #38a3a500;
    border: none;
}

button:hover{
    background: #38a3a5;
}
.miniplayer-volume { 
    grid-area: 1 / 3 / 2 / 4; 

}
.miniplayer-expander { 
    grid-area: 1 / 4 / 2 / 5; 
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #22577a;
    font-size: 2vh;
}

.mini-buttons{
    font-size: 4.5vh;
    padding: 0.3vw;
}

#mini-previousbutton, #mini-nextbutton, #mini-maxvolume, #mini-lowvolume, #mini-novolume, #mini-mutedvolume{
    color: #22577a;
}
#mini-playbutton, #mini-pausebutton, #mini-expandbutton{
    color: #57cc99;
}

</style>