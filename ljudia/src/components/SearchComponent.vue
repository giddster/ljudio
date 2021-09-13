<template>
    
    <form>
        <input type="text" class="searchbar" placeholder="Search for music..">
        <button class="search-btn"> <i class="fas fa-search"></i> </button>
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
    color: #9DBFAF;
}

.search-btn{
    background: #0083ee;
    height: 3vh;
    color: white;
    font-size: 17px;
    border: 2px solid #0083ee;
    border-left: none; 
    cursor: pointer;
}

</style>