<template>
    <h1>Your results for "{{ searchString }}"</h1>
    
    <div v-for="result in searchResults" :key="result.videoId">
            Type: {{result.type}}
            Name: {{result.name}}
            Artist: {{result.author}}
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