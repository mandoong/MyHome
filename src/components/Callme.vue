<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <div>
    <div class="w-full h-80 flex justify-between items-center">
      <div class="text-4xl hover:opacity-50" @click="countDown">&lt;</div>
      <div class="relative w-full h-full">
        <template :key="i" v-for="(word, i) in words">
          <Transition name="fade">
            <ul
              v-if="selectedWordIndex === i"
              class="text-3xl text-center absolute w-full h-full"
            >
              <div
                class="flex flex-col w-full h-full items-center justify-center"
              >
                <li class="mb-4" v-for="a in word" :key="a">
                  {{ a }}
                </li>
              </div>
            </ul>
          </Transition>
        </template>
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
        ["“One person can make a difference,", "and everyone should try.”"],
        [
          "“Courage and perseverance",
          "have a magical talisman, before which difficulties",
          "disappear and obstacles vanish into air.”",
        ],
        [
          "“In the end, it’s not the years in your",
          "life that count. It’s the life in your years”",
        ],
        [
          "“It is hard to fail,",
          "but it is worse never",
          "to have tried to succeed.”",
        ],
        [
          "“If you’re walking down the right path and",
          "you’re willing to keep walking,",
          "eventually you’ll make progress”",
        ],
      ],
      on: {
        "opacity-0": false,
      },
      selectedWordIndex: 0,
    };
  },

  methods: {
    countDown() {
      this.selectedWordIndex--;
      if (this.selectedWordIndex <= 0) {
        this.selectedWordIndex = this.words.length - 1;
      }
    },

    countUp() {
      this.selectedWordIndex++;
      if (this.selectedWordIndex >= this.words.length) {
        this.selectedWordIndex = 0;
      }
    },
  },
};
</script>

<style>
.on {
  opacity: 0;
}
</style>
