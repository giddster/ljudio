<template>
    
    <div>
        <input @keyup.enter="search(searchString)" type="text" class="searchbar" placeholder="Search for music.." v-model="searchString" ref="searchboxValue">
        <button @click="search(searchString)" class="search-btn"> <i class="fas fa-search"> </i> </button>
    </div>
    
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
        search(searchString) {
                this.$store.dispatch('search', searchString)
                .then( () => {
                    this.$router.push(`/search/${searchString}`)
                })
                .then(this.$refs["searchboxValue"].value = '')
            }
        
    },
}

</script>