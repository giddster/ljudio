<template>
    <div class="header-main">
        
        <div class="header-left">
            <router-link to="/">
                <i class="fas fa-infinity"></i>
                <i class="fas fa-music"></i> 
                <strong>&nbsp; infinimusic.com</strong>
            </router-link>
        </div>

        <div class="header-middle">
            <SearchComponent />
        </div>

        <div class="header-right">
            <QueueComponent />
        </div>

    </div>
</template>

<style>
@media screen and (max-width: 650px){
    .header-left{
        display: none;
    }
    .header-middle, .header-right{
        flex-grow: 1;
    }
}


.header-main{
    background: #38a3a5c9;
    color: #22577a;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-left, .header-middle, .header-right{
    padding: 1vh 0;
    /* outline: 1px solid black; */
}

.header-left {
    width: 33vw;
    font-size: 1.8rem;
    font-family: 'Bungee', cursive;
}

.header-left a {
    text-decoration: none;
    color: #22577a;
}

.header-left a:hover{
    zoom: 1.1;
    color: #0063a5;
}

.header-middle {
    width: 33vw;
    display: flex;
    justify-content: center;
}

.header-right {
    width: 33vw;
    font-size: 3vh;
}

</style>

<script>

import SearchComponent from '@/components/SearchComponent.vue'
import QueueComponent from '@/components/QueueComponent.vue'

export default {
  
  components: { SearchComponent, QueueComponent }
}
</script>