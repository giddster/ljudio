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
                        <button @click="moveUpInQueue(item)">
                            <i class="fas fa-chevron-up"></i>
                        </button>
                        <button @click="moveDownInQueue(item)">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <button @click="removeFromQueue(item)">
                            <i class="far fa-times-circle removebutton"></i>
                        </button>
                    </div>
                </div>
            <div v-if="myQueue.length" class="clear-queue">
                <button @click="clearQueue"><i class="fas fa-trash-alt"></i> Clear queue</button>
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
    background-color: #83b8b9;
    border: none;
    border-radius: 30px;
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

.clear-queue{
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    padding-top: 1vh;
    border: 1px solid #22577a;
}

.clear-queue button {
    font-size: 20px;
    color:rgba(250, 146, 146, 0.808);
}

.clear-queue button:hover {
    border: none;
    border-radius: 30px;
    background-color: lightgray;
}

.clear-queue button:active {
    color: rgba(245, 135, 135, 0.877);
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

    // watch: {
    //     myQueue(updatedQueue) {

    //     }
    // },

    methods: {
        showQueue(){
            document.getElementById('queueDropdown').classList.toggle("show")
        },

        moveUpInQueue(item){
            this.$store.dispatch('moveUpInQueue', item)
        },

        moveDownInQueue(item){
            this.$store.dispatch('moveDownInQueue', item)
        },

        removeFromQueue(item){
            this.$store.dispatch('removeFromQueue', item)
        },

        clearQueue(){
            this.$store.dispatch('emptyQueue')
        }
    }
}

</script>