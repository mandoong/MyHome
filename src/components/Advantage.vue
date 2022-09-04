<template>
<div class="my-20">
    <div class="w-full mb-20 text-center text-4xl">My Advantage</div>
    <ul class="w-full flex justify-between">
        <li v-for="a in advantage" :key="a">
            <div class="w-[100%] h-48 rounded-full flex justify-center items-center flex-col bg-gray-100 ">
                <div class="w-20 h-20 flex justify-center items-center bg-gray-300 " >{{a.url}}</div>
                <div class="w-28 text-center text-2xl mt-2">{{a.num}}</div>
            </div>
            <div class="text-center mt-4 font-sans">{{a.name}}</div>
        </li>
    </ul>
</div>
</template>

<script>

export default {
    data() {
        return {
            advantage : [
                {'url' : "as", 'num' : "90%", 'name' : 'figma'},
                {'url' : "as", 'num' : "95%", 'name' : 'Skeych'},
                {'url' : "as", 'num' : "82%", 'name' : 'Adobe XD'},
                {'url' : "as", 'num' : "93%", 'name' : 'Invisionapp'},
                {'url' : "as", 'num' : "76%", 'name' : 'Bootstrap'},
                {'url' : "as", 'num' : "88%", 'name' : 'HTMLS/CSS'},
            ]
        }
    }
}

</script>