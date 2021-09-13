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

.header-main{
    background: #38a3a5;
    color: #22577a;
    height: 100%;
    display: flex;
    align-items: center;
}

.header-left {
    width: 33vw;
    height: 70%;
    font-size: 3vh;
    outline: 1px solid black;
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
    height: 70%;
    outline: 1px solid black;

}

.header-right {
    width: 33vw;
    height: 70%;
    outline: 1px solid black;
}

</style>

<script>

import SearchComponent from '@/components/SearchComponent.vue'
import QueueComponent from '@/components/QueueComponent.vue'

export default {
  
  components: { SearchComponent, QueueComponent }
}
</script>