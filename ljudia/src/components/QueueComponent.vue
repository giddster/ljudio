<template>
    <div class="dropdown">
        <div class="queue-button" @click="showQueue()">
            <i class="fas fa-bars"></i>
            <strong class="queue-header">
                 My Queue<sup v-if="myQueue.length" id="queue-sup">{{myQueue.length}}</sup>
            </strong>
        </div>

        <div id="queueDropdown" class="dropdown-content">
                <div v-for="item in myQueue" :key="item" class="content-wrapper">
                    <div class="queue-metadata">
                        <p><em> {{ item.name }} </em> – </p>
                        <p>{{ item.artist.name }}</p>
                    </div>
                    
                    <div class="queue-buttons">
                        <button>
                            <i class="fas fa-chevron-up"></i>
                        </button>
                        <button>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <button @click="removeFromQueue(item)">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
        </div>
    </div>
    
    
</template>

<style scoped>

#queue-sup{
    color: red;
}
.dropdown{
    position: relative;
    display: inline-block;
}

.dropdown-content{
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: #f1f1f1;
    width: calc(82px + 16.8vw);
    font-size: 2vh;
    z-index: 1;
}

.content-wrapper{
    display: flex;
    width: 100%;
    outline: 1px solid #22577a;
}

.queue-metadata{
    display: flex;
    margin-left: 5px;
    flex-grow: 1;
    font-size: 1.4vh;
    overflow: hidden;
    white-space: nowrap;
}

.queue-buttons{
    align-self: center;
    font-size: 1.5vh;
    flex-shrink: 0;
    margin-right: 10px;
}

.queue-buttons button{
    color: #22577a;
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
        },

        removeFromQueue(item){
            this.$store.dispatch('removeFromQueue', item)
        }
    }
}

</script>