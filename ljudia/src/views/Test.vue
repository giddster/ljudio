<template>
<div>
    <div v-for="song in music" :key="song.videoId">
        Type: {{song.type}}
        Artist: {{song.artist.name}}
        Name: {{song.name}}
    </div>
</div>
</template>


<script>
export default {
    computed: {
        music() {
            return this.$store.state.music.content
        }
    },
    created() {
        this.$store.dispatch('fetchMusic')
    }
}

</script>