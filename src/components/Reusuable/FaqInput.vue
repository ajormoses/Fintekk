<script lang="ts">
export default {
  props: ["question", "content"],

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
  <div class="mb-4">
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      @click="open"
      class="border border-white rounded-lg flex justify-between items-center py-2 px-4 lg:h-[60px] xl:h-[80px] cursor-pointer"
    >
      <p
        class="text-white text-base leading-[19.4px] xl:text-[24px] xl:leading-[30px]"
      >
        {{ question }}
      </p>
      <div>
        <img v-if="answer === false" src="/img/arrowdown.svg" />
        <img v-if="answer === true" src="/img/arrowup.svg" />
      </div>
    </div>
    <div v-if="answer" class="bg-white rounded-lg mt-[0.1rem]">
      <p
        class="text-[#172E80] leading-[24px] px-4 pt-2 pb-8 text-[14px] xl:text-[24px] xl:leading-[35px]"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
