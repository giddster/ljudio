<template>
    
    <form>
        <input type="text" class="searchbar" placeholder="Search for music..">
        <router-link :to="'/search'" class="search-btn"> <i class="fas fa-search"> </i> </router-link>
    </form>
    
</template>

<style>

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