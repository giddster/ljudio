<template>
    <h1> Your results for "{{ searchString }}"</h1>
    <!-- <h1 v-else> Sorry, we couldn't find results for "{{ searchString }}"</h1> -->
    
    <div v-for="result in searchResults" :key="result.videoId">
            <div>
                Type: {{result.type}}
                Name: {{result.name}}
                Artist: {{result.author}}
                <button>Play this song</button>
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
            return this.$store.state.search.content
        }
    },
}


</script>