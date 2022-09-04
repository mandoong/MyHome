<template>
    <div>
        <div class="w-full h-80 flex justify-between items-center">
            <div 
                class="text-4xl hover:opacity-50" 
                @click="countDown">&lt;</div>
            <div>
                <ul :class="on" class="text-3xl text-center transition-all duration-500">
                    <li class="mb-4" v-for="a in words[count]" :key="a">
                        {{a}}
                    </li>
                </ul>
            </div>
            <div class="text-4xl hover:opacity-50" @click="countUp">&gt;</div>
        </div>

        <div class="flex flex-col justify-center items-center">
            <div class="mb-2 text-lg font-sans font-bold">Jurgen Kloop</div>
            <div class="w-52 flex justify-between text-xs font-sans font-bold">
                <div class="text-gray-500">product Management</div>
                <div class="text-gray-400">at</div>
                <div class="text-blue-400">Google Inc</div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            count: 1,
            active: false,
            words: [
                ["“One person can make a difference,","and everyone should try.”"],
                ["“Courage and perseverance", "have a magical talisman, before which difficulties", "disappear and obstacles vanish into air.”"],
                ["“In the end, it’s not the years in your","life that count. It’s the life in your years”"],
                ["“It is hard to fail,","but it is worse never", "to have tried to succeed.”"],
                ["“If you’re walking down the right path and", "you’re willing to keep walking,", "eventually you’ll make progress”"],
            ],
            on: {
                "opacity-0": false
            }

        }
    },

    methods: {
        countDown() {
            this.on['opacity-0'] = true;

            setTimeout(function() {
                if (this.count <= 0) {
                    this.count = this.words.length -1;
                }
                else {
                    this.count--
                }

                this.on['opacity-0'] = false;
            }.bind(this),1000
            );
        },

        countUp() {
            this.on['opacity-0'] = true;

            setTimeout(function() {
                if (this.count >= this.words.length -1) {
                    this.count = 0
                }
                else {
                    this.count++
                }

                this.on['opacity-0'] = false;
            }.bind(this),1000
            )
            

        },
    }
}


</script>

<style>

.on {
    opacity: 0;
}


</style>