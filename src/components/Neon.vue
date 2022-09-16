<template>

<div class="flex bg justify-center">
    <div class="flex justify-center items-center -mr-14 w-20 h-20 rounded-full text-shadow text-yellow-100 text-2xl font-bold bg-yellow-100/50">N</div>
    <div class="flex justify-center items-center -mr-14 w-20 h-20 rounded-full text-shadow1 text-yellow-100 text-2xl font-bold bg-yellow-100/50">E</div>
    <div class="flex justify-center items-center -mr-14 w-20 h-20 rounded-full text-shadow2 text-yellow-100 text-2xl font-bold bg-yellow-100/50">O</div>
    <div class="flex justify-center items-center -mr-14 w-20 h-20 rounded-full text-shadow3 text-yellow-100 text-2xl font-bold bg-yellow-100/50">N</div>

</div>

</template>

<style scoped>

.text-shadow {
    text-shadow: -1px 4px black;
    background: rgb(245,255,144);
    background: radial-gradient(circle, rgba(245,255,144,0.3967517401392111) 0%, rgba(252,70,107,0) 52%);
    animation: blink linear infinite 1s;
    font-family: Neon;
}

.text-shadow1 {
    text-shadow: 0px 4px black;
    background: rgb(245,255,144);
    background: radial-gradient(circle, rgba(245,255,144,0.3967517401392111) 0%, rgba(252,70,107,0) 52%);
    animation: blink linear infinite 1.5s;
    font-family: Neon;
}

.text-shadow2 {
    text-shadow: 0px 4px black;
    background: rgb(245,255,144);
    background: radial-gradient(circle, rgba(245,255,144,0.3967517401392111) 0%, rgba(252,70,107,0) 52%);
    animation: blink linear infinite 3s;
    font-family: Neon;
}

.text-shadow3 {
    text-shadow: 2px 4px black;
    background: rgb(245,255,144);
    background: radial-gradient(circle, rgba(245,255,144,0.3967517401392111) 0%, rgba(252,70,107,0) 52%);
    animation: blink linear infinite 4s;
    font-family: Neon;
}

.bg {
    background-image: url("src/assets/bg.png");
}

.ne {
    font-family: Neon;
}

@keyframes blink {
    80% {
        opacity: 0.9;
    }

    90% {
        opacity: 0.5;
    }

    93% {
        opacity: 0.5;
    }
    
    95% {
        opacity: 0.5;
    }
}

</style>



