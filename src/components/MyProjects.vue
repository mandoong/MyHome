<template>
    <div class="my-20">
        <div class="w-full mb-20 text-center text-4xl">My Latest Projects</div> 

        <div>
            <div>
                <ul class="flex">
                    <li class="w-1/3" v-for="a in gallery" :key="a">
                         <div class="w-1/3 h-20">
                            <div>{{a.img}}</div>
                            <div></div>
                         </div>
                         
                         
                    </li>
                </ul>   
            </div> 
        </div>
    </div>
    
</template>


<script>

export default {
    data() {
        return {
            gallery : [
                {'img' : 'url', 'velue' : 'Web Design', 'name' : 'Supro Online Store' },
                {'img' : 'url', 'velue' : 'Illustraion', 'name' : 'LW Poster' },
                {'img' : 'url', 'velue' : 'ADvertising', 'name' : 'film & Art Festival' },
                {'img' : 'url', 'velue' : 'Web Design', 'name' : 'SSG Market' },
                {'img' : 'url', 'velue' : 'Grid Design', 'name' : 'Mine Cube Craft' },
                {'img' : 'url', 'velue' : 'Full Design', 'name' : 'Flex Of The Flex' },
            ]
        }
    }
}



</script>