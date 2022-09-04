<template>
    <div class="my-20">
        <div class="text-4xl text-center">Education & Experience</div>
        <div class="w-full flex mt-10 mb-4 text-gray-400 font-sans text-xs">
            <div class="w-1/3">2014</div>
            <div class="w-1/3">2015 - 2019</div>
            <div class="w-1/3">2020 - PRESENT</div>
        </div>
        <div>
            <ul class="flex">
                <li class="w-1/3" v-for="a in Education" :key="a">
                    <div>
                        <li class="my-6" v-for="b in a" :key="b">
                            <div class="text-lg">{{b.co}}</div>
                            <div class="text-xs font-sans text-gray-400">{{b.lo}}</div>
                        </li>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            Education : {
                2014 : [ 
                    {"co" : "Bachelor Degree of Design", "lo" : "RMIT University" },
                    {"co" : "UI/UX Design Certificate", "lo" : "University of Houstom, US" }
                ],
                2015 : [ 
                    {"co" : "Design Iternship", "lo" : "CMC Corporation, UK" },
                    {"co" : "Graphic Desiner", "lo" : "Tripadvisor Ltd, UK" },
                    {"co" : "Leader Graphic Design", "lo" : "New Centery Media JSC, UK" },
                    {"co" : "Web Designer", "lo" : "Freelancer" },
                    {"co" : "Web Designer / Author", "lo" : "Envato Market" }
                ],
                2020 : [ 
                    {"co" : "Product Designe Management", "lo" : "Dribbble LLC, UK" },
                    {"co" : "Art Director / Co-Founder", "lo" : "Spotify" },
                    {"co" : "Founder", "lo" : "iDesign Magazine" },
                    {"co" : "Author of The Book", "lo" : "Work for money, Design for Love" },
                ]
            }
        }
    }
}

</script>