<template>
    <h1 class="results-heading"> Your results for "{{ searchString }}"</h1>
    <!-- <h1 v-else> Sorry, we couldn't find results for "{{ searchString }}"</h1> -->
    
    <div v-for="result in searchResults" :key="result.videoId">
            <div v-if="result.type == 'song' || result.type == 'album'" class="single-result">
                <p>Title: {{result.name}}</p> 
                <p>Artist: {{result.artist.name}}</p>
                <p>Album: {{result.album.name}}</p>
                <p>Type: {{result.type}}</p>

                <button> <i class="fas fa-play mini-buttons" id="mini-playbutton"></i> </button>
                <button> <i class="fas fa-bars"></i> </button>
                
            </div>
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
}


</script>

<style>
.results-heading{
    text-align: center;
    font-size: 3vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
}

</style>