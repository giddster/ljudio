<template>
    <div class="song-container" v-for="song in songInfo.content" :key="song">
        
        <div class="song-heading">
                <h1 class="artist-header">
                    <em> {{ song.name }} </em> – {{ song.artist.name }}
                </h1>

                <img class="thumbnail" :src="song.thumbnails[1].url">

                <button @click="getSongLink()" class="sharebutton" title="Copy link to clipboard"><i class="fas fa-share-square"></i> Get song link </button>
                <span class="copylinkconfirm"> Copied to clipboard! <i class="fas fa-check"></i></span>
        </div>
        
        <div class="song-metadata">
            <p>Artist: <span @click="browseArtist(song.artist.browseId)" title="Go to artist" class="artistlink">{{ song.artist.name }}</span> </p>
            <p>Album: {{ song.album.name }} </p>
            <p>Length: {{ getClearDuration(song.duration) }} </p>
            
            <button @click="loadSongToPlayer(song)"> <i class="fas fa-play" id="mini-playbutton"></i> Play </button>
            <button @click="addToQueue(song)"> <i class="fas fa-plus"></i> Add to queue </button>
        </div>
        
    </div>
</template>

<script>
export default {
    
    created(){
        if(!this.$store.state.songInfo.length){
            this.$store.dispatch('getSong', this.$route.params.videoId)
        }
    },

    data(){
        return {
            shareLink: window.location.origin + this.$route.path
        }
    },

    computed: {
        songInfo() {
            return this.$store.state.songInfo;
        },
    },

    methods: {
        getSongLink(){
            navigator.clipboard.writeText(this.shareLink);
            document.querySelector('.copylinkconfirm').classList.toggle("show")
            setTimeout (function() {
                document.querySelector('.copylinkconfirm').classList.toggle("show")
            }, 5000)
        },
        
        getClearDuration(millliseconds){
            let minutes = Math.floor(millliseconds / 60000);
            let seconds = ((millliseconds % 60000) / 1000).toFixed(0);
            return (
            seconds == 60 ? 
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
            );
        },

        loadSongToPlayer(result){
            this.$store.dispatch('populateLoadedSong', result)
            window.player.setVolume(50);
            window.player.loadVideoById(result.videoId)
        },

        addToQueue(result){
            this.$store.dispatch('addToQueue', result)
        },

        browseArtist(browseId) {
            this.$store.dispatch('getArtist', browseId)
                .then( () => {
                    this.$router.push(`/artists/${browseId}`)
                })
        }
    }
    
}
</script>

<style scoped>

.song-container{
    background: #acf1d4b7;
    padding: 2vh 1vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #22577a;
    width: 30vw;
}

.song-heading{
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 2vh;
}

.artist-header{
    text-align: center;
    font-size: 4vh;
    padding: 0;
    margin: 0.5vh 0;
}

.artistlink {
    text-decoration: underline;
}

.artistlink:hover{
    cursor: pointer;
}

.artistlink:active {
    color: #2dc787;
}

.thumbnail{
    max-width: fit-content;
    align-self: center;
    border-radius: 70px;
}

.song-metadata{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    font-size: 2.5vh;
}

button{
    padding: 1vh 1vw;
    color: #22577a;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    cursor: pointer;
}

button:active{
    border: none;
    border-radius: 30px;
}

.sharebutton:active {
    background: none;
    border: none;
    border-radius: 30px;
    color: #2dc787;
}

.copylinkconfirm {
    display: none;
    font-style: italic;
    font-size: 1.6vh;
    color: green;
    text-align: center;
}

.show {
    display: flex;
    flex-direction: column;
}

p{
    padding: 0;
    margin: 1vh 0;
}

</style>