<template>
    <h1 id="faq-heading">Frequently Asked Questions</h1>
    
    <div class="faq-container">
        <details>
            <summary>
                <strong>Does this service cost money?</strong>
            </summary>
           No, infinimusic is completely free of charge! We don't even ask you to create an account to listen to your favorite music!
        </details>

        <details>
            <summary>
                <strong>Can I stream music from my phone or tablet?</strong>
            </summary>
            Yes! Infinimusic is designed to scale with all device screens.
        </details>

        <details>
            <summary>
                <strong>Can I share links to the music here with my friends and family?</strong>
            </summary>
            Yes, you can generate links for individual tracks, for albums and for artists.
        </details>

        <details>
            <summary>
                <strong>I'm looking for very specific music. Will I find it here?</strong>
            </summary>
            Try searching for it from the search bar! Our music library is always expanding, but if you're missing something, send us an e-mail!
        </details>

        <details>
            <summary>
                <strong>I'm experiencing bugs, what do I do?</strong>
            </summary>
            Please send us an e-mail and describe the bug as thoroughly as possible. Please attach screenshots if you can.
        </details>

        <details>
            <summary>
                <strong>Is this service even legal?</strong>
            </summary>
            <a href="https://www.youtube.com/watch?v=nz20lu2AM2k" target="blank">I will make it legal</a>
        </details>

        <details>
            <summary>
                <strong>How did you make this?</strong>
            </summary>
            infinimusic is a web application made with VueJS, using the Heroku API to access the YouTube Music library.
        </details>

    </div>
    

</template>

<style>

#faq-heading{
    text-align: center;
    font-size: 5vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
}

.faq-container{
    margin: 0 10vw 0 10vw;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

h1, details{
    color: #22577a;
}

details{
    font-size: 2.5vh;
    padding: 1vh 0;
    cursor: pointer;
}


</style>