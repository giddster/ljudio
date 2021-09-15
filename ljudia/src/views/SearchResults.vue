<template>
    <h1>Your results for "never gonna give you up"</h1>

    
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