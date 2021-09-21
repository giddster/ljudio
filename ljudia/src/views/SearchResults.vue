<template>
    <div v-if="searchResults.length" class="results-container">
        <h1 class="results-heading"> Your results for "{{ searchString }}"</h1>

        <div v-for="result in searchResults" :key="result" id="songs">
                <div v-if="result.type == 'song'" class="single-result">
                    <div class="result-metadata">
                        <img :src="result.thumbnails[1].url" alt="">
                        <p> Title: "{{result.name}}"</p> 
                        <p>Artist: {{result.artist.name}}</p>
                        <p>Album: {{result.album.name}}</p>
                    </div>

                    <div class="result-buttons">
                        <button id="result-playbutton" @click="loadSongToPlayer(result)"> <i class="fas fa-play mini-buttons" id="mini-playbutton"></i> Play </button>
                        <button id="result-queuebutton" @click="addToQueue(result)"> <i class="fas fa-plus"></i> Add to queue </button>
                    </div>
                </div>
        </div>

        <div v-for="result in searchResults" :key="result" id="artists">
                <div v-if="result.type == 'artist'" class="single-result">
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
            this.$store.dispatch('populateLoadedSong', result)
        },
        addToQueue(result){
            this.$store.dispatch('addToQueue', result)
        }
    }
}


</script>

<style scoped>
.results-container{
    background: #acf1d4b7;
    padding: 1vh 1vw;
}

.results-heading{
    text-align: center;
    font-size: 3vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
}

p, .sort-select{
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    padding: 0;
    margin: 5px;
    color: #22577a;
    font-size: 1.8vh;
}

.sort-select{
    text-align: center;
}

.show{
    display: flex;
}

.single-result{
    width: 75%;
    margin: 0 auto;
    padding: 1vh 1vw;
    display: flex;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #22577a;
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
    background-color: #3ed9db;
}

#result-playbutton{
    color: #57cc99;
}

#result-queuebutton{
    color: #22577a;
}

</style>