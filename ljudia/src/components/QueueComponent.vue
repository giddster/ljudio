<template>
    <div class="dropdown">
        <div class="queue-button" @click="showQueue()">
            <i class="fas fa-bars"></i>
            <strong class="queue-header">
                 My Queue<sup style="color:red;">{{myQueue.length}}</sup>
            </strong>
        </div>

        <div id="queueDropdown" class="dropdown-content">
                <div v-for="item in myQueue" :key="item" class="content-wrapper">
                    <div class="queue-metadata">
                        <p><em> {{ item.name }} </em> </p>
                        <p>{{ item.artist.name }}</p>
                    </div>
                    
                    <div class="queue-buttons">
                        <button>
                            <i class="fas fa-chevron-up"></i>
                        </button>
                        <button>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <button>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                
                
        </div>
    </div>
    
    
</template>

<style scoped>

.dropdown{
    position: relative;
    display: inline-block;
}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    width: 20vw;
    z-index: 1;
    font-size: 2vh;
}

.content-wrapper{
    display: flex;
}

.queue-metadata{
    font-size: 1.5vh;
    align-self: center;
}

.queue-buttons{
    align-self: center;
}

.queue-buttons button{
    color: #22577a;
    background: #38a3a500;
    border: none;
}

.queue-buttons button:hover{
    background-color: #38a3a5;
}

.queue-buttons button:active{
    background-color: #3ed9db;
}

.queue-button{
    cursor: pointer;
}

.queue-header{
    font-family: 'Bungee', cursive;
}

.show {display:flex;}

</style>

<script>
export default {
    computed: {
        myQueue(){
            return this.$store.state.queue;
        }
    },

    methods: {
        showQueue(){
            document.getElementById('queueDropdown').classList.toggle("show");
        }
    }
}

</script>