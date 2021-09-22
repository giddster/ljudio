<template>
    <div class="artist-container">
        <div class="artist-heading">
            <h1 class="artist-header">{{ artistInfo.name }}</h1>
            
            <button @click="getArtistLink()"><i class="fas fa-share-square"></i> Share artist link </button>

            <img class="thumbnail" :src="artistInfo.thumbnails[0].url" alt="">
            
        </div>
        
        <div class="artist-metadata">
                <ul>
                    <h2>Albums: </h2>
                    <li v-for="album in artistInfo.products.albums.content" :key="album">
                            {{ album.name }} ({{ album.year }})
                    </li>
                </ul>
                <ul>
                    <h2>Songs: </h2>
                    <li v-for="song in artistInfo.products.songs.content" :key="song">
                            {{ song.name }}
                    </li>
                </ul>
        </div>
        
        <div class="artist-description">
            <em>{{ artistInfo.description }}</em>
        </div>

        
    </div>
    
    
</template>

<script>
export default {
    data(){
        return {
            shareLink: window.location.origin + this.$route.path
        }
    },
    computed: {
        artistInfo() {
            return this.$store.state.artistInfo;
        },
    },
    methods: {
        getArtistLink(){
            alert(this.shareLink);
        }
    }
    
}
</script>

<style scoped>

.artist-container{
    background: #acf1d4b7;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: column;
    
}

.artist-heading{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.artist-header{
    margin: 0;
    padding: 1vh 0;
    text-align: center;
    font-size: 3vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
}

/* .share-link{
    display: none;
    margin: 0 auto;
    width: fit-content;
    padding: 0.5vh 0.5vw;
    background: whitesmoke;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #22577a;;
    outline: 1px solid #22577a;
} */

.show{ display: flex }

.artist-metadata{
    display: flex;
    justify-content: center;
    width: 40vw;
    margin: 0 auto;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #22577a;
}

.artist-description{
    text-align: left;
    margin: 0 auto;
    width: 90%;
    color: #22577a;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 1.5vh;
}

.artist-metadata h2{
    font-size: 2.5vh;
    padding: 0;
    margin: 0.5vh 0;
}

.thumbnail{
    max-width: fit-content;
    align-self: center;
}

button{
    font-size: 2vh;
    padding: 0 1vw;
    color: #22577a;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
}

</style>