<template>
    <div class="dropdown">
        <div class="queue-button" @click="showQueue()">
            <i class="fas fa-bars"></i>
            <strong class="queue-header">
                 My Queue<sup style="color:red;">1</sup>
            </strong>
        </div>

        <div id="queueDropdown" class="dropdown-content">
                <div class="queue-metadata">
                    <p><em> Sandstorm </em> by Darude</p>
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
    width: 18vw;
    z-index: 1;
    font-size: 2vh;
}

.queue-metadata{
    width: 60%;
    font-size: 1.5vh;
}

.queue-buttons{
    width: 40%;
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