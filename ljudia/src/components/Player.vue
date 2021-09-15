<template>
    
    <div class="parent">
        
        <div class="div1"> 
            <strong>Now playing</strong>
            <p>Never Gonna Give You Up</p>
            <p>Rick Astley</p>
        </div>

        <div class="div2"> 
            <i class="fas fa-step-backward previousbutton mini-buttons"></i>
            <i class="fas fa-play playbutton mini-buttons"></i>
            <i class="fas fa-pause mini-buttons"></i>
            <i class="fas fa-step-forward nextbutton mini-buttons"></i>
        </div>

        <div class="div3"> 
            <i class="fas fa-volume-up mini-buttons"></i>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            <!-- <i class="fas fa-volume-down mini-buttons">less than 50%</i>
            <i class="fas fa-volume-mute mini-buttons">mute</i> -->
        </div>

        <div class="div4"> 
            <i class="fas fa-angle-double-up mini-buttons"></i> Expand player
        </div>

    </div>
    
    <!-- <div class="player-minified">
        
        <div class="mini-metadata">
            <strong>Now playing</strong>
            <p>Never Gonna Give You Up</p>
            <p>Rick Astley</p>
        </div>
            
        

        <div class="mini-playerbuttons">
             
            <i class="fas fa-step-backward previousbutton mini-buttons"></i>
            <i class="fas fa-play playbutton mini-buttons"></i>
            <i class="fas fa-pause mini-buttons"></i>
            <i class="fas fa-step-forward nextbutton mini-buttons"></i>
            <p>+ PROGRESS BAR</p>
            
        </div>

        <div class="mini-volumearea">
            
            <i class="fas fa-volume-up mini-buttons"></i>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            <i class="fas fa-volume-down mini-buttons">less than 50%</i>
            <i class="fas fa-volume-mute mini-buttons">mute</i>
        </div>

        <div class="mini-expandtoggle">
            <i class="fas fa-angle-double-up mini-buttons"></i> Expand player
        </div>

    </div> -->
</template>

<style scoped>

.parent {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: #38a3a5c9;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8.2vh;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.player-minified{
    background: #38a3a5c9;
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw;
    height: 10vh;
    bottom: 8.2vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    outline: 1px solid black;
    padding: 1vh 1vw 0 1vw;
}

.mini-metadata{
    width: 20%;
}

.mini-playerbuttons{
    width: 50%;
}

.mini-volumearea{
    width: 20%;
}

.mini-expandtoggle{
    width: 20%;
}

.mini-buttons{
    font-size: 4vh;
}
.previousbutton, .nextbutton{
    color: #22577a;
}
.playbutton{
    color: #57cc99;
}

</style>