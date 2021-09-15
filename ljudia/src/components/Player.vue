<!-- <template>
    
    <div class="miniplayer-parent">
        
        <div class="miniplayer-metadata"> 
            <strong>Now playing</strong>
            <p>Never Gonna Give You Up</p>
            <p>Rick Astley</p>
        </div>

        <div class="miniplayer-buttons"> 
            <button>
                <i class="fas fa-step-backward mini-buttons" id="mini-previousbutton"></i>
            </button>
            <button>
                <i class="fas fa-play mini-buttons" id="mini-playbutton"></i>
            </button>
            <button>
                <i class="fas fa-pause mini-buttons" id="mini-pausebutton"></i>
            </button>
            <button>
                <i class="fas fa-step-forward mini-buttons" id="mini-nextbutton"></i>
            </button>
        </div>

        <div class="miniplayer-volume"> 
            <button>
                <i class="fas fa-volume-up mini-buttons" id="mini-maxvolume"></i>
            </button>
            <button>
                <i class="fas fa-volume-down mini-buttons" id="mini-lowvolume">less than 50%</i>
            </button>
            <button>
                <i class="fas fa-volume-mute mini-buttons" id="mini-mutedvolume"></i>
            </button>

            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </div>

        <div class="miniplayer-expander"> 
            <button>
                <i class="fas fa-angle-double-up mini-buttons" id="mini-expandbutton"></i> 
            </button>
            <p>Expand player</p>
        </div>

    </div>
    
</template> -->

<template>
  <div>
    <button @click="play('DXxeOvvNNwc')">The Black Page #1 on piano</button>
    <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button>
    <button @click="pause()">Pause</button>
  </div>
</template>

<script>
export default {
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    }
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

#mini-previousbutton, #mini-nextbutton, #mini-maxvolume, #mini-lowvolume, #mini-mutedvolume{
    color: #22577a;
}
#mini-playbutton, #mini-pausebutton, #mini-expandbutton{
    color: #57cc99;
}

#mini-lowvolume, #mini-mutedvolume{
    display: none;
}

</style>