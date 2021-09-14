<template>
    <div class="footer-main">
        <div class="footer-left">
            &copy; Christian Elm 2021
        </div>

        <div class="footer-middle">
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/faq">FAQ</router-link> |
                <router-link to="/about">About</router-link> 
            </nav>
        </div>

        <div class="footer-right">
            <em>App made with <a href="https://vuejs.org/" target="blank">Vue</a> </em>
        </div>
    </div>
</template>

<style>

.footer-main{
    background: #22577ae1;
    color: #80ed99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    height: 100%;
}

.footer-main nav a, .footer-main a{
    text-decoration: none;
    color: #38A3A5;
}

.footer-main nav a:hover, .footer-main a:hover{
    color: #80ed99;
    zoom: 1.2;
}

.footer-left {
    width: 33%;
}

.footer-middle {
    width: 33%;
}

.footer-right{
    width: 33%;
}

</style>