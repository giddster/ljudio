<template>
    
    <div class="miniplayer-parent">
        
        <div class="miniplayer-metadata"> 
            <strong>Now playing</strong>
            <p>Never Gonna Give You Up</p>
            <p>Rick Astley</p>
        </div>

        <div class="miniplayer-buttons"> 
            <i class="fas fa-step-backward mini-buttons" id=""></i>
            <i class="fas fa-play mini-buttons"></i>
            <i class="fas fa-pause mini-buttons"></i>
            <i class="fas fa-step-forward mini-buttons"></i>
            
        </div>

        <div class="miniplayer-volume"> 
            <i class="fas fa-volume-up mini-buttons"></i>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            <!-- <i class="fas fa-volume-down mini-buttons">less than 50%</i>
            <i class="fas fa-volume-mute mini-buttons">mute</i> -->
        </div>

        <div class="miniplayer-expander"> 
            <i class="fas fa-angle-double-up mini-buttons"></i> Expand player
        </div>

    </div>
    
</template>

<style scoped>

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
}
.miniplayer-buttons { 
    grid-area: 1 / 2 / 2 / 3; 
    
}
.miniplayer-volume { 
    grid-area: 1 / 3 / 2 / 4; 

}
.miniplayer-expander { 
    grid-area: 1 / 4 / 2 / 5; 

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