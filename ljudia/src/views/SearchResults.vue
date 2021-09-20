<template>
    <div v-if="searchResults.length" class="results-container">
        <h1 class="results-heading"> Your results for "{{ searchString }}"</h1>
        
        <div class="sort-buttons">
            <p>Filter results by </p>
            <button>All</button>
            <button>Songs</button>
            <button>Artists</button>
        </div>

        <div class="all-results" v-for="result in searchResults" :key="result">

                <div v-if="result.type == 'song'" class="single-result">
                    <div class="result-metadata">
                        <img :src="result.thumbnails[1].url" alt="">
                        <p> Title: {{result.name}}</p> 
                        <p>Artist: {{result.artist.name}}</p>
                        <p>Album: {{result.album.name}}</p>
                    </div>

                    <div class="result-buttons">
                        <button id="result-playbutton" @click="loadSongToPlayer(result)"> <i class="fas fa-play mini-buttons" id="mini-playbutton"></i> Play song </button>
                        <button id="result-queuebutton"> <i class="fas fa-plus"></i> Add to queue </button>
                    </div>
                </div>

                <div v-else-if="result.type == 'artist'" class="single-result">
                    <div class="result-metadata">
                        <img :src="result.thumbnails[1].url" alt="">
                        <p>{{result.name}}</p> 
                    </div>

                    <div class="result-buttons">
                        <button id="result-playbutton"> <i class="fas fa-id-badge"></i> Visit artist profile </button>
                    </div>
                    
                </div>
        </div>
    </div>

    <div v-else class="no-results">
            <h1> Sorry, we couldn't find any results for "{{ searchString }}"</h1>
    </div>
</template>

<script>
export default {
    computed: {

        searchString() {
            return this.$store.state.searchString
        },
        searchResults() {
            return this.$store.state.search
        }
    },
    methods: {
        loadSongToPlayer(result){
            this.$store.state.loadedSong = result
        }
    }
}


</script>

<style scoped>
.results-container{
    background: #acf1d4b7;
    padding: 0.5vh 0;
    min-height: fit-content;
}

.results-heading{
    text-align: center;
    font-size: 3vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
}

.sort-buttons{
    display: flex;
    justify-content: center;
}

.all-results{
    margin: 0 auto;
    padding: 0.5vh 1vw;
}

.single-result{
    margin: 0 auto;
    padding: 1vh 1vw;
    width: 80%;
    display: flex;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    justify-content: center;
    align-items: center;
}

.single-result p{
    padding: 0;
    margin: 5px;
    color: #22577a;
}

.result-metadata{
    width: 50%;
}

.result-buttons{
    width: 50%;
    text-align: center;
}

.result-buttons button{
    font-size: 3vh;
    padding: 0 1vw;
    background: #38a3a500;
    border: none;
    cursor: pointer;
}

.result-buttons button:active{
    zoom: 1.1;
    background-color: #3ed9db;
}

#result-playbutton{
    color: #57cc99;
}

#result-queuebutton{
    color: #22577a;
}

</style>