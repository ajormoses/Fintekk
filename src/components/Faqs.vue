<script lang="ts">
export default {
  data() {
    return {
      answer: false,
    };
  },

  methods: {
    open() {
      this.answer = !this.answer;
    },
  },
};
</script>

<template>
  <div class="bg-[#2E5CFF] section">
    <div class="px-6">
      <h1 class="text-white text-[38px] font-bold">FAQs</h1>
      <div class="pt-8">
        <div
          @click="open"
          class="border border-white rounded-lg flex justify-between items-center py-2 px-4"
        >
          <p class="text-white text-base leading-[19.4px]">
            Is fintekk’s security guaranteed?
          </p>
          <div>
            <img v-if="answer === false" src="/img/arrowdown.svg" />
            <img v-if="answer === true" src="/img/arrowup.svg" />
          </div>
        </div>
        <div v-if="answer" class="bg-white rounded-lg mt-[0.1rem]">
          <p class="text-[#172E80] leading-[24px] px-4 pt-2 pb-8 text-[14px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
