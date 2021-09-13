<template>
    <div class="header-main">
        
        <div class="header-left">
            <router-link to="/">
                <i class="fas fa-infinity"></i>
                <i class="fas fa-music"></i> 
                <strong>&nbsp; infinimusic.com</strong>
            </router-link>
        </div>

        <div class="header-center">
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
    height: 10vh;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-left {
    width: 33vw;
    font-size: 3vh;
}

.header-left a {
    text-decoration: none;
    color: #22577a;
}

.header-left a:hover{
    zoom: 1.1;
}

.header-middle {
    width: 33vw;
}

.header-right {
    width: 33vw;
}

</style>

<script>

import SearchComponent from '@/components/SearchComponent.vue'
import QueueComponent from '@/components/QueueComponent.vue'

export default {
  
  components: { SearchComponent, QueueComponent }
}
</script>