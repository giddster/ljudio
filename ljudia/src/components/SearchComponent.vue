<template>
    
    <form>
        <input type="text" class="searchbar" placeholder="Search for music.." v-model="searchString" required>
        <router-link @click="search()" :to="'/search'" class="search-btn" tag="button"> <i class="fas fa-search"> </i> </router-link>
    </form>
    
</template>

<style scoped>
.searchbar{
    width: 70%;
    height: 3vh;
    border: 1px solid #00B4CC;
    border-right: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: gray;
}

.searchbar:hover, .searchbar:focus {
  background-color: rgb(236, 235, 235);
}

.search-btn{
    background: #22577a;
    color: white;
    font-size: 2.5vh;
    border: 1px solid #22577a;
    border-left: none; 
    cursor: pointer;
}

.search-btn:hover{
    background: #00B4CC;
    border: 2px solid #00B4CC;
}

</style>

<script>

export default {
    methods: {
        search() {
        this.$store.dispatch('search', this.searchString)
        }
    },
}

</script>