<template>

<div>
  <div class="md:hidden flex justify-center items-center w-full h-screen">
    <div> 이 페이지는 PC에서만 동작 합니다.</div>
  </div>
  

<div class="hidden snap-mandatory snap-y overflo md:block mx-auto px-10 max-w-7xl mt-10">
  <diV class="">
    <div class="w-full flex justify-between font-sans font-bold">
      <div class="w-40 flex justify-between items-center">
        <div>WORKS</div>
        <div>CONTACT</div>
      </div>
      <div class="w-40 flex justify-center flex-col items-center">
        <div class="w-20 h-20 bg-blue-200">img</div>
        <div class="flex justify-center flex-col items-center">
          <div>Lee</div>
          <div>Jeong Woong</div>
        </div>
      </div>
      <div class="w-40 flex justify-between items-center">
        <img class="w-6 h-6 animate-open" src="src/assets/git.png">
        <img class="w-6 h-6" src="src/assets/instar.png">
        <img class="w-6 h-6" src="src/assets/kakao.png">
      </div>
    </div>
  </diV>

  <div class="snap-center h-screen text-[3em] flex justify-center items-center flex-col mt-[-80px]">
    <div class="animate-open">Lee Jeong Woong</div>
    <div>UI/UX Interaction Desiger</div>
    <div>Based in Korea</div>
  </div>

  <div class="snap-start w-full flex justify-between">
    <div class="w-[30%] h-[1080px] flex flex-col justify-between py-40">
      <div class="text-gray-400 font-sans mb-6">BIOGRAPHY</div>
      <div>
        <div class="text-lg" >Work for money and</div>
        <div class="text-lg" >desigh for love!</div>
        <div class="text-lg" >I'm Woong, an UI/UX</div>
        <div class="text-lg" >Interation Designer based</div>
        <div class="text-lg" >in Korea</div>
      </div>
      <div class="text-gray-400 font-sans mb-6">CONTACT</div>
      <div>
        <div class="text-lg" >Seoul, Korea</div>
        <div class="text-lg" >ljw0566@gmail.com</div>
        <div class="text-lg" >010-5033-0566</div>
      </div>
      <div class="text-gray-400 font-sans mb-6">SERVICES</div>
      <div>
        <div class="text-lg" >Website Design</div>
        <div class="text-lg" >Mobile Application Design</div>
        <div class="text-lg" >Animation</div>
      </div>
    </div>

    <div class="w-full h-[1080px] flex justify-center items-center">
      <div class="w-[70%] aspect-[4/5.5] border-solid border border-gray-200 flex justify-center items-center rounded-full">
        <div class="m-5 w-full h-full bg-gray-200 rounded-full bg-cover bg-[url('/src/assets/main.png')]"></div>
      </div> 
    </div>

    <div class="w-[30%] text-right h-[1080px] flex flex-col justify-between py-40">
      <div class="text-gray-400 font-sans mb-6">
        <div>YEARS OF</div>
        <div>EXPERIENCE</div>
      </div>
        <div class="text-4xl" >8</div>
      <div class="text-gray-400 font-sans mb-6">
        <div>SATISFITATION</div>
        <div>CLIENTS</div>
      </div>
        <div class="text-4xl" >100%</div>
      <div class="text-gray-400 font-sans mb-6">CLIENTS ON WORLWIDE</div>
        <div class="text-4xl" >+ 80</div>
      <div class="text-gray-400 font-sans mb-6">PROJECTS DONE</div>
        <div class="text-4xl" >675</div>
    </div>
  </div>

  <div class="mx-auto w-[80%] flex justify-between mb-20 space-x-4">
    <div class="w-28 h-12 bg-gray-200">img</div>
    <div class="w-28 h-12 bg-gray-200">img</div>
    <div class="w-28 h-12 bg-gray-200">img</div>
    <div class="w-28 h-12 bg-gray-200">img</div>
    <div class="w-28 h-12 bg-gray-200">img</div>
  </div>

  <div class="snap-start border-t-[1px] border-solid border-black h-1"></div>

  <Home></Home>
  <div class="border-t-[1px] border-solid border-black h-1"></div>

  <education></education>
  <div class="border-t-[1px] border-solid border-black h-1"></div>

  <MyProjects></MyProjects>
  <div class="border-t-[1px] border-solid border-black h-1"></div>

  <callme></callme>
  <div class="border-t-[1px] border-solid border-black h-1"></div>

  <neon></neon>
  <div class="border-t-[1px] border-solid border-black h-1"></div>

  <div class="flex justify-between my-16 uppercase font-sans">
    <div class="w-80">@ 2020 moonex. all right reserved</div>
    <div class="w-40">ljw0566@gmail.com</div>
    <div class="w-80 pl-40 flex justify-between">
      <img class="w-6 h-6" src="src/assets/git.png">
      <img class="w-6 h-6" src="src/assets/instar.png">
      <img class="w-6 h-6" src="src/assets/kakao.png">
    </div>
  </div>
</div>

</div>
</template>

<style>

div
{
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

@font-face {
    font-family: 'neon';
    src: url('src/fonts/Playball-Regular.ttf') format('truetype');
}


</style>

<script>

import Home from './components/Advantage.vue'
import Education from './components/Education.vue'
import MyProjects from './components/MyProjects.vue'
import Callme from './components/Callme.vue'
import Neon from './components/Neon.vue'



export default {
  data() {
    return {

    }
  },

  components: {
    "Home": Home,
    "Education": Education,
    "MyProjects": MyProjects,
    "Callme": Callme,
    "Neon": Neon,
}
}



</script>