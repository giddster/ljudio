<template>
    <div class="dropdown">
        <div class="queue-button" @click="showQueue()">
            <i class="fas fa-bars"></i>
            <strong class="queue-header">
                 Your Queue<sup style="color:red;">1</sup>
            </strong>
        </div>

        <div id="queueDropdown" class="dropdown-content">
                <div class="queue-metadata">
                    <p><em> Sandstorm </em> by Darude</p>
                </div>
                
                <div class="queue-buttons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-trash-alt"></i>
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

.queue-metadata{
    width: 70%;
    font-size: 2vh;
}

.queue-buttons{
    width: 20%;
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
        MyQueue(){
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