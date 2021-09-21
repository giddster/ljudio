<template>
        <h1 class="results-heading"> Your results for "{{ searchString }}"</h1>

        <div class="sort-select">
            <label for="sortselector">Results </label>
                <select @change="sortResults()" name="sortselector" id="sortselector">
                    <option value="all" selected="selected">All</option>
                    <option value="songs">Songs</option>
                    <option value="artists">Artists</option>
                </select>
        </div>

    <div v-for="(result, index) in searchResults" :key="index" class="results-container">
        
        <div id="songs" v-if="result.type == 'song'">
            <p>{{result.name}}</p>
            <p>{{ result.type }}</p> 
            <p>{{ index }}</p> 
            <p>{{ result.videoId }}</p> 
        </div>
        
        <div id="artists" v-else-if="result.type == 'artist'">
            <p>{{result.name}}</p>
            <p>{{ result.type }}</p> 
            <p>{{ index }}</p> 
            <p>{{ result.videoId }}</p> 
        </div>
    </div>

    <!-- <div class="no-results">
            <h1> Sorry, we couldn't find any results for "{{ searchString }}"</h1>
    </div> -->

</template>

<script>
export default {
    computed: {
        searchString() {
            return this.$store.state.searchString
        },
        songResults() {
            return this.$store.state.search.filter()
        }
    },
    methods: {
        sortResults(){
            let selectValue = document.getElementById('sortselector').value;
            let songs = document.getElementById('songs');
            let artists = document.getElementById('artists');

            if(selectValue === 'all'){
                console.log('show all');
                songs.style.display = 'flex'
                artists.style.display = 'flex'
            }
            else if(selectValue === 'songs'){
                console.log('show songs');
                songs.style.display = 'flex'
                artists.style.display = 'none'
            }
            else{
                console.log('show artists');
                artists.style.display = 'flex'
                songs.style.display = 'none'
            }
        },
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

#songs, #artists{
    display: none;
}

.sort-select{
    text-align: center;
}

.show{
    display: flex;
}


</style>