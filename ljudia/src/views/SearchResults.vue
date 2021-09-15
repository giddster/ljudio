<template>
    <h1>Your results for "{{ searchString }}"</h1>
    
    <div v-for="searchResult in searchResults" :key="searchResult.videoId">
    
    </div>
    
</template>

<script>
export default {
    computed: {
        searchString() {
            return this.$store.state.searchString
        },
        searchResults() {
            return this.$store.state.searchResults.content
        }
    },
}


</script>